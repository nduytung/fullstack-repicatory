import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import MainLayout from "../layout/MainLayout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
