import { config } from "../../../config";
import { dbConnection } from "../../../database";
import createUserModel from "../models/user.model";

export const ModelsApiUsers = async () => {
  const connUsers = await dbConnection(config.dbConnUsers);
  const UserModel = createUserModel(connUsers);
  return {
    UserModel,
  };
};
