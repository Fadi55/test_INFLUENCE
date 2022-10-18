import { Router } from "express";
import { brandsControllers } from "../controllers";

const brandsRouter = new Router();

brandsRouter.get("/getAllInbrands", brandsControllers.getAllInbrands);
 

export default brandsRouter;
 