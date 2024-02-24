import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="https://twitter.com/SolanaScoop" target="_blank">
          <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
        </a>
        <a href="" target="_blank">
          <Image src="/telegram.svg" alt="telegram" width={24} height={24} />
        </a>
      </div>

      {/* Logo Wrapper for controlled sizing */}
      <div className={styles.logoWrapper}> 
        <Image
          src="https://i.ibb.co/tXT076b/full-logo-transparent.png"
          alt="SolanaScoop Logo"
          width={200} // Original width
          height={200} // Original height
          layout="responsive" // Maintain aspect ratio 
        />
      </div>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="https://t.me/moondogsmod?start=SolanaScoopInquiry" className={styles.link}>Contact</Link>
        <Link href="https://twitter.com/SolanaScoop" className={styles.link}>About</Link>
        <AuthLinks />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;

