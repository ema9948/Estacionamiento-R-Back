import express from "express";
import cors from "cors";
import "dotenv/config";
import "./db/configDb.js";
import vehiclesRouter from "./Router/vehiculoRouter.js";
const app = express();

var whitelist = [process.env.FRONT, process.env.FRONT2];

app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());
app.use("/api/v1/vehiculos", vehiclesRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🚀 Server Up.."));
