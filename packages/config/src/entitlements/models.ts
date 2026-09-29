import {
  MODEL_CATALOG,
  MODEL_DAILY_LIMITS
} from "../models/index.js";

import type {
  EffectiveEntitlements
} from "./index.js";

export interface EffectiveModelConfig {
  modelId: string;
  name: string;
  displayName: string;
  generation: 1 | 2 | 3 | 4 | 5;
  variant:
    | "standard"
    | "flash"
    | "mini"
    | "pro"
    | "lite"
    | "plus"
    | "plus-lite"
    | "pro-lite"
    | "flash-lite"
    | "complex"
    | "complex-pro"
    | "codex"
    | "codex-pro"
    | "ultimate";

  provider?: string;
  omniRouteModel?: string;

  enabled: boolean;
  status:
    | "ACTIVE"
    | "MAINTENANCE"
    | "DISABLED"
    | "EXPERIMENTAL";

  defaultTokenCost: number;
  defaultDailyLimit?: number;
  defaultMonthlyLimit?: number;

  tokenCost: number;
  dailyLimit?: number;
  monthlyLimit?: number;

  contextLimit: number;
  outputLimit?: number;

  priority: number;

  capabilities: string[];

  supportedPlans: string[];
  supportedExpansions: string[];

  ultimate: boolean;
  experimental: boolean;
}

export function getEffectiveModelConfig(
  modelId: string,
  entitlements: EffectiveEntitlements
): EffectiveModelConfig | null {
  const model = MODEL_CATALOG[modelId];

  if (!model) {
    return null;
  }

  if (!model.enabled || model.status !== "ACTIVE") {
    return null;
  }

  if (
    !entitlements.modelAccess.includes(modelId) &&
    !entitlements.modelAccess.includes("*")
  ) {
    return null;
  }

  const tokenCost =
    entitlements.plan.modelPriceOverrides[modelId] ??
    model.defaultTokenCost;

  const dailyLimit =
    entitlements.plan.modelLimitOverrides[
      `${modelId}:daily`
    ] ??
    entitlements.plan.modelLimitOverrides[modelId] ??
    model.defaultDailyLimit ??
    MODEL_DAILY_LIMITS[modelId];

  const monthlyLimit =
    entitlements.plan.modelLimitOverrides[
      `${modelId}:monthly`
    ] ??
    model.defaultMonthlyLimit;

  return {
    ...model,
    tokenCost,
    dailyLimit,
    monthlyLimit
  };
}

export function getAvailableModels(
  entitlements: EffectiveEntitlements
): EffectiveModelConfig[] {
  const models: EffectiveModelConfig[] = [];

  for (const modelId of Object.keys(MODEL_CATALOG)) {
    const model = getEffectiveModelConfig(
      modelId,
      entitlements
    );

    if (model) {
      models.push(model);
    }
  }

  return models.sort(
    (a, b) => b.priority - a.priority
  );
}
