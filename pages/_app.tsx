// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { Header, Footer } from "../components";
import GlobalStyle from "../styles/GlobalStyle";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
