import chalk from "chalk";
import Middleware from "../middlewares/Middleware";

export default class Server {
  private middleware: Middleware;

  public setMiddleware(midleware: Middleware): void {
    this.middleware = midleware;
  }

  logIn(email: string, password): boolean {
    if (this.middleware.check(email, password)) {
      console.log(chalk.green("Usuário autorizado com sucesso!"));
      return true;
    }
    return false;
  }
}
