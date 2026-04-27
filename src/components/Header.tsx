"use client";

import Image from "next/image";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.hero} role="banner">
      <Image
        src="/images/bg.jpg"
        alt=""
        fill
        priority
        className={styles.heroBg}
      />
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Pinturas Terracolor</h1>
        <p className={styles.slogan}>La vida a todo color...</p>
      </div>
    </header>
  );
}