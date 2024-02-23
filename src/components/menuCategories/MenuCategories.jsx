import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="blog?cat=DeFi" className={`${styles.categoryItem} ${styles.DeFi}`}>
        DeFi
      </Link>
      <Link href="blog?cat=NFT" className={`${styles.categoryItem} ${styles.NFT}`}>
        NFT
      </Link>
    </div>
  );
};

export default MenuCategories;

