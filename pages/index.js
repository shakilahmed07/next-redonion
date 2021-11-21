import Head from "next/head";
import HomePage from "../components/Home/HomePage";

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
    </div>
  );
}
