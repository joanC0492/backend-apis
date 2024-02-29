import "dotenv/config";

// Configuracion base para las variables de entorno
export const config = {
  port: parseInt(process.env.PORT!) || 4004,
  dbConn: process.env.DB_CNN!,
  dbConnUsers: process.env.DB_CNN_USERS!,
  dbConnStudyCards: process.env.DB_CNN_STUDY_CARDS!,
  secretJwtSeed: process.env.SECRET_JWT_SEED!,
};
