import { vehiculo } from "../model/vehiculo.js";
import moment from "moment";

export const getVehiculos = async (req, res) => {
  try {
    const allVehicles = await vehiculo.find({});
    return res.status(200).json(allVehicles);
  } catch (error) {
    res.sendStatus(500);
  }
};

export const addVehiculos = async (req, res) => {
  const { nombre, patente, tipo } = req.body;
  const date = moment().format();
  try {
    const newVehicle = new vehiculo({ nombre, patente, tipo, ingreso: date });
    await newVehicle.save();
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const patchVehiculos = async (req, res) => {
  const { id } = req.params;
  const { nombre, patente, tipo } = req.body;
  try {
    if (nombre || patente || tipo) {
      const exitVehicle = await vehiculo.findByIdAndUpdate(id, {
        nombre,
        patente,
        tipo,
      });
      return res.sendStatus(200);
    } else {
      const exitVehicle = await vehiculo.findByIdAndUpdate(id, {
        egreso: moment().format(),
        estado: false,
      });
      return res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const deleteVehiculos = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteVehicle = await vehiculo.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};
