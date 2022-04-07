import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { Header, Footer } from "../components";
// import { Provider } from 'react-redux';
// import { wrapper } from '../redux/store/index-redux';
import { wrapper } from '../redux/store/index-toolkit';

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

export default wrapper.withRedux(App);
