import { Connection, createConnection } from "mongoose";

const getLengthCollections = (conn: Connection): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    conn.on("open", () => {
      const collections = conn.db.listCollections().toArray();
      collections
        .then((res) => resolve(res.length !== 0))
        .catch((err) => reject(err));
    });
  });
};

export const dbConnection = async (strConnection: string) => {
  let msg = "";
  try {
    const conn = createConnection(strConnection);
    const connectionValid = await getLengthCollections(conn);
    if (!connectionValid)
      throw new Error(
        `No existe la base de datos "${strConnection.split("/").reverse()[0]}"`
      );
    return conn;
  } catch (error) {
    if (error instanceof Error) msg = error.message;
    throw msg || "Error en la conexion a la base de datos :(";
  }
};
