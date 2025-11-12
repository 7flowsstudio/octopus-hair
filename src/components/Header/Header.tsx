"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.headerLeft}>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={50}
            height={56}
            fetchPriority="high"
            priority
            className={styles.logo}
          />
        </Link>

        <div className={styles.headerTitle}>Octopus</div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.headerNav} ${menuOpen ? styles.open : ""}`}>
          <ul className={styles.headerNavList}>
            <li>
              <a href="#about">Pro nas</a>
            </li>
            <li>
              <a href="#gallery">Galeria</a>
            </li>
            <li>
              <a href="#booking">Zapisy</a>
            </li>
            <li>
              <a href="#prices">Cennik usług</a>
            </li>
            <li>
              <a href="#products">Kosmetyki</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>

          <a href="#booking" className={styles.headerButton}>
            Umów wizytę
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
