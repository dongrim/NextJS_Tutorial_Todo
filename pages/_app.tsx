import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { Header, Footer } from "../components";
import { wrapper } from '../redux/store';
// import { Provider } from 'react-redux';

// function App({ Component, pageProps }: AppProps) {
function App(props) {
  const { Component, pageProps } = props;
  console.log(props);
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
