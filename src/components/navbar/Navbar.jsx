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
    <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
    <Image src="/telegram.svg" alt="telegram" width={24} height={24} />
   </div>
   <div className={styles.logo}>
       <Image src="https://i.ibb.co/Lr9Vg7j/655df9495eb6ab31f627cc70-Logo-3-p-500.png" alt="DegenDish Logo" width={60} height={60} /> 
   </div>
   <div className={styles.links}>
    <ThemeToggle />
    <Link href="/" className={styles.link}>Homepage</Link>
    <Link href="https://t.me/moondogsmod?start=DegenDishInquiry" className={styles.link}>Contact</Link>
    <Link href="https://twitter.com/DegenDish" className={styles.link}>About</Link>
    <AuthLinks />
   </div>
  </div>
 );
};

export default Navbar;
