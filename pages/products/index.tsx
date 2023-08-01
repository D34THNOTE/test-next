import { getProducts } from "@/ApiStuff/ProductModelApi";
import Product from "@/Models/ProductModel";
import Link from "next/link";
import ProductListTable from "@/components/Products/ProductListTable";
import { withIronSessionSsr } from 'iron-session/next';
import {InferGetServerSidePropsType} from "next";
import {withSessionSsr} from "@/config/withSession";



type Props =  {
    products: Product[]
}





export default function ProductList( { user, products }: InferGetServerSidePropsType<typeof getServerSideProps> ) {

    console.log(products);
    console.log("User(in ProductList): " + user);

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
//TODO change const to function???
export const getServerSideProps = withSessionSsr(async function ({ req, res, }) {
        const user = req.session.user;

        console.log("User(in getServerSideProps): " + user);

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
    }
    );