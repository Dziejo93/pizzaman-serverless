function getPizzas() {
  return "returned all pizzas";
}
function getPizza(pizzaId: string) {
  return pizzaId;
}
function deletePizza(params: string) {
  return `${params}deletePizza`;
}

export { getPizzas, getPizza, deletePizza };
