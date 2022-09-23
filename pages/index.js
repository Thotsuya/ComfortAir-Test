import Head from "next/head";
import Image from "next/image";
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Divider from "../components/Divider";
import Perks from "../components/Perks";
import CommercialServices from "../components/CommercialServices";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Topbar />
        <Hero />
        <Services />
        <Divider />
        <Perks />
        <CommercialServices />
        <Products />
      </main>
    </div>
  );
}
