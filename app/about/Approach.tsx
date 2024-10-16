import styles from "../about/Approach.module.css";
import Image from "next/image";
export default function Approach() {
  return (
    <section className={styles.approach}>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/matcha_vocabulary.png"}
          alt="Matcha Vocabulary"
          height={300}
          width={300}
          layout="responsive"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.paragraph}>
        <h2>My Approach</h2>
        <p className={styles.description}>
          Matcha a devenit un trend extrem de popular dar originea si modul corect de preparare din spatele acestei
          super bauturi sunt inca necunoscute. Flor de matcha e o poveste care incepe in Japonia si se termina in
          bucataria ta. Proprietatile unui matcha de calitate sunt nepretuite dar trebuie intelese.
        </p>
        <Image
          src={"/images/matcha_proven_benefits.png"}
          alt="Matcha Vocabulary"
          height={100}
          width={100}
          layout="responsive"
          className={styles.secondImage}
        />
      </div>
    </section>
  );
}
