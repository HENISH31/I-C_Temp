"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';
import styles from './page.module.css';

const CHAPTERS = [
  {
    id: "relay",
    title: "The Heart of Protection",
    product: "Buchholz Relays",
    subtitle: "Precision Protection",
    tagline: "Global Standards Since 1973",
    description: "Industry-leading gas and oil operated protection devices for power transformers. Engineered for fail-safe performance in critical infrastructure.",
    image: "/products-new/relay_gas_1.png",
    color: "#0066cc",
    stat: "50+ Years",
    label: "Industry Standard"
  },
  {
    id: "mog",
    title: "Unfailing Vigilance",
    product: "Magnetic Oil Level Gauges",
    subtitle: "Accurate Monitoring",
    tagline: "High Reliability Instrumentation",
    description: "High-precision magnetic indicators with remote alarm contacts. Constant monitoring for oil-filled power equipment.",
    image: "/products-new/mog_so6.png",
    color: "#0ea5e9",
    stat: "99.9%",
    label: "Accuracy Rating"
  },
  {
    id: "breather",
    title: "The Ultimate Shield",
    product: "Silicagel Breathers",
    subtitle: "Moisture Control",
    tagline: "Advanced Environmental Guard",
    description: "Next-generation moisture protection designed to significantly extend transformer life by maintaining oil purity.",
    image: "/products-new/breather_3kg.png",
    color: "#0284c7",
    stat: "10k+",
    label: "Global Installations"
  }
];

export default function Home() {
  useScrollReveal();
  useParallax();

  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = ["/h1_transparent.png", "/h2_transparent.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev: number) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${styles.homeContainer} scan-background`}>
      {/* Cinematic Story Indicators */}
      <div className="story-indicator">
        {CHAPTERS.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`} className="indicator-dot" title={chapter.product}></a>
        ))}
      </div>

      {/* Chapter 1: Hero Story */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent} cinematic-load`} data-parallax="0.05">
          <div className={`${styles.heroText} glass`} style={{ padding: '3rem', transform: 'translateY(calc(var(--parallax-offset) * -0.5))' }}>
            <span className={styles.sectionLabel}>Since 1973</span>
            <h1 className={styles.heroTitle}>
              Engineering <br />
              <span className={styles.accent} style={{ color: CHAPTERS[0].color }}>Precision.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Manufacturing high-performance transformer protection and monitoring solutions for the global energy sector.
            </p>
            <div className={styles.heroActions}>
              <Link href="/products" className={`${styles.btnPrimary} glass`}>Explore Solutions</Link>
              <Link href="/about" className={`${styles.btnOutline} glass`}>Our Legacy</Link>
            </div>
          </div>
          <div className={styles.productShowcase}>
            <div className="float" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '500px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ position: 'absolute', width: '100%', height: '100%' }}
                >
                  <Image
                    src={heroImages[heroIndex]}
                    alt="Technical Showcase"
                    width={700}
                    height={700}
                    className={styles.heroImage}
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters: Story Mode Flow */}
      {CHAPTERS.map((chapter) => (
        <section key={chapter.id} id={chapter.id} className={`${styles.storyChapter} section`}>
          <div className={styles.chapterBg}>
            <Image
              src={chapter.image}
              alt=""
              width={1200}
              height={1200}
              className={styles.chapterWatermark}
            />
          </div>

          <div className="container">
            <div className={`${styles.chapterGrid} reveal-on-scroll`}>
              <div className={`${styles.chapterInfo} ${styles.chapterInfoCard} glass`} data-parallax="0.08" style={{ transform: 'translateY(calc(var(--parallax-offset) * -1))' }}>
                <span className={styles.sectionLabel} style={{ color: chapter.color }}>{chapter.tagline}</span>
                <h2 className={styles.chapterTitle}>{chapter.title}</h2>
                <h3 className={styles.productName}>{chapter.product}</h3>
                <p className={styles.heroSubtitle}>{chapter.description}</p>

                <div className={styles.chapterStats}>
                  <div className={styles.statBox}>
                    <span className={styles.statValue}>{chapter.stat}</span>
                    <span className={styles.statLabel}>{chapter.label}</span>
                  </div>
                </div>

                <div className={styles.heroActions} style={{ marginTop: '2rem' }}>
                  <Link href={`/products?id=${chapter.id}`} className={`${styles.btnOutline} glass`}>Technical Specs</Link>
                </div>
              </div>

              <div className={styles.chapterImageContainer} data-parallax="0.12" style={{ transform: 'translateY(var(--parallax-offset))' }}>
                <div className="float">
                  <Image
                    src={chapter.image}
                    alt={chapter.product}
                    width={600}
                    height={600}
                    className={styles.chapterProductImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Features Section - Story Epilogue */}
      <section className={`section ${styles.features}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal-on-scroll`}>
            <span className={styles.label}>Global Impact</span>
            <h2 className={styles.sectionTitle}>Built for Extreme Reliability</h2>
          </div>

          <div className={`${styles.featureGrid} reveal-on-scroll`}>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}>🛠️</div>
              <h3>Maintenance Free</h3>
              <p>Designed for decades of operation in the harshest industrial environments.</p>
            </div>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}>🌐</div>
              <h3>Global Compliance</h3>
              <p>Certified to international quality and safety standards for infrastructure.</p>
            </div>
            <div className={`${styles.featureCard} glass`}>
              <div className={styles.featureIcon}>⏱️</div>
              <h3>Real-time Response</h3>
              <p>Synchronized alarms and trips ensuring immediate protection for assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Story Call to Action */}
      <section className={`${styles.aboutSnippet} reveal-on-scroll`}>
        <div className="container">
          <div className={`${styles.aboutContent} glass`}>
            <div className={styles.aboutText}>
              <h2>Begin Your Success Story</h2>
              <p>Partner with a heritage of engineering excellence. Let us secure your most critical energy assets with technology that defines reliability.</p>
              <Link href="/contact" className={`${styles.btnPrimary} glass`}>Start Project Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
