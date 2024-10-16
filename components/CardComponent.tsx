import Image from "next/image";
import styles from "../styles/CardComponent.module.css";

interface CardProps {
  image: string;
  name: string;
  price: string;
}
export default function CardComponent({ image, name, price }: CardProps) {
  return (
    <div className={styles.card}>
      {/* Product Image */}
      <div className={styles.imageWrapper}>
        <Image src={image} alt={name} layout="responsive" width={150} height={200} className={styles.image} />
      </div>

      {/* Product Info */}
      <div className={styles.info}>
        <h3>{name}</h3>
        <p className={styles.price}>{price}</p>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <button className={styles.addToCart}>Add to Cart</button>
        <button className={styles.details}>View Details</button>
      </div>
    </div>
  );
}
