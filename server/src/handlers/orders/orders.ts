import Order, { OrderInterface } from "../../models/orders";

async function createOrder(order: OrderInterface) {
  const { pizza, address, orderStatus } = order;
  if (!pizza || !address || !orderStatus)
    throw new Error(
      "To order pizza please provide pizza type and address where pizza should be delivered"
    );
  try {
    const order = new Order({ pizza, address, orderStatus });

    await order.save();

    return order;
  } catch (error) {
    throw new Error(error);
  }
}
function deleteOrder(params: string) {
  return `${params}deleteOrder`;
}

export { createOrder, deleteOrder };
