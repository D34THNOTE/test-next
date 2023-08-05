import '@/styles/style.css' // replaced css from the default globals
import type { AppProps } from 'next/app'


import Navigation from "@/components/fragments/navigation";
import Footer from "@/components/fragments/footer";
import Header from "@/components/fragments/header";
import {AuthProvider} from "@/Auth/authStuff";

function App({ Component, pageProps }: AppProps) {
    return (
      <>
          <AuthProvider>
              <Header />
              <Navigation />
              <Component {...pageProps} />
              <Footer />
          </AuthProvider>
      </>
    );
}


export default App;