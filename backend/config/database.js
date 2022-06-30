const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.mongoUrl)
    .then((data) => {

      console.log(`MongoDB connnected with server: ${data.connection.host}`);
    });
  // catch is not rewquired as it is handled in server.js file
  // .catch((err) => {
  //   console.log(err);
  // })
}

module.exports = connectDatabase;