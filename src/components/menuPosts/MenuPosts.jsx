import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/posts/solfare-wallet-revolutionizes-solana-trading-experience-with-tradingview-chart-integration" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/k1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.DeFi}`}>DeFi</span>
          <h3 className={styles.postTitle}>
          Solfare introduced a groundbreaking feature
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Yuccie Hope</span>
            <span className={styles.date}> - 23.02.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/solana-nfts-reach-unprecedented-milestone-in-all-time-sales-volume" className={styles.item}>
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
          Solana NFT Market Hits Record High, Showcasing Remarkable Growth
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
