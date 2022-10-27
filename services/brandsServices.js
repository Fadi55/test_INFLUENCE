const firebase = require("firebase");

//service  of List brands
async function getAllInbrands() {
  let data;
  const brandsReference = await firebase.database().ref("/brands/");
  await brandsReference.on("value", function (snapshot) {
    data =  Object.values(snapshot.val());

  });
  return data;
}

export { getAllInbrands };
