import type {
  ModelConfig,
  PlanConfig,
  ExpansionConfig
} from "../types.js";

export interface EffectiveEntitlements {
  plan: PlanConfig;

  monthlyTokens: number;
  dailyTokens: number;
  dailyRequests: number;
  concurrentRequests: number;
  contextLimit: number;

  priority: PlanConfig["priority"];

  features: string[];
  modelAccess: string[];
  expansionAccess: string[];

  apiAccess: boolean;
  discordAccess: boolean;

  customizationLevel: PlanConfig["customizationLevel"];
}

export function calculateEffectiveEntitlements(
  plan: PlanConfig,
  expansions: ExpansionConfig[] = []
): EffectiveEntitlements {
  const features = new Set(plan.features);
  const modelAccess = new Set(plan.modelAccess);
  const expansionAccess = new Set(plan.expansionAccess);

  let monthlyTokens = plan.monthlyTokens;
  let dailyTokens = plan.dailyTokens;
  let dailyRequests = plan.dailyRequests;
  let concurrentRequests = plan.concurrentRequests;
  let contextLimit = plan.contextLimit;

  let customizationLevel = plan.customizationLevel;

  for (const expansion of expansions) {
    if (!expansion.enabled) {
      continue;
    }

    for (const feature of expansion.includedFeatures) {
      features.add(feature);
    }

    for (const modelId of expansion.includedModels) {
      modelAccess.add(modelId);
    }

    monthlyTokens += expansion.includedTokens;

    for (const [limitName, value] of Object.entries(
      expansion.limitOverrides
    )) {
      switch (limitName) {
        case "dailyTokens":
          dailyTokens = Math.max(dailyTokens, value);
          break;

        case "dailyRequests":
          dailyRequests = Math.max(dailyRequests, value);
          break;

        case "concurrentRequests":
          concurrentRequests = Math.max(concurrentRequests, value);
          break;

        case "contextLimit":
          contextLimit = Math.max(contextLimit, value);
          break;

        case "monthlyTokens":
          monthlyTokens = Math.max(monthlyTokens, value);
          break;
      }
    }

    if (expansion.customizationLevelIncrease !== undefined) {
      customizationLevel = Math.min(
        4,
        customizationLevel + expansion.customizationLevelIncrease
      ) as PlanConfig["customizationLevel"];
    }

    for (const feature of expansion.apiFeatures) {
      features.add(feature);
    }

    for (const feature of expansion.discordFeatures) {
      features.add(feature);
    }

    expansionAccess.add(expansion.expansionId);
  }

  return {
    plan,

    monthlyTokens,
    dailyTokens,
    dailyRequests,
    concurrentRequests,
    contextLimit,

    priority: plan.priority,

    features: [...features],
    modelAccess: [...modelAccess],
    expansionAccess: [...expansionAccess],

    apiAccess: plan.apiAccess,
    discordAccess: plan.discordAccess,

    customizationLevel
  };
}

export { getEffectiveModelConfig } from "./models.js";
export type { EffectiveModelConfig } from "./models.js";
