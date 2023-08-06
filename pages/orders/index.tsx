import Link from "next/link";
import Order from "@/Models/Order";
import React from "react";
import {getOrders} from "@/ApiStuff/OrderApi";
import OrderListTable from "@/components/Orders/OrderListTable";


export default function OrderList( { orders } ): React.ReactElement {

    console.log("OrderList print")

    return (
        <main>
            <h2>Orders</h2>
            <OrderListTable listOfOrders={orders} />
            <div>
                <p><Link href="/orders/add" className="button-add">Add a new order</Link></p>
                <p className="delete-message"></p>
            </div>
        </main>
    )
}


export async function getServerSideProps(): Promise<{ props: { orders: Order[] } }> {
    const data: Order[] = await getOrders();

    console.log("Order getServerSideProps");

    return {
        props: {
            orders: data
        }
    }
}