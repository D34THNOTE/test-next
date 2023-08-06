import Link from "next/link";
import {formatDate} from "@/helpers/formatDate";


export default function OrderListTableRow( {orderData}: any ) {
    const order = orderData;

    console.log("OrderListTableRow console log");

    return (
        <tr key={order.IDorder}>
            <td data-label="IDorder">{order.IDorder}</td>
            <td data-label="Date of placing order">{order.datePlaced ? formatDate(order.datePlaced) : ""}</td>
            <td data-label="Contact info">{order.clientContactInfo}</td>
            <td data-label="Shipping company">{order.shippingCompany}</td>
            <td data-label="Premium delivery">{order.premiumDelivery ? "Yes" : "No"}</td>
            <td>
                <ul className="list-actions">
                    <li>
                        <Link href={`/Order/details/${order.IDorder}`} className="list-actions-button-details">Details</Link>
                    </li>
                    <li>
                        <Link href={`/Order/edit/${order.IDorder}`} className="list-actions-button-edit">Edit</Link>
                    </li>
                    <li>
                        <Link href={`/Order`} className="list-actions-button-delete" >Delete</Link>
                    </li>
                </ul>
            </td>
        </tr>
    )
}