import '@/styles/style.css' // replaced css from the default globals
import type { AppProps } from 'next/app'


import Navigation from "@/components/fragments/navigation";
import Footer from "@/components/fragments/footer";
import Header from "@/components/fragments/header";

function App({ Component, pageProps }: AppProps) {
    return (
      <>
          <Header />
          <Navigation />
          <Component {...pageProps} />
          <Footer />
      </>
    );
}


export default App;