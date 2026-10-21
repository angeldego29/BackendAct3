// routes/health.routes.ts
import { Router } from "express";
import { getHealth, getDatabaseHealth } from "../controllers/health.controller.js";

const healthRouter = Router();

healthRouter.get("/", getHealth);
healthRouter.get("/database", getDatabaseHealth);

export default healthRouter;
