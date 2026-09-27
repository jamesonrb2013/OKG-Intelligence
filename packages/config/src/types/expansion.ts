export type ExpansionCategory =
  | "model"
  | "generation"
  | "token"
  | "customization"
  | "discord"
  | "api"
  | "feature"
  | "bundle";

export interface ExpansionConfig {
  expansionId: string;
  name: string;
  description: string;

  category: ExpansionCategory;

  price?: number;
  billingPeriod?: "monthly" | "one-time";

  includedModels: string[];
  includedTokens: number;

  includedFeatures: string[];

  limitOverrides: Record<string, number>;

  customizationLevelIncrease?: number;

  apiFeatures: string[];
  discordFeatures: string[];

  enabled: boolean;
}
