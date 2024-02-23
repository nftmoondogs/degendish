import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/posts/youtuber-ksi-accused-of-pump-and-dump-schemes-the-full-story" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/k1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.DeFi}`}>DeFi</span>
          <h3 className={styles.postTitle}>
          Youtuber KSI Accused of Pump and Dump Schemes: The Full Story
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Yuccie Hope</span>
            <span className={styles.date}> - 23.02.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/what-is-portal-coin-the-47th-binance-launchpool-project" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/b2.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.NFT}`}>
            NFT
          </span>
          <h3 className={styles.postTitle}>
          What is Portal Coin: The 47th Binance Launchpool Project?
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>WOOF MOD</span>
            <span className={styles.date}> - 10.02.2024</span>
          </div>
        </div>
      </Link>

    </div>
  );
};

export default MenuPosts;
