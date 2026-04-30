/* eslint-disable no-inline-styles, react/no-inline-styles */
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
    title: "Buchholz Relays",
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
    title: "Magnetic Oil Level Gauges",
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
    title: "Silica Gel Breathers (ABS Lids)",
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

  const heroImages = ["/h1_transparent.png", "/h2_transparent.png"];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev: number) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className={`${styles.homeContainer} scan-background`}>
      {/* Cinematic Story Indicators */}
      <div className="story-indicator">
        {CHAPTERS.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`} className="indicator-dot" title={chapter.title}></a>
        ))}
      </div>

      {/* Chapter 1: Hero Story */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent} cinematic-load`} data-parallax="0.05">
          {/* eslint-disable jsx-a11y/no-inline-styles, react/no-inline-styles */}
          <div className={`${styles.heroText} ${styles.heroTextCard} glass`} style={{ '--parallax-y': 'calc(var(--parallax-offset) * -0.5)' } as React.CSSProperties}>
            <span className={styles.sectionLabel}>Since 1973</span>
            <h1 className={styles.heroTitle}>
              INSTRUMENTS <br />
              {/* eslint-disable-next-line react/no-inline-styles */}
              <span style={{ display: 'inline-block', marginLeft: '1.8em' }}>&</span> <br />
              {/* eslint-disable-next-line react/no-inline-styles */}
              <span className={styles.accent} style={{ '--accent-color': CHAPTERS[0].color } as React.CSSProperties}>CONTROLS.</span>
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
            <div className={`float ${styles.floatContainer}`}>
              <AnimatePresence>
                <motion.div
                  key={heroIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                >
                  <Image
                    src={heroImages[heroIndex]}
                    alt="Technical Showcase"
                    width={700}
                    height={700}
                    className={`${styles.heroImage} ${styles.imageObjectFit}`}
                    priority
                    unoptimized
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
              {/* eslint-disable-next-line react/no-inline-styles */}
              <div className={`${styles.chapterInfo} ${styles.chapterInfoCard} glass`} data-parallax="0.08" style={{ '--parallax-y': 'calc(var(--parallax-offset) * -1)' } as React.CSSProperties}>
                {/* eslint-disable-next-line react/no-inline-styles */}
                <span className={styles.sectionLabel} style={{ '--accent-color': chapter.color } as React.CSSProperties}>{chapter.tagline}</span>
                <h2 className={styles.chapterTitle}>{chapter.title}</h2>
                <p className={styles.heroSubtitle}>{chapter.description}</p>

                <div className={styles.chapterStats}>
                  <div className={styles.statBox}>
                    <span className={styles.statValue}>{chapter.stat}</span>
                    <span className={styles.statLabel}>{chapter.label}</span>
                  </div>
                </div>

                <div className={`${styles.heroActions} ${styles.heroActionsSpaced}`}>
                  <Link href={`/products?id=${chapter.id}`} className={`${styles.btnOutline} glass`}>Technical Specs</Link>
                </div>
              </div>

              {/* eslint-disable-next-line react/no-inline-styles */}
              <div className={styles.chapterImageContainer} data-parallax="0.12" style={{ '--parallax-y': 'var(--parallax-offset)' } as React.CSSProperties}>
                <div className="float">
                  <Image
                    src={chapter.image}
                    alt={chapter.title}
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
