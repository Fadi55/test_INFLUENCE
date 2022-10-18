const firebase = require("firebase");

//service  of List purchase
async function getAllPurchase() {
  let data;
  const purchaseReference = await firebase.database().ref("/brands/");
  await purchaseReference.on("value", function (snapshot) {
    data = snapshot.val();
  });
  return data;
}

//service  of List purchase par brands
async function getAllPurchasesPerBrands() {
  let data;
  const influencersReference = await firebase
    .database()
    .ref("/conversions/purchasesPerBrands/");

  await influencersReference.on("value", function (snapshot) {
    data = snapshot.val();
  });
  return data;
}

export { getAllPurchase, getAllPurchasesPerBrands };
