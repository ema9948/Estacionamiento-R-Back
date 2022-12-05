import { connect } from "mongoose";
try {
  await connect(process.env.URI);
  console.log("DB 🚀Ok.");
} catch (error) {
  console.log("BD 😢 Error." + error);
}
