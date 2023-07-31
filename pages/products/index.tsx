import { getProducts } from "@/ApiStuff/ProductModelApi";
import Product from "@/Models/ProductModel";
import Link from "next/link";
import ProductListTable from "@/components/Products/ProductListTable";
import { withIronSessionSsr } from 'iron-session/next';



type Props =  {
    products: Product[]
}

/*
export async function getServerSideProps(): Promise<{ props: { products: ProductModel[] } }> {
    const data = await getProducts();


    return {
        props: {
            products: data
        }
    }
}

*/

export const getServerSideProps = withIronSessionSsr(async ({ req, res }) => {
    // Check if the user is authenticated
    const user = req.session.user;
    if (!user) {
        // If the user is not authenticated, redirect to the login page
        res.writeHead(302, { Location: '/login' });
        res.end();
        return { props: {} };
    }

    // If the user is authenticated, fetch the products
    const data = await getProducts();

    return {
        props: {
            products: data
        }
    }
},
    { // these options can be moved to a different file in the future
        password: "extremely_secret_password_must_be_at_least_32_characters_long_apparently" as string,
        cookieName: "iron-session/examples/next.js",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    });

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

