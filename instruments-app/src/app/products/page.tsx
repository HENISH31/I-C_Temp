"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import styles from "./products.module.css";

// ─── Complete Product Catalog (from IndiaMART) ───────────────────────────────
const ALL_PRODUCTS = [
    {
        id: "relay-gas-1",
        name: "Gas Operated Relay 1",
        category: "Buchholz Relay",
        categoryColor: "#007AFF",
        emoji: "🛡️",
        image: "/products-new/relay_gas_1.png",
        link: "https://www.tradeindia.com/products/gas-operated-relay-1-8066846.html",
        specs: ["Industrial usage", "Double float protection", "Gas collection chamber", "High-power contact load", "Oil surge detection", "Fail-safe switching"],
        description: "Industrial-grade Gas Operated Buchholz Relay designed for comprehensive transformer protection. Detects gas buildup and oil surges to prevent internal damage.",
        highlights: ["High-power contact load", "Industrial grade", "Rapid fault detection"],
    },
    {
        id: "relay-gas-2",
        name: "Gas Operated Relay 2",
        category: "Buchholz Relay",
        categoryColor: "#007AFF",
        emoji: "⚡",
        image: "/products-new/relay_gas_2.png",
        link: "https://www.tradeindia.com/products/gas-operated-relay-2-8571125.html",
        specs: ["Industrial usage", "Rugged construction", "Precise calibration", "Weatherproof IP65", "Alarm + Trip contacts", "Low maintenance"],
        description: "Reliable gas-operated relay for monitoring oil-immersed transformers. Provides essential protection against internal faults by detecting gas evolution.",
        highlights: ["Weatherproof design", "High calibration accuracy", "Long service life"],
    },
    {
        id: "mog-so6",
        name: "Magnetic Oil Level Gauge SO6",
        category: "Magnetic Oil Level Gauge",
        categoryColor: "#34C759",
        emoji: "📊",
        image: "/products-new/mog_so6.png",
        link: "https://www.tradeindia.com/products/magnetic-oil-level-gauge-so6-8052133.html",
        specs: ["Mild Steel construction", "Analog display", "White color", "Industrial grade", "High accuracy", "Reliable oil monitoring"],
        description: "High-grade SO6 Magnetic Oil Level Gauge with clear analog display. Ensures accurate monitoring of transformer oil levels with a robust mild steel body.",
        highlights: ["Industrial Grade", "Clear Analog Display", "Accuracy ±2%"],
    },
    {
        id: "mog-so4",
        name: "Magnetic Oil Level Gauge SO4",
        category: "Magnetic Oil Level Gauge",
        categoryColor: "#34C759",
        emoji: "🎯",
        image: "/products-new/mog_so4.png",
        link: "https://www.tradeindia.com/products/magnetic-oil-level-gauge-so4-8066845.html",
        specs: ["White & Grey finish", "Magnetic coupling", "Accuracy ±2%", "Alarm contacts", "No oil seal required", "Corrosion resistant"],
        description: "SO4 Magnetic Oil Level Gauge featuring a professional white and grey finish. Provides continuous level indication without direct contact with oil.",
        highlights: ["Magnetic Coupling", "Dual Color Finish", "Zero Leakage"],
    },
    {
        id: "product-1",
        name: "Alum.Lids CVD 0.5Kg",
        category: "Transformer Parts",
        categoryColor: "#FF3B30",
        emoji: "💨",
        image: "/image/img_1.png",
        link: "/contact",
        specs: ["Precision engineered", "Industrial grade", "High durability", "Weather resistant", "Low maintenance", "Easy install"],
        description: "A professional-grade industrial component designed for maximum reliability in demanding environments. Features precision engineering and robust construction.",
        highlights: ["Durable Build", "Precision Fit", "Industrial Grade"],
    },
    {
        id: "product-2",
        name: "Alum.Lids CVD 1Kg",
        category: "Transformer Parts",
        categoryColor: "#FF3B30",
        emoji: "💨",
        image: "/image/img_2.png",
        link: "/contact",
        specs: ["Enhanced performance", "Compact design", "Heat resistant", "Corrosion proof", "Standardized fit", "High efficiency"],
        description: "Versatile industrial tool built to enhance operational efficiency. This product offers high-performance specs in a compact, easy-to-install package.",
        highlights: ["High Efficiency", "Compact Design", "Corrosion Proof"],
    },
    {
        id: "product-3",
        name: "Alum.Lids CVD 1.5Kg",
        category: "Transformer Parts",
        categoryColor: "#FF3B30",
        emoji: "💨",
        image: "/image/img_3.png",
        link: "/contact",
        specs: ["Multi-purpose use", "Rugged housing", "Advanced sensors", "Real-time monitoring", "Stable operation", "Vibration proof"],
        description: "Advanced monitoring component designed for stable operation under high vibration. Includes built-in sensors for real-time status updates.",
        highlights: ["Rugged Housing", "Real-time Monitoring", "Vibration Proof"],
    },
    {
        id: "product-4",
        name: "Silica Gel Breathers 100 Gms",
        category: "Transformer Parts",
        categoryColor: "#FF3B30",
        emoji: "💨",
        image: "/image/img_4.png",
        link: "/contact",
        specs: ["Fast response time", "High load capacity", "Safety interlocks", "Modular assembly", "UV protected", "Silent operation"],
        description: "High-capacity component featuring rapid response times and integrated safety interlocks. Designed for modular assembly in complex systems.",
        highlights: ["Fast Response", "High Load Capacity", "Built-in Safety"],
    },
    {
        id: "product-5",
        name: "Silica Gel Breathers 250 Gms",
        category: "Transformer Parts",
        categoryColor: "#FF3B30",
        emoji: "💨",
        image: "/image/img_5.png",
        link: "/contact",
        specs: ["Lightweight alloy", "High-speed rating", "Precision bearings", "Sealed lubrication", "Anti-static finish", "Long service life"],
        description: "Lightweight yet powerful component with high-speed ratings and precision bearings. Features a sealed lubrication system for maintenance-free use.",
        highlights: ["Lightweight Alloy", "High-Speed Rating", "Maintenance Free"],
    },
    {
        id: "product-6",
        name: "Silica Gel Breathers 500 Gms",
        category: "Transformer Parts",
        categoryColor: "#FF3B30",
        emoji: "💨",
        image: "/image/img_6.png",
        link: "/contact",
        specs: ["Dual-mode operation", "Reinforced seals", "Pressure equalizing", "Chemical resistant", "Impact proof", "Quick-release mounts"],
        description: "Robust industrial product with dual-mode operation and reinforced seals. Excellent resistance to chemical exposure and mechanical impact.",
        highlights: ["Chemical Resistant", "Dual-Mode", "Reinforced Seals"],
    },
    {
        id: "product-7",
        name: "Silica Gel Breathers 1 Kg",
        category: "Transformer Parts",
        categoryColor: "#FF3B30",
        emoji: "💨",
        image: "/image/img_7.png",
        link: "/contact",
        specs: ["Smart integration", "Remote accessible", "Low power drain", "High torque output", "Digital calibration", "Diagnostic LEDs"],
        description: "The next generation of industrial control, featuring smart integration and digital calibration. Provides high torque output with minimal power consumption.",
        highlights: ["Smart Integration", "High Torque", "Digital Control"],
    },
    {
        id: "product-8",
        name: "Silica Gel Breathers 1.5 Kg",
        category: "Transformer Parts",
        categoryColor: "#FF3B30",
        emoji: "💨",
        image: "/image/img_8.png",
        link: "/contact",
        specs: ["High-temp operation", "Customizable settings", "Gold-plated contacts", "Shielded enclosure", "Error logging", "Auto-reset feature"],
        description: "Specialized high-temperature component with customizable settings and gold-plated contacts. Includes an auto-reset feature for uninterrupted operation.",
        highlights: ["High-Temp Ready", "Customizable", "Gold-Plated Contacts"],
    },
];

