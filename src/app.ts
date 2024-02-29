import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { config } from "./config";
import { routerApiUsers } from "./api/api-users";
import { routerApiStudyCards } from "./api/api-study-cards";

export class Server {
  private app: Application;
  private readonly PORT = config.port;

  constructor() {
    // express
    this.app = express();
    // middleware
    this.middlewares();
    // routes
    this.routes();
  }

  private middlewares(): void {
    // Da información detallada sobre cada solicitud http
    this.app.use(morgan("dev"));
    // whitelist permite que tu server responda a solicitudes solo desde orígenes específicos que has autorizado
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // Ahora podemos acceder a la carpeta "public"
    this.app.use(express.static(path.join(__dirname, "../public")));
  }

  private routes(): void {
    routerApiUsers(this.app);
    routerApiStudyCards(this.app);
  }

  public listen(): void {
    this.app.listen(this.PORT, () =>
      console.log(`Escuchando el puerto: ${this.PORT}`)
    );
  }
}
