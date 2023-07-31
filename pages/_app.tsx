import '@/styles/style.css' // replaced css from the default globals
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { verify } from 'jsonwebtoken';
import AppImport from 'next/app';
import cookie from 'cookie';


import Navigation from "@/components/fragments/navigation";
import Footer from "@/components/fragments/footer";
import Header from "@/components/fragments/header";

function App({ Component, pageProps }: AppProps) {

    /*
    const [user, setUser] = useState<string | null>(null); // Typescript thing, used to be:
    // const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // check if user is authenticated on client-side
        const cookies = cookie.parse(document.cookie);
        if (cookies.auth) {
            setUser(cookies.auth);
        } else if (router.pathname === '/products') {
            router.push('/login');
        }
    }, [router]);
*/

    return (
      <>
          <Header />
          <Navigation />
          <Component {...pageProps} />
          <Footer />
      </>
    );
}
 /*
App.getInitialProps = async (appContext) => {
    // check if user has a valid JWT token server-side
    const appProps = await AppImport.getInitialProps(appContext);
    const req = appContext.ctx.req;
    if (req) {
        const cookies = cookie.parse(req.headers.cookie || '');
        if (cookies.auth) {
            try {
                verify(cookies.auth, process.env.JWT_SECRET);
                // JWT is valid
            } catch (err) {
                if(appContext.ctx.pathname === "/products") {
                    appContext.ctx.res.writeHead(302, { Location: "/login" });
                    appContext.ctx.res.end();
                }
            }
        } else if(appContext.ctx.pathname === "/products") {
            appContext.ctx.res.writeHead(302, { Location: "/login" });
            appContext.ctx.res.end();
        }
    }

    return { ...appProps };
};

  */

export default App;