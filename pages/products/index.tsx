import { getProducts } from "@/ApiStuff/ProductModelApi";
import Link from "next/link";
import ProductListTable from "@/components/Products/ProductListTable";
import {InferGetServerSidePropsType} from "next";
import {withSessionSsr} from "@/config/withSession";


export default function ProductList( { user, products }: InferGetServerSidePropsType<typeof getServerSideProps> ) {

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


//TODO I am really not sure if this is getting rendered server-side based on console.log outputs
// when I go to the Products page only the console.log in getServerSideProps triggers,
// BUT on subsequent refreshes it prints everything server-side and everything(except for the server-side method) client-side
export const getServerSideProps = withSessionSsr(async function ({ req, res, }) {
    const user = req.session.user;

    console.log("User(in getServerSideProps): " + user);

    if (user === undefined) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
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
});