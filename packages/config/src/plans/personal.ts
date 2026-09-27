import type { PlanConfig } from "../types/Plan.js";

export const PERSONAL_PLANS: Record<string, PlanConfig> = {
  free: {
    planId: "personal_free",
    category: "personal",
    name: "Free",
    description: "Free personal OKG Intelligence plan.",

    monthlyTokens: 5_000,
    dailyTokens: 500,
    dailyRequests: 20,
    concurrentRequests: 1,

    contextLimit: 16_000,
    priority: "Low",

    features: [
      "basic_chat",
      "conversation_history",
      "basic_model_selection",
      "basic_dashboard",
      "basic_usage_stats"
    ],

    modelAccess: [
      "2.1",
      "2.1-flash",
      "2.1-pro",
      "2.5-mini"
    ],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: false,

    customizationLevel: 0,
    enabled: true
  },

  supporter: {
    planId: "personal_supporter",
    category: "personal",
    name: "Supporter",
    description: "Supporter personal OKG Intelligence plan.",

    monthlyTokens: 50_000,
    dailyTokens: 5_000,
    dailyRequests: 100,
    concurrentRequests: 2,

    contextLimit: 32_000,
    priority: "Normal",

    features: [
      "basic_chat",
      "conversation_history",
      "basic_model_selection",
      "basic_dashboard",
      "basic_usage_stats",
      "custom_instructions",
      "conversation_organization",
      "basic_personalization",
      "conversation_export",
      "supporter_badge",
      "early_selected_features"
    ],

    modelAccess: [
      "2.1",
      "2.1-flash",
      "2.1-pro",
      "2.5-mini",
      "3.1",
      "3.3-mini"
    ],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: false,

    customizationLevel: 1,
    enabled: true
  },

  pro: {
    planId: "personal_pro",
    category: "personal",
    name: "Pro",
    description: "Pro personal OKG Intelligence plan.",

    monthlyTokens: 250_000,
    dailyTokens: 25_000,
    dailyRequests: 500,
    concurrentRequests: 4,

    contextLimit: 64_000,
    priority: "High",

    features: [
      "basic_chat",
      "conversation_history",
      "advanced_model_selection",
      "advanced_dashboard",
      "usage_analytics",
      "custom_instructions",
      "conversation_organization",
      "advanced_personalization",
      "conversation_export",
      "file_uploads",
      "image_understanding",
      "folders",
      "model_comparison",
      "higher_output",
      "priority_processing",
      "memory_controls"
    ],

    modelAccess: [
      "2.1",
      "2.1-flash",
      "2.1-pro",
      "2.5-mini",
      "3.1",
      "3.2",
      "3.3",
      "3.4",
      "3.5",
      "3.6",
      "3.1-mini",
      "3.3-mini",
      "3.4-mini",
      "3.5-mini",
      "3.6-mini",
      "3.3-flash",
      "3.4-flash",
      "3.5-flash",
      "3.6-flash",
      "3.3-pro",
      "3.4-pro",
      "3.5-pro",
      "3.2-flash-lite",
      "3.3-flash-lite",
      "3.5-codex",
      "3.6-codex",
      "3.3-complex",
      "3.4-complex",
      "3.5-complex",
      "3.6-codex-pro",
      "4.1",
      "4.2",
      "4.3",
      "4.4",
      "4.5",
      "4.6",
      "4.3-flash",
      "4.4-flash",
      "4.5-flash",
      "4.4-pro",
      "4.5-pro",
      "4.6-pro",
      "4.1-mini",
      "4.4-mini",
      "4.5-mini",
      "4.6-mini",
      "4.4-complex",
      "4.5-complex",
      "4.6-complex",
      "4.2-flash-lite",
      "4.4-flash-lite",
      "4.5-codex-pro",
      "4.3-codex",
      "4.4-codex",
      "4.5-codex",
      "4.6-codex",
      "5.0-mini",
      "5.1-mini",
      "5.2-mini",
      "5.3-mini",
      "5.4-mini",
      "5.5-mini",
      "5.6-mini",
      "5.1-flash",
      "5.2-flash",
      "5.3-flash",
      "5.4-flash",
      "5.5-flash"
    ],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: false,

    customizationLevel: 2,
    enabled: true
  },

  advanced: {
    planId: "personal_advanced",
    category: "personal",
    name: "Advanced",
    description: "Advanced personal OKG Intelligence plan.",

    monthlyTokens: 1_000_000,
    dailyTokens: 100_000,
    dailyRequests: 2_000,
    concurrentRequests: 8,

    contextLimit: 128_000,
    priority: "Very High",

    features: [
      "advanced_model_routing",
      "custom_fallback_models",
      "batch_generation",
      "advanced_files",
      "large_context",
      "advanced_analytics",
      "experimental_features",
      "early_model_access",
      "higher_output"
    ],

    modelAccess: [
      "1.0",
      "2.1",
      "2.1-flash",
      "2.1-pro",
      "2.5-mini"
    ],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: false,

    customizationLevel: 3,
    enabled: true
  },

  ultimate: {
    planId: "personal_ultimate",
    category: "personal",
    name: "Ultimate",
    description: "Ultimate personal OKG Intelligence plan.",

    monthlyTokens: 3_000_000,
    dailyTokens: 300_000,
    dailyRequests: 5_000,
    concurrentRequests: 16,

    contextLimit: 256_000,
    priority: "Maximum",

    features: [
      "maximum_standard_model_access",
      "automatic_model_selection",
      "multiple_fallback_models",
      "maximum_context",
      "maximum_output",
      "advanced_memory_controls",
      "experimental_features",
      "early_access",
      "maximum_priority"
    ],

    modelAccess: [
      "1.0",
      "2.1",
      "2.1-flash",
      "2.1-pro",
      "2.5-mini"
    ],

    modelPriceOverrides: {},
    modelLimitOverrides: {},

    expansionAccess: [],

    apiAccess: false,
    discordAccess: false,

    customizationLevel: 4,
    enabled: true
  }
};
