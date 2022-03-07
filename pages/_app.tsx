// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { Header } from "../components";
import GlobalStyle from "../styles/GlobalStyle";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
