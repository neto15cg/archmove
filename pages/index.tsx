import type { NextPage } from "next";
import Head from "next/head";
import HomeContainer from "../containers/Home/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Archmove</title>
        <meta name="description" content="Design for arch move" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer />
    </div>
  );
};

export default Home;
