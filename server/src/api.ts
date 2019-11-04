import Api from "claudia-api-builder";
import routes from "./routes/routes";

const api = new Api();

api.get("/", () => "Welcome to Pizza API");

api.get("/pizzas/{id}", (request) => {
  return routes(request.pathParameters.id);
});

module.exports = api;
