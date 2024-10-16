import ShopComponent from "./ShopComponent";
import styles from "../../styles/Shop.module.css";

export default function ShopPage() {
  return (
    <div className={styles.container}>
      <h1>Shop</h1>
      <ShopComponent />
    </div>
  );
}
