import { connect } from "mongoose";
try {
  await connect(process.env.URI);
  console.log("DB ðOk.");
} catch (error) {
  console.log("BD ð¢ Error." + error);
}
