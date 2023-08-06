import Order from "@/Models/Order";

export const getOrders = async () => {
    const orders = await Order.findAll();
    const ordersString = JSON.stringify(orders);
    const ordersObject = JSON.parse(ordersString);
    return ordersObject;
};