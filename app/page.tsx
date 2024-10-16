import Head from "next/head";
import styles from "../styles/Home.module.css";
import ImageSection from "@/components/ImageSection";
import MiddleSection from "@/components/MiddleSection";
import BottomSection from "@/components/BottomSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matcha Shop</title>
        <meta name="description" content="Welcome to the finest Matcha Shop!" />
      </Head>
      <main className={styles.main}>
        <ImageSection />
        <MiddleSection />
        <BottomSection
          image="presentation_person.jpg"
          title="IT ALL STARTS WITH A GOOD SIP OF MATCHA"
          descriptions={["DEAR MATCHA LOVER,", "I created Flor de Matcha"]}
        />
      </main>
    </div>
  );
}
