import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import GlobalStyle from "../styles/GlobalStyle";
import { Header, Footer } from "../components";
import { TodoDataStore } from '../redux/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={TodoDataStore}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default App;
