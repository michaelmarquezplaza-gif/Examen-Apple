import { Router } from "express";
import appleRoutes from "./apple.routes.js";

const indexRoutes = Router();

indexRoutes.use("/apple", appleRoutes);

export default indexRoutes;



