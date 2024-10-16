import Image from "next/image";
import styles from "../styles/BottomSection.module.css";
import classNames from "classnames";

interface BottomSectionProps {
  image: string;
  title: string;
  descriptions: string[];
  imageWidth?: "30%" | "100%";
}

export default function BottomSection({ image, title, descriptions, imageWidth = "30%" }: BottomSectionProps) {
  return (
    <section className={styles.bottomSection}>
      {/* Image on the left */}
      <div
        className={classNames(styles.imageContainer, {
          [styles.image30]: imageWidth === "30%",
          [styles.image100]: imageWidth === "100%",
        })}
      >
        <Image
          src={`/images/${image}`}
          alt="Matcha Ceremony"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>

      {/* Content on the right */}
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {descriptions.map((description, index) => (
          <p key={index} className={styles.description}>
            {description}
          </p>
        ))}
      </div>
    </section>
  );
}
