import { Router } from "express";
import { articlesControllers } from "../controllers";

const articlesRouter = new Router();

articlesRouter.get("/getAllArticles", articlesControllers.getAllArticles);
 

export default articlesRouter;
 