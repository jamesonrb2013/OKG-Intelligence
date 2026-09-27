export type ModelGeneration = 1 | 2 | 3 | 4 | 5;

export type ModelVariant =
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

export type ModelStatus =
  | "ACTIVE"
  | "MAINTENANCE"
  | "DISABLED"
  | "EXPERIMENTAL";

export interface ModelConfig {
  modelId: string;
  name: string;
  displayName: string;
  generation: ModelGeneration;
  variant: ModelVariant;

  provider?: string;

  enabled: boolean;
  status: ModelStatus;
  maintenance?: {
    startAt?: string;
    endAt?: string;
    message?: string;
  };

  defaultTokenCost: number;
  defaultDailyLimit?: number;
  defaultMonthlyLimit?: number;

  contextLimit: number;
  outputLimit?: number;

  priority: number;

  capabilities: string[];

  supportedPlans: string[];
  supportedExpansions: string[];

  fallbackModel?: string;

    ultimate: boolean;
  experimental: boolean;

  omniRouteModel?: string;
}
