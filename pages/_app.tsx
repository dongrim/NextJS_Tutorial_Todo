import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { Header, Footer } from "../components";
import { wrapper } from '../redux/store';
// import { Provider } from 'react-redux';
// import { TodoDataStore } from '../redux/store';

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
