const firebase = require("firebase");

//service  of List articles
async function getAllArticles() {
  let data;
  const articlesReference = await firebase.database().ref("/articles/");

  await articlesReference.on("value", function (snapshot) {
    data = snapshot.val();
    console.log(data);
  });
  return data;
}

export { getAllArticles };
