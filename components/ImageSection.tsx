import Image from "next/image";
import styles from "../styles/ImageSection.module.css";

export default function ImageSection() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/images/pouring_matcha.jpg"
        alt="Matcha tea ceremony"
        layout="fill" // Fill the container dynamically
        objectFit="cover" // Ensures cropping to fit the div
        className={styles.image}
      />
    </div>
  );
}
