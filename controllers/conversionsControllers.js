import { conversionsServices } from "../services";
const firebase = require('firebase');
/**
 * End-point to register a articles
 *
 * @param {Request} request http request for articles registration
 * @param {Response} response http response
 * @returns {Promise<Response>} returns
 * 200 { token, refreshToken } as Data if articles was registered successfully
 * 422 { message } if articles already exists
 * 500 { message }
 *
 */

// list of all Purchase
async function getAllPurchase(request, response) {
  try {
    const purchase = await conversionsServices.getAllPurchase();
    return response.status(200).json({
      purchase 
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return response.status(500).json({
      error: "Internal error retrieving purchase!",
    });
  }
}
// list of all Purchase par Brands
async function getAllPurchasesPerBrands(request, response) {
  try {
    const purchaseB = await conversionsServices.getAllPurchase();
    return response.status(200).json({
     purchaseB  
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return response.status(500).json({
      error: "Internal error retrieving purchase!",
    });
  }
}
// list of all Purchase par brands with detais
async function getAllPurchasesPerBrandsDetails(request, response) {
  try {
    const {
      params: { offerId },
    } = request;

    await firebase
      .database()
      .ref(`/conversions/purchasesPerBrands/${offerId}`)
      .once("value")
      .then((snapshot) => {
        if (!snapshot) {
          return response.status(404).json({
            error: "no offredata found",
          });
        }
        return response.status(200).json(snapshot.val());
      });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return response.status(500).json({
      error: "Internal error retrieving purchase!",
    });
  }
}
// list of all SAles numbers
async function CountAllSalesNumbers(request, response) {
  try {
    await firebase
      .database()
      .ref(`/conversions/purchasesPerBrands/`)
      .once("value")
      .then((snapshot) => {
        if (!snapshot) {
          return response.status(404).json({
            error: "no offredata found",
          });
        }

        var count = snapshot.numChildren();
        return response.status(200).json({ data: count });
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
// Statistic of puchase par brand (sum os amount and commission and  commissionAffiliate and all salles)
async function getAllPurchasesPerBrandsStat(request, response) {
  try {
    let commission = 0;
    let amount = 0;
    let amountCure;
    let commissionAffiliate = 0;
    let sizeSales;
    let brandName;
   let  OffreArray=[]
    // console.log("getAllInfluencers")
    const {
      params: { offerId },
    } = request;
    await firebase
      .database()
      .ref(`/conversions/purchasesPerBrands/${offerId}`)
      .once("value")
      .then((snapshot) => {
   
        if (!snapshot) {
          return response.status(404).json({
            error: "no offredata found",
          });
        }
        sizeSales = Object.keys(snapshot.val()).length;
        snapshot.forEach(function (child) {
      
          if (child.val()) {
            OffreArray.push(child.val()?.offerId)
           
            brandName = child.val()?.brandName;
          
            amount += child.val()?.amount;
            amountCure =
              Math.round(amount * 100) / 100  ;
            commission += parseInt(child.val()?.commission);
            commissionAffiliate += parseInt(child.val()?.commissionAffiliate);
          }
        });
 
       let  obj={ brandName:brandName,
          sizeSales: sizeSales,
          _id:OffreArray[0],
          Amounts: amountCure,
          Commissions: commission,
          CommissionAffiliates: commissionAffiliate,}
          response.status(200).send({
            status: 200,
            response: obj,
          });
      });
  } catch (error) {
    response.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
}

export {
  getAllPurchase,
  getAllPurchasesPerBrands,
  getAllPurchasesPerBrandsDetails,
  CountAllSalesNumbers,
  getAllPurchasesPerBrandsStat,
};
