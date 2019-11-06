"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("../../config/mongoose"));
const order_model_1 = __importDefault(require("./order-model"));
exports.default = mongoose_1.default.model("Order", order_model_1.default);
