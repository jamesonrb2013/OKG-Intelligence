export type PlanType = "personal" | "server";

export interface ModelDefinition {
  id: string;
  displayName: string;
  omniRouteModel: string;
  defaultTokenCost: number;
  enabled: boolean;
}

export interface PlanDefinition {
  id: string;
  name: string;
  type: PlanType;
  monthlyTokens: number;
  dailyTokens: number;
  dailyRequests: number;
  concurrentRequests: number;
  contextLimit: number;
  availableModels: string[];
}