import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CHeckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";

const server = new Server();
const middleware = new CHeckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
server.setMiddleware(middleware);
server.logIn("", "");
