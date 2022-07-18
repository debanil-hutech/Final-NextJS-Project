import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/bootstrapcustom.css";
import Head from 'next/head';
import App from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-themes@^1.0.2/dist/cable/index.min.css" />
</Head>
  <Component {...pageProps} />
  </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp
