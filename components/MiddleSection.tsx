import styles from "../styles/MiddleSection.module.css";
import Link from "next/link"; // Use for clickable cards

export default function MiddleSection() {
  return (
    <section className={styles.middleSection}>
      {/* Main title */}
      <h2 className={styles.mainTitle}>GET YOUR MATCHA DOSE</h2>

      {/* Cards */}
      <div className={styles.cardsContainer}>
        <Link href="/services" passHref>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Workshop</h3>
            <p className={styles.cardDescription}>Invata sa iti prepari matcha-ul corect acasa.</p>
          </div>
        </Link>

        <Link href="/shop" passHref>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>ONLINE SHOP</h3>
            <p className={styles.cardDescription}>Matcha bio? Pamatuf? Lingura de bambus? Gasesti aici de toate.</p>
          </div>
        </Link>

        <Link href="/services" passHref>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Training HORECA</h3>
            <p className={styles.cardDescription}>
              Vrei sa introduci matcha in meniul tau si nu stii cum? Hai sa organizam un training pentru staff-ul tau.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
