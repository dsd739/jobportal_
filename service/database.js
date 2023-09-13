const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dsdangi739:ujGegkoD8c47A2hj@cluster0.3nybgza.mongodb.net/practice?retryWrites=true&w=majority"
);

const con = mongoose.connection;

con.on("connected", () => {
  console.log("database connected");
});

con.on("disconnected", () => {
  console.log("database disconnected");
});

con.on("error", () => {
  console.log("ERROR: database connection error");
});

module.exports = con;
