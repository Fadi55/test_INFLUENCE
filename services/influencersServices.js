const firebase = require("firebase");
//service  of List influencers
async function getAllInfluencers() {
  let data;
  let allUfo=[]
  var lastState, lastKey;
  const influencersReference = await firebase.database().ref("/influencers/")
  .limitToFirst(31)
 
  await influencersReference.on("value", function (snapshot) {
    snapshot.forEach((snap) => {
      allUfo.push(snap.val());
      lastState = snap.val().state; // 
      lastKey = snap.key; // 
    });
   
     // data =  Object.values(snapshot.val());

  });
 
  return allUfo;

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
