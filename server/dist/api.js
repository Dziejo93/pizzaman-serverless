'use strict';
const Api = require('claudia-api-builder');
const api = new Api();
api.get('/pizzas', () => {
  return ['Capricciosa', 'Quattro Formaggi', 'Napoletana', 'Margherita'];
});
module.exports = api;
