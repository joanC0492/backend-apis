import { Connection, Schema } from "mongoose";
import { IUserSchema } from "../domain/user.interface";

const UserSchema = new Schema<IUserSchema>(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "El correo es obligatorio"],
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
    },
  },
  {
    // add "createdAt" "updatedAt"
    timestamps: true,
    // Delete "__v" in the document
    versionKey: false,
  }
);

export default (connection: Connection) =>
  connection.model("users", UserSchema);