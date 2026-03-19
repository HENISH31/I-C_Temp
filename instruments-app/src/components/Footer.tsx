"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/ic_logo.png"
              alt="Instruments & Controls"
              width={180}
              height={70}
              className={styles.logoImg}
              unoptimized
            />
          </Link>
          <p className={styles.description}>
            Manufacturing high-precision transformer protection and measurement solutions since 1973. Global standards from the heart of Vadodara.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
            <a href="#" className={styles.socialLink}>IndiaMART</a>
          </div>
        </div>

        <div className={styles.linkCol}>
          <h4>Solutions</h4>
          <ul className={styles.links}>
            <li><Link href="/products">Buchholz Relays</Link></li>
            <li><Link href="/products">Oil Level Gauges</Link></li>
            <li><Link href="/products">Protection Systems</Link></li>
            <li><Link href="/products">Accessories</Link></li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4>Company</h4>
          <ul className={styles.links}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/about">Our Legacy</Link></li>
            <li><Link href="/contact">Headquarters</Link></li>
            <li><Link href="/contact">Global Reach</Link></li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4>Contact</h4>
          <address className={styles.address}>
            146, GIDC Industrial Estate,<br />
            Makarpura, Vadodara - 390010<br />
            Gujarat, India
          </address>
          <p className={styles.contactInfo}>
            Email: info@instruments-controls.com<br />
            Phone: +91 (265) 265-1234
          </p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {new Date().getFullYear()} Instruments & Controls. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
