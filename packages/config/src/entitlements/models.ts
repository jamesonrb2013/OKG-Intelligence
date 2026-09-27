import {
  MODEL_CATALOG,
  MODEL_DAILY_LIMITS
} from "../models/index.js";

import type {
  ModelConfig,
  PlanConfig
} from "../types.js";

export interface EffectiveModelConfig extends ModelConfig {
  tokenCost: number;
  dailyLimit?: number;
  monthlyLimit?: number;
}

export function getEffectiveModelConfig(
  modelId: string,
  plan: PlanConfig
): EffectiveModelConfig | null {
  const model = MODEL_CATALOG[modelId];

  if (!model) {
    return null;
  }

  if (!model.enabled || model.status !== "ACTIVE") {
    return null;
  }

  if (
    !plan.modelAccess.includes(modelId) &&
    !plan.modelAccess.includes("*")
  ) {
    return null;
  }

  const tokenCost =
    plan.modelPriceOverrides[modelId] ??
    model.defaultTokenCost;

  const configuredDailyLimit =
    plan.modelLimitOverrides[modelId] ??
    model.defaultDailyLimit ??
    MODEL_DAILY_LIMITS[modelId];

  const monthlyLimit =
    plan.modelLimitOverrides[`${modelId}:monthly`] ??
    model.defaultMonthlyLimit;

  return {
    ...model,
    tokenCost,
    dailyLimit: configuredDailyLimit,
    monthlyLimit
  };
}
