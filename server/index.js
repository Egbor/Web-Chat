const express = require("express");
const app = express();

const userRouter = require("./routes/UserRouter");
const tokenRouter = require("./routes/TokenRouter");

app.use(express.json());
app.use(express.urlencoded());

app.use("/user", userRouter);
app.use("/token", tokenRouter);

app.use(function(request, response) {
  response.status(404).send("Not Found");
});

app.listen(8000);
