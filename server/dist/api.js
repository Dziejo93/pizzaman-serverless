"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const claudia_api_builder_1 = __importDefault(require("claudia-api-builder"));
const routes_1 = __importDefault(require("./routes/routes"));
const api = new claudia_api_builder_1.default();
api.get("/", () => "Welcome to Pizza API");
api.get("/pizzas/{id}", (request) => {
    return routes_1.default(request);
});
module.exports = api;
