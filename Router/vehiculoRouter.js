import { Router } from "express";
import {
  addVehiculos,
  deleteVehiculos,
  getVehiculos,
  patchVehiculos,
} from "../controller/vehiculosControllers.js";
const vehiclesRouter = Router();

vehiclesRouter.get("/allVehiculos", getVehiculos);
vehiclesRouter.post("/addVehiculos", addVehiculos);
vehiclesRouter.patch("/patchVehiculos/:id", patchVehiculos);
vehiclesRouter.delete("/deleteVehiculos/:id", deleteVehiculos);

export default vehiclesRouter;
