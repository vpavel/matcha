"use client";

import { useState } from "react";
import CardComponent from "../../components/CardComponent";
import { FaFilter } from "react-icons/fa";
import styles from "./ShopComponent.module.css";

export default function ShopComponent() {
  // Category filter options
  const categories = ["All", "Matcha", "Utensils"];

  // Sample array of products (replace with your actual product data)
  const products = [
    { id: 1, image: "/images/matcha1.jpg", name: "Premium Matcha", price: "$25", category: "Matcha" },
    { id: 2, image: "/images/matcha2.jpg", name: "Ceremonial Matcha", price: "$30", category: "Matcha" },
    { id: 3, image: "/images/whisk.jpg", name: "Matcha Whisk", price: "$15", category: "Utensils" },
    { id: 4, image: "/images/bowl.jpg", name: "Matcha Bowl", price: "$20", category: "Utensils" },
  ];

  // State to manage the current selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // State to toggle modal visibility (for mobile filter)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to filter products based on selected category
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={styles.shopContainer}>
      {/* Filter Sidebar (Visible on large screens) */}
      <aside className={styles.categoryFilter}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={selectedCategory === category ? styles.active : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Filter Icon for Mobile */}
      <button className={styles.filterIcon} onClick={() => setIsModalOpen(true)}>
        <FaFilter />
      </button>

      {/* Modal for Category Filter (Mobile only) */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Categories</h2>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={selectedCategory === category ? styles.active : ""}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsModalOpen(false); // Close modal after selecting a category
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <section className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <CardComponent key={product.id} image={product.image} name={product.name} price={product.price} />
        ))}
      </section>
    </div>
  );
}
