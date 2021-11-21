import Head from "next/head";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Red Onion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home Page */}
      <HomePage />
      {/* Footer */}
      <Footer />
    </div>
  );
}
