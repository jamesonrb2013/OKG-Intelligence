import {
  PERSONAL_PLANS,
  SERVER_PLANS,
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
    const plans =
      request.planType === "personal"
        ? PERSONAL_PLANS
        : SERVER_PLANS;

    const plan = Object.values(plans).find(
      (candidate) => candidate.planId === request.planId
    );

    if (!plan) {
      throw new Error(`Unknown plan: ${request.planId}`);
    }

    const model = getEffectiveModelConfig(
      request.selectedModelId,
      plan
    );

    if (!model) {
      throw new Error(
        `Model "${request.selectedModelId}" is not available for plan "${request.planId}".`
      );
    }

    return {
      selectedModelId: model.modelId,
      tokenCost: model.tokenCost,
      dailyLimit: model.dailyLimit,
      contextLimit: Math.min(
        plan.contextLimit,
        model.contextLimit
      )
    };
  }
}
