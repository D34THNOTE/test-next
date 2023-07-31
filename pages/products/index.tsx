import { getProducts } from "@/ApiStuff/ProductModelApi";
import Product from "@/Models/ProductModel";
import Link from "next/link";
import ProductListTable from "@/components/Products/ProductListTable";
import { withIronSessionSsr } from 'iron-session/next';
import {InferGetServerSidePropsType} from "next";



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


/*
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
*/



export default function ProductList( { user, products }: InferGetServerSidePropsType<typeof getServerSideProps> ) {

    console.log(products);
    console.log("User: " + user);

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


// Code from:
// https://github.com/vvo/iron-session/blob/main/examples/next.js-typescript/pages/profile-ssr.tsx
export const getServerSideProps = withIronSessionSsr(async function ({
                                                                         req,
                                                                         res,
                                                                     }) {
        const user = req.session.user;

        if (user === undefined) {
            res.setHeader("location", "/login");
            res.statusCode = 302;
            res.end();
            return {
                props: {
                    user: { isLoggedIn: false, login: "", avatarUrl: "" }, //TODO this is a placeholder, idk what to do with this
                },
            };
        }

        const data = await getProducts();

        return {
            props: {
                user: req.session.user,
                products: data
            },
        };
    },
    { // these options can be moved to a different file in the future
        password: "extremely_secret_password_must_be_at_least_32_characters_long_apparently" as string,
        cookieName: "iron-session/examples/next.js",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    });