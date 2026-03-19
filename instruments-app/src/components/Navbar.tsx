"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useScrollReveal();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navInner}>
                <div className={`${styles.navContainer}`}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/ic_logo.png"
                            alt="Instruments & Controls"
                            width={180}
                            height={70}
                            className={styles.logoImg}
                            priority
                            unoptimized
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className={styles.navLinks}>
                        <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
                        <Link href="/products" className={`${styles.navLink} ${pathname === '/products' ? styles.active : ''}`}>Products</Link>
                        <Link href="/download-catalogue" className={`${styles.navLink} ${pathname === '/download-catalogue' ? styles.active : ''}`}>Catalogues</Link>
                        <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>About Us</Link>
                        <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}>Contact Us</Link>
                    </div>

                    <Link href="/contact" className={`${styles.ctaButton} ${styles.desktopOnly}`}>
                        Get In Touch
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className={styles.menuToggle} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className={styles.mobileDrawer}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <div className={styles.mobileLinks}>
                            <Link href="/" className={`${styles.mobileLink} ${pathname === '/' ? styles.mobileActive : ''}`}>Home</Link>
                            <Link href="/products" className={`${styles.mobileLink} ${pathname === '/products' ? styles.mobileActive : ''}`}>Products</Link>
                            <Link href="/download-catalogue" className={`${styles.mobileLink} ${pathname === '/download-catalogue' ? styles.mobileActive : ''}`}>Catalogues</Link>
                            <Link href="/about" className={`${styles.mobileLink} ${pathname === '/about' ? styles.mobileActive : ''}`}>About Us</Link>
                            <Link href="/contact" className={`${styles.mobileLink} ${pathname === '/contact' ? styles.mobileActive : ''}`}>Contact Us</Link>
                            <Link href="/contact" className={styles.mobileCta}>
                                Get In Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
