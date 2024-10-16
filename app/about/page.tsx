import Head from "next/head";
import styles from "../../styles/Home.module.css";
import BottomSection from "@/components/BottomSection";
import Approach from "./Approach";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Matcha Shop</title>
        <meta name="description" content="Learn more about the Matcha Shop" />
      </Head>
      <main className={styles.main}>
        <BottomSection
          image="giving_bowl.jpg"
          title="HI, I'M FLORENTINA, YOUR MATCHA GUIDE."
          descriptions={[
            "In 2016 m-am mutat in Japonia. Stiam foarte putin despre ceea ce reprezinta matcha atunci. Primul wow a fost cand am cunoscut bunicul de aproape 100 de ani al prieteni mele Fumika. In fiecare dimineata se trezea la 4, se ruga, isi facea un shio de matcha si incepea munca in gradina. Inca face asta.",
            "Intorcandu-ma in Europa, matcha a devenit pentru mine conexiunea cu Japonia. O cautam sau ma gasea peste tot. Asa cum m-a gasit si matcha-ul pe care il folosesc in workshop-urile mele.",
            "Va invit sa facem impreuna cel mai bun matcha.",
          ]}
          imageWidth="100%"
        />
        <Approach />
      </main>
    </div>
  );
}
