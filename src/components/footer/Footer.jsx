import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/woof.png" alt="woof" width={50} height={50} />
          <h1 className={styles.logoText}>Degen Dish</h1>
        </div>
        <p className={styles.desc}>
        Your source for unapologetically degen takes on the Solana ecosystem.
        </p>
        <div className={styles.icons}>
          <Image src="/twitter.svg" alt="" width={18} height={18} />
          <Image src="/telegram.svg" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="https://twitter.com/DegenDish">About</Link>
          <Link href="https://t.me/moondogsmod?start=DegenDishInquiry">Contact</Link>
          <Link href="/write" className={styles.link}>
            Admin
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=DeFi">DeFi</Link>
          <Link href="/blog?cat=NFT">NFTs</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://twitter.com/wooflabs">Twitter</Link>
          <Link href="https://t.me/woofcult">Telegram</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
