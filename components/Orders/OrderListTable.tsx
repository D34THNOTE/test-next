import React from "react";
import OrderListTableRow from "@/components/Orders/OrderListTableRow";
import Order from "@/Models/Order";


export default function OrderListTable({listOfOrders}: { listOfOrders: Order[] }) {
    const orders = listOfOrders;

    console.log("OrderListTable console log");


    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>IDorder</th>
                <th>Date of placing order</th>
                <th>Contact info</th>
                <th>Shipping company</th>
                <th>Premium delivery</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            {orders.map(order =>
                <OrderListTableRow orderData={order} key={order.IDorder} />
            )}
            </tbody>
        </table>
)
}