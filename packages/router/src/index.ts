import {
  getPersonalPlan,
  getServerPlan,
  calculateEffectiveEntitlements,
  getEffectiveModelConfig
} from "@okg/config";

export interface RouterRequest {
  selectedModelId: string;
  planId: string;
  planType: "personal" | "server";
}

export interface RouterResult {
  selectedModelId: string;
  omniRouteModel?: string;
  tokenCost: number;
  dailyLimit?: number;
  contextLimit: number;
}

export class SmartModelRouter {
  resolve(request: RouterRequest): RouterResult {
    const plan =
      request.planType === "personal"
        ? getPersonalPlan(request.planId)
        : getServerPlan(request.planId);

    if (!plan) {
      throw new Error(`Unknown plan: ${request.planId}`);
    }

    const entitlements =
      calculateEffectiveEntitlements(plan);

    const model = getEffectiveModelConfig(
      request.selectedModelId,
      entitlements
    );

    if (!model) {
      throw new Error(
        `Model "${request.selectedModelId}" is not available for plan "${request.planId}".`
      );
    }

    return {
      selectedModelId: model.modelId,
      omniRouteModel: model.omniRouteModel,
      tokenCost: model.tokenCost,
      dailyLimit: model.dailyLimit,
      contextLimit: Math.min(
        entitlements.contextLimit,
        model.contextLimit
      )
    };
  }
}
