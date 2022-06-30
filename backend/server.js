const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling unCaught Exception

process.on("uncaughtException", err => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting Down the Server due to unCaught Exception");
  process.exit(1);
});


// config
dotenv.config({ path: "backend/config/config.env" });

// COnnecting to Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {

  console.log(`Server is working on http://localhost:${process.env.PORT}`);

})


// Unhandled Promise Rejection
process.on("unhandledRejection", err => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting Down the Server due to  unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });

})