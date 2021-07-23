import Head from "next/head";
import Image from "next/image";
import Navbar from "../components /Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EduYouMatch</title>
        <meta name="description" content="Next Education Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
