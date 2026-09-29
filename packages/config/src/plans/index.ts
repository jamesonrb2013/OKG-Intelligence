import type { PlanConfig } from "../types/Plan.js";

import { PERSONAL_PLANS } from "./personal.js";
import { SERVER_PLANS } from "./server.js";

export {
  PERSONAL_PLANS,
  SERVER_PLANS
};

export function getPersonalPlan(
  planId: string
): PlanConfig | undefined {
  return PERSONAL_PLANS[planId];
}

export function getServerPlan(
  planId: string
): PlanConfig | undefined {
  return SERVER_PLANS[planId];
}
