import { Provider } from "next-auth/client";
import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider as ReduxProvider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      {/* NextAuthProvider */}
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ReduxProvider>
  );
}

export default MyApp;
