import { config } from "../../../config";
import { dbConnection } from "../../../database";
import createUserModel from "../models/user.model";

export const ModelsApiStudyCards = async () => {
  const connUsers = await dbConnection(config.dbConnStudyCards);
  const UserModel = createUserModel(connUsers);
  return {
    UserModel,
  };
};
