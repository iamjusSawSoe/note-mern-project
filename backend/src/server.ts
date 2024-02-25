import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose connected successfully");
    app.listen(port!, () => {
      console.log(`starting the server at ` + port);
    });
  })
  .catch(console.error);
