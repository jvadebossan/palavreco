import { GlobalStyle } from "@/components/globalStyle";
import Head from "next/head";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <GlobalStyle/>
            <Component {...pageProps} />
        </Layout>
        
    )
}

export default MyApp