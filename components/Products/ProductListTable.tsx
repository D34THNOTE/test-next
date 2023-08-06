import ProductListTableRow from "@/components/Products/ProductListTableRow";
import ProductModel from "@/Models/ProductModel";

export default function ProductListTable({listOfProducts}: { listOfProducts: ProductModel[] } ) {

    const productList = listOfProducts;

    //TODO ERROR HANDLING IF LIST CAME EMPTY
    console.log("ProductListTable console log");

    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>ID:</th>
                <th>Name:</th>
                <th>Price:</th>
                <th>Production Date:</th>
                <th>End of its distribution:</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            {productList.map(product =>
                <ProductListTableRow productData={product} key={product.IDproduct} />
            )}
            </tbody>
        </table>
    )
}
