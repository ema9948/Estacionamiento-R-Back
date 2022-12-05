import { Schema, model } from "mongoose";

const vehiculoSchema = new Schema({
  nombre: {
    type: String,
  },
  patente: {
    type: String,
  },
  tipo: {
    type: String,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  ingreso: {
    type: Date,
  },
  egreso: {
    type: Date,
  },
});

export const vehiculo = model("vehiculo", vehiculoSchema);
