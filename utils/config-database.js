const firebase = require("firebase");
const config = require("../config");

const initializeDatabase = async () => {
  try {
    firebase.initializeApp(config.firebaseConfig);

    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return error;
  }
};

export default initializeDatabase;
