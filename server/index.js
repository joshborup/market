require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const adminProductRoutes = require("./routers/adminProductRoutes/adminProducts");
// const customerProductRoutes = require("./routers/customerProductRoutes/customerProductController");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const store = new MongoStore({
  url: CONNECTION_STRING,
  secret: SESSION_SECRET
});
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 60
    }
  })
);

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("connected to DB");
  });

app.use("/admin_products", adminProductRoutes);
// app.use("/customer__products", customerProductRoutes);

const PORT = SERVER_PORT || 4000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
