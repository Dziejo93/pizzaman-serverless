"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const claudia_api_builder_1 = __importDefault(require("claudia-api-builder"));
const pizzas_1 = require("./handlers/pizzas/pizzas");
const orders_1 = require("./handlers/orders/orders");
const api = new claudia_api_builder_1.default();
api.get("/", () => "Welcome to Pizza API");
api.get("/pizzas", () => pizzas_1.getPizzas());
api.get("/pizzas/{id}", (request) => {
    return pizzas_1.getPizza(request.pathParams.id);
});
api.delete("/pizzas/{id}", (request) => {
    return pizzas_1.deletePizza(request.pathParams.id);
}, { success: 201, error: 400 });
api.post("/orders", (request) => {
    return orders_1.createOrder(request.body);
}, { success: 201, error: 400 });
module.exports = api;
