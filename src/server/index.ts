import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { healthRoute } from "./routes/health";

const app = new Hono();

// Middleware
app.use("*", logger());
app.use(
  "/api/*",
  cors({
    origin: ["http://localhost:5173"], // Vite dev server
    credentials: true,
  }),
);

// Routes
app.route("/api", healthRoute);

// Global error handler
app.onError((err, c) => {
  console.error("Unhandled error:", err);
  return c.json(
    {
      error: "Internal Server Error",
      message:
        process.env.NODE_ENV === "development" ? err.message : undefined,
    },
    500,
  );
});

// 404 handler
app.notFound((c) => {
  return c.json({ error: "Not Found" }, 404);
});

const port = parseInt(process.env.PORT || "3000", 10);

console.log(`Server running on http://localhost:${port}`);
serve({ fetch: app.fetch, port });

export default app;
