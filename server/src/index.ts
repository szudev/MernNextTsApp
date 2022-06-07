import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import { ConnectToMongoDB } from "./db.connection/mongoDBConnection";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(
  express.json({
    limit: "30mb",
  })
); //middleware que transforma req.body a un json
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.get("/", (_req, res) => {
  res.send("Api's root");
});
ConnectToMongoDB();
const PORT = process.env.PORT || 5000;

mongoose.connection.once("open", () => {
  console.log("[DB-CONNECTED]: Connection to DB successful.");
  app.listen(PORT, () => {
    console.log(`Connection is established and is running on port: ${PORT}`);
  });
});

export default app;
