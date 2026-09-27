import type { ModelConfig } from "../types/Model.js";

const model = (
  modelId: string,
  name: string,
  generation: 1 | 2 | 3 | 4 | 5,
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
    | "ultimate",
  defaultTokenCost: number,
  contextLimit = 256_000
): ModelConfig => ({
  modelId,
  name,
  displayName: `OKG ${name}`,
  generation,
  variant,

  enabled: true,
  status: "ACTIVE",

  defaultTokenCost,
  contextLimit,

  priority: 0,

  capabilities: ["text"],

  supportedPlans: [],
  supportedExpansions: [],

  ultimate: false,
  experimental: false
});

export const MODEL_CATALOG: Record<string, ModelConfig> = {
  "1.0": model("1.0", "1.0", 1, "standard", 10),

  "2.1": model("2.1", "2.1", 2, "standard", 10),
  "2.1-flash": model("2.1-flash", "2.1 Flash", 2, "flash", 5),
  "2.1-pro": model("2.1-pro", "2.1 Pro", 2, "pro", 25),
  "2.5-mini": model("2.5-mini", "2.5 Mini", 2, "mini", 4),

  "3.1": model("3.1", "3.1", 3, "standard", 15),
  "3.2": model("3.2", "3.2", 3, "standard", 20),
  "3.3": model("3.3", "3.3", 3, "standard", 25),
  "3.4": model("3.4", "3.4", 3, "standard", 30),
  "3.5": model("3.5", "3.5", 3, "standard", 35),
  "3.6": model("3.6", "3.6", 3, "standard", 40),

  "3.1-mini": model("3.1-mini", "3.1 Mini", 3, "mini", 8),
  "3.3-mini": model("3.3-mini", "3.3 Mini", 3, "mini", 10),
  "3.4-mini": model("3.4-mini", "3.4 Mini", 3, "mini", 12),
  "3.5-mini": model("3.5-mini", "3.5 Mini", 3, "mini", 15),
  "3.6-mini": model("3.6-mini", "3.6 Mini", 3, "mini", 18),

  "3.3-flash": model("3.3-flash", "3.3 Flash", 3, "flash", 8),
  "3.4-flash": model("3.4-flash", "3.4 Flash", 3, "flash", 10),
  "3.5-flash": model("3.5-flash", "3.5 Flash", 3, "flash", 12),
  "3.6-flash": model("3.6-flash", "3.6 Flash", 3, "flash", 15),

  "3.3-pro": model("3.3-pro", "3.3 Pro", 3, "pro", 40),
  "3.4-pro": model("3.4-pro", "3.4 Pro", 3, "pro", 50),
  "3.5-pro": model("3.5-pro", "3.5 Pro", 3, "pro", 60),

  "3.2-flash-lite": model("3.2-flash-lite", "3.2 Flash Lite", 3, "flash-lite", 3),
  "3.3-flash-lite": model("3.3-flash-lite", "3.3 Flash Lite", 3, "flash-lite", 4),

  "3.5-codex": model("3.5-codex", "3.5 Codex", 3, "codex", 45),
  "3.6-codex": model("3.6-codex", "3.6 Codex", 3, "codex", 55),

  "3.3-complex": model("3.3-complex", "3.3 Complex", 3, "complex", 45),
  "3.4-complex": model("3.4-complex", "3.4 Complex", 3, "complex", 55),
  "3.5-complex": model("3.5-complex", "3.5 Complex", 3, "complex", 65),

  "3.6-codex-pro": model(
    "3.6-codex-pro",
    "3.6 Codex Pro",
    3,
    "codex-pro",
    80
  ),

  "4.1": model("4.1", "4.1", 4, "standard", 45),
  "4.2": model("4.2", "4.2", 4, "standard", 50),
  "4.3": model("4.3", "4.3", 4, "standard", 55),
  "4.4": model("4.4", "4.4", 4, "standard", 60),
  "4.5": model("4.5", "4.5", 4, "standard", 70),
  "4.6": model("4.6", "4.6", 4, "standard", 80),

  "4.3-flash": model("4.3-flash", "4.3 Flash", 4, "flash", 15),
  "4.4-flash": model("4.4-flash", "4.4 Flash", 4, "flash", 18),
  "4.5-flash": model("4.5-flash", "4.5 Flash", 4, "flash", 22),

  "4.4-pro": model("4.4-pro", "4.4 Pro", 4, "pro", 70),
  "4.5-pro": model("4.5-pro", "4.5 Pro", 4, "pro", 85),
  "4.6-pro": model("4.6-pro", "4.6 Pro", 4, "pro", 100),

  "4.1-mini": model("4.1-mini", "4.1 Mini", 4, "mini", 15),
  "4.4-mini": model("4.4-mini", "4.4 Mini", 4, "mini", 18),
  "4.5-mini": model("4.5-mini", "4.5 Mini", 4, "mini", 20),
  "4.6-mini": model("4.6-mini", "4.6 Mini", 4, "mini", 25),

  "4.4-complex": model("4.4-complex", "4.4 Complex", 4, "complex", 80),
  "4.5-complex": model("4.5-complex", "4.5 Complex", 4, "complex", 95),
  "4.6-complex": model("4.6-complex", "4.6 Complex", 4, "complex", 110),

  "4.2-flash-lite": model(
    "4.2-flash-lite",
    "4.2 Flash Lite",
    4,
    "flash-lite",
    5
  ),

  "4.4-flash-lite": model(
    "4.4-flash-lite",
    "4.4 Flash Lite",
    4,
    "flash-lite",
    6
  ),

  "4.5-codex-pro": model(
    "4.5-codex-pro",
    "4.5 Codex Pro",
    4,
    "codex-pro",
    110
  ),

  "4.3-codex": model("4.3-codex", "4.3 Codex", 4, "codex", 65),
  "4.4-codex": model("4.4-codex", "4.4 Codex", 4, "codex", 75),
  "4.5-codex": model("4.5-codex", "4.5 Codex", 4, "codex", 90),
  "4.6-codex": model("4.6-codex", "4.6 Codex", 4, "codex", 105),

  "5.0": model("5.0", "5.0", 5, "standard", 90),
  "5.1": model("5.1", "5.1", 5, "standard", 100),
  "5.2": model("5.2", "5.2", 5, "standard", 110),
  "5.3": model("5.3", "5.3", 5, "standard", 120),
  "5.4": model("5.4", "5.4", 5, "standard", 135),
  "5.5": model("5.5", "5.5", 5, "standard", 150),

  "5.0-mini": model("5.0-mini", "5.0 Mini", 5, "mini", 30),
  "5.1-mini": model("5.1-mini", "5.1 Mini", 5, "mini", 35),
  "5.2-mini": model("5.2-mini", "5.2 Mini", 5, "mini", 40),
  "5.3-mini": model("5.3-mini", "5.3 Mini", 5, "mini", 45),
  "5.4-mini": model("5.4-mini", "5.4 Mini", 5, "mini", 50),
  "5.5-mini": model("5.5-mini", "5.5 Mini", 5, "mini", 55),
  "5.6-mini": model("5.6-mini", "5.6 Mini", 5, "mini", 60),

  "5.1-flash": model("5.1-flash", "5.1 Flash", 5, "flash", 25),
  "5.2-flash": model("5.2-flash", "5.2 Flash", 5, "flash", 28),
  "5.3-flash": model("5.3-flash", "5.3 Flash", 5, "flash", 32),
  "5.4-flash": model("5.4-flash", "5.4 Flash", 5, "flash", 36),
  "5.5-flash": model("5.5-flash", "5.5 Flash", 5, "flash", 40),

  "5.2-complex": model("5.2-complex", "5.2 Complex", 5, "complex", 130),
  "5.3-complex": model("5.3-complex", "5.3 Complex", 5, "complex", 145),
  "5.4-complex": model("5.4-complex", "5.4 Complex", 5, "complex", 160),
  "5.5-complex": model("5.5-complex", "5.5 Complex", 5, "complex", 175),

  "5.3-codex": model("5.3-codex", "5.3 Codex", 5, "codex", 110),
  "5.4-codex": model("5.4-codex", "5.4 Codex", 5, "codex", 125),
  "5.5-codex": model("5.5-codex", "5.5 Codex", 5, "codex", 140),
  "5.6-codex": model("5.6-codex", "5.6 Codex", 5, "codex", 155),

  "5.4-codex-pro": model(
    "5.4-codex-pro",
    "5.4 Codex Pro",
    5,
    "codex-pro",
    190
  ),

  "5.5-codex-pro": model(
    "5.5-codex-pro",
    "5.5 Codex Pro",
    5,
    "codex-pro",
    210
  ),

  "5.2-plus-lite": model(
    "5.2-plus-lite",
    "5.2 Plus Lite",
    5,
    "plus-lite",
    20
  ),

  "5.3-plus-lite": model(
    "5.3-plus-lite",
    "5.3 Plus Lite",
    5,
    "plus-lite",
    22
  ),

  "5.5-plus-lite": model(
    "5.5-plus-lite",
    "5.5 Plus Lite",
    5,
    "plus-lite",
    26
  ),

  "5.1-pro": model("5.1-pro", "5.1 Pro", 5, "pro", 150),
  "5.2-pro": model("5.2-pro", "5.2 Pro", 5, "pro", 165),
  "5.3-pro": model("5.3-pro", "5.3 Pro", 5, "pro", 180),
  "5.4-pro": model("5.4-pro", "5.4 Pro", 5, "pro", 200),
  "5.5-pro": model("5.5-pro", "5.5 Pro", 5, "pro", 225),
  "5.6-pro": model("5.6-pro", "5.6 Pro", 5, "pro", 250),

  "5.2-plus": model("5.2-plus", "5.2 Plus", 5, "plus", 140),
  "5.3-plus": model("5.3-plus", "5.3 Plus", 5, "plus", 155),
  "5.4-plus": model("5.4-plus", "5.4 Plus", 5, "plus", 175),
  "5.5-plus": model("5.5-plus", "5.5 Plus", 5, "plus", 195),

  "5.1-lite": model("5.1-lite", "5.1 Lite", 5, "lite", 15),
  "5.2-lite": model("5.2-lite", "5.2 Lite", 5, "lite", 18),
  "5.3-lite": model("5.3-lite", "5.3 Lite", 5, "lite", 20),
  "5.5-lite": model("5.5-lite", "5.5 Lite", 5, "lite", 24),

  "5.2-pro-lite": model(
    "5.2-pro-lite",
    "5.2 Pro Lite",
    5,
    "pro-lite",
    80
  ),

  "5.3-pro-lite": model(
    "5.3-pro-lite",
    "5.3 Pro Lite",
    5,
    "pro-lite",
    90
  ),

  "5.5-pro-lite": model(
    "5.5-pro-lite",
    "5.5 Pro Lite",
    5,
    "pro-lite",
    105
  ),

  "5.3-complex-pro": model(
    "5.3-complex-pro",
    "5.3 Complex Pro",
    5,
    "complex-pro",
    220
  ),

  "5.4-complex-pro": model(
    "5.4-complex-pro",
    "5.4 Complex Pro",
    5,
    "complex-pro",
    250
  ),

  "5.5-complex-pro": model(
    "5.5-complex-pro",
    "5.5 Complex Pro",
    5,
    "complex-pro",
    280
  ),

  "5.1-flash-lite": model(
    "5.1-flash-lite",
    "5.1 Flash Lite",
    5,
    "flash-lite",
    8
  ),

  "5.2-flash-lite": model(
    "5.2-flash-lite",
    "5.2 Flash Lite",
    5,
    "flash-lite",
    10
  ),

  "5.5-flash-lite": model(
    "5.5-flash-lite",
    "5.5 Flash Lite",
    5,
    "flash-lite",
    12
  ),

  "2-ultimate": {
    ...model("2-ultimate", "2 Ultimate", 2, "ultimate", 0),
    enabled: false,
    status: "DISABLED",
    ultimate: true
  },

  "3-ultimate": {
    ...model("3-ultimate", "3 Ultimate", 3, "ultimate", 0),
    enabled: false,
    status: "DISABLED",
    ultimate: true
  },

  "4-ultimate": {
    ...model("4-ultimate", "4 Ultimate", 4, "ultimate", 0),
    enabled: false,
    status: "DISABLED",
    ultimate: true
  },

  "5-ultimate": {
    ...model("5-ultimate", "5 Ultimate", 5, "ultimate", 0),
    enabled: false,
    status: "DISABLED",
    ultimate: true
  },

  "5.6-ultimate-pro": {
    ...model(
      "5.6-ultimate-pro",
      "5.6 Ultimate Pro",
      5,
      "ultimate",
      0
    ),
    enabled: false,
    status: "DISABLED",
    ultimate: true
  }
};
