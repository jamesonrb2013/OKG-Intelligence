import type { PlanConfig } from "../types/Plan.js";

export const SERVER_PLANS: Record<string, PlanConfig> = {
  free: {
    planId: "server_free",
    category: "server",
    name: "Free Server",
    description: "Free OKG Intelligence server plan.",

    monthlyTokens: 10_000,
    dailyTokens: 1_000,
    dailyRequests: 50,
    concurrentRequests: 1,

    contextLimit: 16_000,
    priority: "Low",

    features: [
      "basic_discord_ai",
      "standard_okg_configuration"
    ],

    modelAccess: ["2.1"],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: true,

    customizationLevel: 0,
    enabled: true
  },

  basic: {
    planId: "server_basic",
    category: "server",
    name: "Basic Server",
    description: "Basic OKG Intelligence server plan.",

    monthlyTokens: 100_000,
    dailyTokens: 10_000,
    dailyRequests: 250,
    concurrentRequests: 2,

    contextLimit: 32_000,
    priority: "Normal",

    features: [
      "basic_discord_ai",
      "model_selection",
      "default_model",
      "basic_server_prompt",
      "basic_channel_configuration",
      "basic_usage_stats"
    ],

    modelAccess: [],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: true,

    customizationLevel: 1,
    enabled: true
  },

  pro: {
    planId: "server_pro",
    category: "server",
    name: "Pro Server",
    description: "Pro OKG Intelligence server plan.",

    monthlyTokens: 500_000,
    dailyTokens: 50_000,
    dailyRequests: 1_000,
    concurrentRequests: 6,

    contextLimit: 64_000,
    priority: "High",

    features: [
      "basic_discord_ai",
      "model_selection",
      "per_channel_models",
      "role_model_access",
      "role_token_limits",
      "role_model_limits",
      "custom_server_prompt",
      "model_specific_quotas",
      "usage_dashboard",
      "server_analytics"
    ],

    modelAccess: [],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: true,

    customizationLevel: 2,
    enabled: true
  },

  advanced: {
    planId: "server_advanced",
    category: "server",
    name: "Advanced Server",
    description: "Advanced OKG Intelligence server plan.",

    monthlyTokens: 2_000_000,
    dailyTokens: 200_000,
    dailyRequests: 5_000,
    concurrentRequests: 15,

    contextLimit: 128_000,
    priority: "Very High",

    features: [
      "advanced_user_controls",
      "advanced_role_controls",
      "advanced_channel_controls",
      "custom_fallback_chains",
      "model_specific_fallback",
      "token_based_fallback",
      "advanced_server_analytics"
    ],

    modelAccess: [],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: true,

    customizationLevel: 3,
    enabled: true
  },

  ultimate: {
    planId: "server_ultimate",
    category: "server",
    name: "Ultimate Server",
    description: "Ultimate OKG Intelligence server plan.",

    monthlyTokens: 7_500_000,
    dailyTokens: 750_000,
    dailyRequests: 15_000,
    concurrentRequests: 30,

    contextLimit: 256_000,
    priority: "Maximum",

    features: [
      "unlimited_role_configuration",
      "advanced_user_overrides",
      "advanced_channel_routing",
      "multiple_fallback_chains",
      "scheduled_model_access",
      "scheduled_token_limits",
      "time_based_model_availability",
      "advanced_priority_rules",
      "custom_routing_rules",
      "advanced_analytics",
      "member_analytics",
      "model_cost_analytics",
      "advanced_moderation_ai",
      "experimental_discord_features",
      "maximum_server_priority"
    ],

    modelAccess: [],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: true,

    customizationLevel: 4,
    enabled: true
  }
};
