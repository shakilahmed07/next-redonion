import axios from "axios";
import Head from "next/head";
import HomePage from "../components/HomePage";

export default function Home({ menuItems }) {
  return (
    <div>
      <Head>
        <title>Red Onion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage menuItems={menuItems} />
    </div>
  );
}

// This gets all called on every request
export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await axios.get(`/api/products`);

  // Pass data to the page via props
  return {
    props: {
      menuItems: res.data,
    },
  };
};
