import type { PlanDefinition } from "./types.js";

export const PERSONAL_PLANS: PlanDefinition[] = [
  {
    id: "free",
    name: "Free",
    type: "personal",
    monthlyTokens: 5000,
    dailyTokens: 500,
    dailyRequests: 20,
    concurrentRequests: 1,
    contextLimit: 16000,
    availableModels: []
  },
  {
    id: "supporter",
    name: "Supporter",
    type: "personal",
    monthlyTokens: 50000,
    dailyTokens: 5000,
    dailyRequests: 100,
    concurrentRequests: 2,
    contextLimit: 32000,
    availableModels: []
  },
  {
    id: "pro",
    name: "Pro",
    type: "personal",
    monthlyTokens: 250000,
    dailyTokens: 25000,
    dailyRequests: 500,
    concurrentRequests: 4,
    contextLimit: 64000,
    availableModels: []
  },
  {
    id: "advanced",
    name: "Advanced",
    type: "personal",
    monthlyTokens: 1000000,
    dailyTokens: 100000,
    dailyRequests: 2000,
    concurrentRequests: 8,
    contextLimit: 128000,
    availableModels: []
  },
  {
    id: "ultimate",
    name: "Ultimate",
    type: "personal",
    monthlyTokens: 3000000,
    dailyTokens: 300000,
    dailyRequests: 5000,
    concurrentRequests: 16,
    contextLimit: 256000,
    availableModels: []
  }
];

export const SERVER_PLANS: PlanDefinition[] = [
  {
    id: "free",
    name: "Free",
    type: "server",
    monthlyTokens: 10000,
    dailyTokens: 1000,
    dailyRequests: 50,
    concurrentRequests: 1,
    contextLimit: 16000,
    availableModels: []
  },
  {
    id: "basic",
    name: "Basic",
    type: "server",
    monthlyTokens: 100000,
    dailyTokens: 10000,
    dailyRequests: 250,
    concurrentRequests: 2,
    contextLimit: 32000,
    availableModels: []
  },
  {
    id: "pro",
    name: "Pro",
    type: "server",
    monthlyTokens: 500000,
    dailyTokens: 50000,
    dailyRequests: 1000,
    concurrentRequests: 6,
    contextLimit: 64000,
    availableModels: []
  },
  {
    id: "advanced",
    name: "Advanced",
    type: "server",
    monthlyTokens: 2000000,
    dailyTokens: 200000,
    dailyRequests: 5000,
    concurrentRequests: 15,
    contextLimit: 128000,
    availableModels: []
  },
  {
    id: "ultimate",
    name: "Ultimate",
    type: "server",
    monthlyTokens: 7500000,
    dailyTokens: 750000,
    dailyRequests: 15000,
    concurrentRequests: 30,
    contextLimit: 256000,
    availableModels: []
  }
];