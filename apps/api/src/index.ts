import Fastify from "fastify";

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