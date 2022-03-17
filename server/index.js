const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRouter = require("./routes/UserRouter");
const tokenRouter = require("./routes/TokenRouter");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(request, response, next) {
  response.append('Access-Control-Allow-Origin', ['*']);
  response.append('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
  response.append('Access-Control-Allow-Headers', 'Content-Type, Context-Type, X-Requested-With, Authorization');
  next();
});

app.use("/user", userRouter);
app.use("/token", tokenRouter);

app.use(function(request, response) {
  response.status(404).send("Not Found");
});

app.listen(8000);
