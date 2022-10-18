import { Router } from "express";
import { InfluencersControllers } from "../controllers";

const influencersRouter = new Router();

influencersRouter.get("/getAllInfluencers", InfluencersControllers.getAllInfluencers);
 
influencersRouter.get("/CountAllInfluencers", InfluencersControllers.CountAllInfluencers);



export default influencersRouter;
