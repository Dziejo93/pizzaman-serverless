"use strict";

import Api from "claudia-api-builder";
const api = new Api();

api.get("/pizzas", () => {
  return ["Capricciosa", "Quattro Formaggi", "Napoletana", "Margherita"];
});

module.exports = api;
