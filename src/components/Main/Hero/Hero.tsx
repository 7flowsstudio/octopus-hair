"use client";
import Image from "next/image";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <Image
          src="/images/hero/hero.jpg"
          alt="hero"
          fill
          priority
          className={styles.heroImage}
        />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Twój styl zaczyna się tutaj</h1>
        <p className={styles.heroDescription}>
          Octopus Studio - miejsce, w którym mężczyźni w każdym wieku mogą
          skorzystać ze strzyżenia, golenia i pielęgnacji w prawdziwie męskiej
          atmosferze.
        </p>
        <a href="#booking" className={styles.heroButton}>
          Umów wizytę
        </a>
      </div>
    </section>
  );
};

export default Hero;
