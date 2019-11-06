function getPizzas() {
  return process.env.DB_URI;
}
function getPizza(pizzaId: string) {
  return pizzaId;
}
function deletePizza(params: string) {
  return `${params}deletePizza`;
}

export { getPizzas, getPizza, deletePizza };
