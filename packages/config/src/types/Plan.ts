export type PlanCategory =
  | "personal"
  | "server"
  | "api"
  | "expansion";

export type BillingPeriod =
  | "monthly"
  | "one-time"
  | "custom";

export type Priority =
  | "Low"
  | "Normal"
  | "High"
  | "Very High"
  | "Maximum";

export interface PlanConfig {
  planId: string;
  category: PlanCategory;
  name: string;
  description: string;

  price?: number;
  billingPeriod?: BillingPeriod;

  monthlyTokens: number;
  dailyTokens: number;
  dailyRequests: number;
  concurrentRequests: number;

  contextLimit: number;
  priority: Priority;

  features: string[];

  modelAccess: string[];

  modelPriceOverrides: Record<string, number>;
  modelLimitOverrides: Record<string, number>;

  expansionAccess: string[];

  apiAccess: boolean;
  discordAccess: boolean;

  customizationLevel: 0 | 1 | 2 | 3 | 4;

  enabled: boolean;
}
