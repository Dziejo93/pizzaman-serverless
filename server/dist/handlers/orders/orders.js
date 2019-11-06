"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = __importDefault(require("../../models/orders"));
function createOrder(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const { pizza, address, orderStatus } = order;
        if (!pizza || !address || !orderStatus)
            throw new Error("To order pizza please provide pizza type and address where pizza should be delivered");
        try {
            const order = new orders_1.default({ pizza, address, orderStatus });
            yield order.save();
            return order;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.createOrder = createOrder;
function deleteOrder(params) {
    return `${params}deleteOrder`;
}
exports.deleteOrder = deleteOrder;
