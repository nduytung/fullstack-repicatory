import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import MainLayout from "../layout/MainLayout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <div className="bg-gray-100 w-full">
          <Component {...pageProps} />;
        </div>
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
