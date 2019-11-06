"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPizzas() {
    return process.env.DB_URI;
}
exports.getPizzas = getPizzas;
function getPizza(pizzaId) {
    return pizzaId;
}
exports.getPizza = getPizza;
function deletePizza(params) {
    return `${params}deletePizza`;
}
exports.deletePizza = deletePizza;
