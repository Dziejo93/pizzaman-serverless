import Api from "claudia-api-builder";
import { getPizza, getPizzas, deletePizza } from "./handlers/pizzas/pizzas";
import { createOrder } from "./handlers/orders/orders";

const api = new Api();
api.get("/", () => "Welcome to Pizza API");

api.get("/pizzas", () => getPizzas());
api.get("/pizzas/{id}", (request) => {
  return getPizza(request.pathParams.id);
});
api.delete(
  "/pizzas/{id}",
  (request) => {
    return deletePizza(request.pathParams.id);
  },
  { success: 201, error: 400 }
);

api.post(
  "/orders",
  (request) => {
    return createOrder(request.body);
  },
  { success: 201, error: 400 }
);

module.exports = api;
