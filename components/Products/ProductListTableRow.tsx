import Link from "next/link";
import {formatDate} from "@/helpers/formatDate";


export default function ProductListTableRow( { productData }: any ) {
    const product = productData;

    console.log("ListTableRow console log");

    return (
        <tr key={product.IDproduct}>
            <td data-label="IDproduct">{product.IDproduct}</td>
            <td data-label="Name">{product.name}</td>
            <td data-label="Price">{product.price}</td>
            <td data-label="Production date">{formatDate(product.productionDate)}</td>
            <td data-label="End distribution date">{formatDate(product.endDistributionDate)}</td>
            <td>
                <ul className="list-actions">
                    <li>
                        <Link href={`/ProductModel/details/${product.IDproduct}`} className="list-actions-button-details">Details</Link>
                    </li>
                    <li>
                        <Link href={`/ProductModel/edit/${product.IDproduct}`} className="list-actions-button-edit">Edit</Link>
                    </li>
                    <li>
                        <Link href={`/ProductModel`} className="list-actions-button-delete" >Delete</Link>
                    </li>
                </ul>
            </td>
        </tr>
    )
}