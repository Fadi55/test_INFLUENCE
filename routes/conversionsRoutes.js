import { Router } from "express";
import { conversionsControllers } from "../controllers";

const conversionsRouter = new Router();

conversionsRouter.get("/getAllPurchase", conversionsControllers.getAllPurchase);
conversionsRouter.get("/purchasesPerBrands", conversionsControllers.getAllPurchasesPerBrands);
conversionsRouter.get("/domain/brand/details/:offerId", conversionsControllers.getAllPurchasesPerBrandsDetails);
conversionsRouter.get("/CountAllSales", conversionsControllers.CountAllSalesNumbers);
conversionsRouter.get("/domain/brand/:offerId", conversionsControllers.getAllPurchasesPerBrandsStat);
 


export default conversionsRouter;
