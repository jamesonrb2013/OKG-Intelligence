import Fastify from "fastify";

import {
  getPersonalPlan,
  getServerPlan,
  calculateEffectiveEntitlements,
  getAvailableModels
} from "@okg/config";

const app = Fastify({
  logger: true
});

app.get("/health", async () => {
  return {
    status: "ok",
    service: "okg-intelligence-api",
    version: "0.1.0"
  };
});

app.get("/v1/models", async (request, reply) => {
  const query = request.query as {
    planType?: "personal" | "server";
    planId?: string;
  };

  const planType = query.planType ?? "personal";
  const planId =
    query.planId ??
    (planType === "personal"
      ? "personal_free"
      : "server_free");

  const plan =
    planType === "personal"
      ? getPersonalPlan(planId)
      : getServerPlan(planId);

  if (!plan) {
    return reply.code(404).send({
      error: "unknown_plan",
      message: `Unknown ${planType} plan: ${planId}`
    });
  }

  const entitlements =
    calculateEffectiveEntitlements(plan);

  const models = getAvailableModels(entitlements);

  return {
    plan: {
      id: plan.planId,
      name: plan.name,
      category: plan.category
    },
    models: models.map((model) => ({
      id: model.modelId,
      name: model.name,
      displayName: model.displayName,
      generation: model.generation,
      variant: model.variant,
      tokenCost: model.tokenCost,
      dailyLimit: model.dailyLimit,
      monthlyLimit: model.monthlyLimit,
      contextLimit: Math.min(
        entitlements.contextLimit,
        model.contextLimit
      ),
      capabilities: model.capabilities,
      omniRouteModel: model.omniRouteModel
    }))
  };
});

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? "0.0.0.0";

try {
  await app.listen({
    port,
    host
  });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