const CATEGORIES = ["All", "Buchholz Relay", "Magnetic Oil Level Gauge", "Transformer Parts", "Other Products"];

const CATEGORY_ICONS: Record<string, string> = {
    "All": "🏭",
    "Buchholz Relay": "🛡️",
    "Magnetic Oil Level Gauge": "📊",
    "Transformer Parts": "💨",
    "Other Products": "🔥",
};

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<(typeof ALL_PRODUCTS)[0] | null>(null);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const tabBarRef = useRef<HTMLDivElement>(null);

    const filtered = activeCategory === "All"
        ? ALL_PRODUCTS
        : ALL_PRODUCTS.filter(p => p.category === activeCategory);

    const handleCategoryChange = (newCat: string) => {
        const oldIndex = CATEGORIES.indexOf(activeCategory);
        const newIndex = CATEGORIES.indexOf(newCat);
        setDirection(newIndex > oldIndex ? 1 : -1);
        setActiveCategory(newCat);
    };

    // Auto-scroll active tab into view
    useEffect(() => {
        if (tabBarRef.current) {
            const activeTab = tabBarRef.current.querySelector(`.${styles.tabActive}`);
            if (activeTab) {
                activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    }, [activeCategory]);

    const swipeHandlers = {
        onDragEnd: (event: any, info: any) => {
            const threshold = 50;
            if (info.offset.x < -threshold) {
                // Swipe left -> Next category
                const currentIndex = CATEGORIES.indexOf(activeCategory);
                if (currentIndex < CATEGORIES.length - 1) {
                    handleCategoryChange(CATEGORIES[currentIndex + 1]);
                }
            } else if (info.offset.x > threshold) {
                // Swipe right -> Previous category
                const currentIndex = CATEGORIES.indexOf(activeCategory);
                if (currentIndex > 0) {
                    handleCategoryChange(CATEGORIES[currentIndex - 1]);
                }
            }
        }
    };

    return (
        <div className={styles.productsPage}>
            {/* Hero Header */}
            <header className={styles.pageHeader}>
                <div className="container">
                    <span className={styles.headerLabel}>Since 1973 · Vadodara, India</span>
                    <h1>Our Products</h1>
                    <p>Complete range of transformer protection, monitoring & control instruments — trusted globally.</p>
                </div>
            </header>

            {/* iOS-style Category Tab Bar */}
            <div className={styles.tabBarWrapper}>
                <div className={styles.tabBar} ref={tabBarRef}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.tabItem} ${activeCategory === cat ? styles.tabActive : ""}`}
                            onClick={() => handleCategoryChange(cat)}
                        >
                            <span className={styles.tabIcon}>{CATEGORY_ICONS[cat]}</span>
                            <span className={styles.tabLabel}>{cat === "Magnetic Oil Level Gauge" ? "Level Gauge" : cat}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* iOS App Icon Grid with Swipe Capability */}
            <section className={styles.gridSection}>
                <motion.div
                    className={styles.swipeContainer}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={swipeHandlers.onDragEnd}
                >
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeCategory}
                            custom={direction}
                            initial={{ opacity: 0, x: direction * 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction * -50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className={styles.appGrid}
                        >
                            {filtered.map((product, idx) => (
                                <button
                                    key={product.id}
                                    className={styles.appIcon}
                                    onClick={() => setSelectedProduct(product)}
                                // Removed inline animation delay to use framer-motion stagger if wanted, but iconPop is still in CSS
                                >
                                    {/* Image tile — iOS icon shape */}
                                    <div
                                        className={styles.iconTile}
                                        style={{ borderColor: `${product.categoryColor}30` }}
                                    >
                                        <div
                                            className={styles.iconBg}
                                            style={{ background: `linear-gradient(135deg, ${product.categoryColor}18 0%, ${product.categoryColor}08 100%)` }}
                                        />
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={120}
                                            height={120}
                                            className={styles.iconImg}
                                        />
                                        {/* Category dot */}
                                        <div
                                            className={styles.categoryDot}
                                            style={{ background: product.categoryColor }}
                                        />
                                    </div>
                                    <span className={styles.iconLabel}>{product.name}</span>
                                </button>
                            ))}

                            {filtered.length === 0 && (
                                <div className={styles.emptyState}>
                                    <p>No products in this category.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                <div className={styles.swipeHint}>
                    <span>← Swipe to switch categories →</span>
                </div>
            </section>

            {/* iOS-style Product Detail Modal (slides up from bottom) */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        className={styles.modalBackdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            className={styles.modalSheet}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Drag handle */}
                            <div className={styles.dragHandle} />

                            {/* Modal content */}
                            <div className={styles.modalInner}>
                                {/* Close pill */}
                                <button
                                    className={styles.modalClose}
                                    onClick={() => setSelectedProduct(null)}
                                >✕</button>

                                {/* Product image — large hero */}
                                <div className={styles.modalImageBox} style={{ background: `linear-gradient(135deg, ${selectedProduct.categoryColor}15, ${selectedProduct.categoryColor}08)` }}>
                                    <div className={styles.modalImageWrapper}>
                                        <Image
                                            src={selectedProduct.image}
                                            alt={selectedProduct.name}
                                            fill
                                            className={styles.modalImage}
                                            sizes="(max-width: 768px) 100vw, 400px"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Product info */}
                                <div className={styles.modalInfo}>
                                    <div className={styles.modalCategory} style={{ color: selectedProduct.categoryColor }}>
                                        {selectedProduct.emoji} {selectedProduct.category}
                                    </div>
                                    <h2 className={styles.modalTitle}>{selectedProduct.name}</h2>
                                    <p className={styles.modalDesc}>{selectedProduct.description}</p>

                                    {/* Highlights chips */}
                                    <div className={styles.highlights}>
                                        {selectedProduct.highlights.map(h => (
                                            <span key={h} className={styles.chip} style={{ borderColor: `${selectedProduct.categoryColor}40`, color: selectedProduct.categoryColor, background: `${selectedProduct.categoryColor}12` }}>
                                                ✓ {h}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Spec grid */}
                                    <div className={styles.specGrid}>
                                        {selectedProduct.specs.map(spec => (
                                            <div key={spec} className={styles.specChip}>
                                                <span className={styles.specDot} style={{ background: selectedProduct.categoryColor }} />
                                                {spec}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className={styles.modalActions}>
                                        <Link href="/contact" className={styles.primaryBtn}>
                                            Request a Quote
                                        </Link>
                                        <a
                                            href={selectedProduct.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.secondaryBtn}
                                        >
                                            View on TradeIndia ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
