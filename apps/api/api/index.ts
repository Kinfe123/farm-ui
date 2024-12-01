import { Hono } from "hono";
import { handle } from "hono/vercel";
import components from "../constants/components.json";
export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/ui");
app.get("/", (c) => {
  return c.json({ status: "farming" });
});
app.get("/components", (c) => {
  return c.json(components);
});

export default handle(app);
