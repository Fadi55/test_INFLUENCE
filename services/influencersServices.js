const firebase = require("firebase");
//service  of List influencers
async function getAllInfluencers() {
  let data;
  const influencersReference = await firebase.database().ref("/influencers/");
  await influencersReference.on("value", function (snapshot) {
    data = snapshot.val();
  });
  return data;
}

//service  of count ALl influencers
async function CountAllInfluencers(request, response, next) {
  let count;
  await firebase
    .database()
    .ref(`/influencers/`)
    .once("value")
    .then((snapshot) => {
      if (!snapshot) {
        return response.status(404).json({
          error: "no offredata found",
        });
      }
      count = snapshot.numChildren();
    });
  return count;
}

// eslint-disable-next-line import/prefer-default-export
export { getAllInfluencers, CountAllInfluencers };
