import { getProducts } from "@/ApiStuff/ProductModelApi";
import Product from "@/Models/ProductModel";
import Link from "next/link";
import ProductListTable from "@/components/Products/ProductListTable";
import ProductModel from "@/Models/ProductModel";

type Props =  {
    products: Product[]
}

export async function getServerSideProps(): Promise<{ props: { products: ProductModel[] } }> {
    const data = await getProducts();


    return {
        props: {
            products: data
        }
    }
}

export default function ProductList( {products}: Props ) {

    return (
        <main>
            <h2>Products</h2>
            <ProductListTable listOfProducts={products} />
            <div>
                <p><Link href="/products/add" className="button-add">Add a new product</Link></p>
                <p className="delete-message"></p>
            </div>
        </main>
    )
}

