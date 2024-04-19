import type { AppProps } from 'next/app'
import Head from 'next/head';
import '../app/layout'
export default function App({ Component, pageProps }: AppProps) {
  const pageTitle = "Simple AI";
  return (
    <>
    <Head>
      <title>
        {pageTitle}
      </title>  
    </Head>
    <Component {...pageProps} />
    </>
  );
  
  
 
}