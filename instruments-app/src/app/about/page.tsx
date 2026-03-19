"use client";

import React from "react";
import Link from "next/link";
import styles from "./about.module.css";

// ── Real company data from IndiaMART ──────────────────────────────────────────
const TEAM = [
    { name: "J. M. Mody", role: "Co-Founder & Director", qual: "B.Sc. (Elec & Mech)", emoji: "👷" },
    { name: "Manjula Manoj Mody", role: "CEO & Managing Partner", qual: "B.E. (Mechanical)", emoji: "🎯" },
    { name: "Mrs. V. J. Mody", role: "Operations Director", qual: "Senior Management", emoji: "💼" },
];

const CLIENTS = [
    { name: "Crompton Greaves Ltd.", note: "Manideep, Mumbai & Malanpur" },
    { name: "Transformers & Rectifiers India Ltd.", note: "Ahmedabad" },
    { name: "Voltamp Transformers Ltd.", note: "Vadodara" },
    { name: "Patson Transformers P Ltd.", note: "" },
    { name: "Transformers & Electricals Kerala Ltd.", note: "TELK" },
    { name: "Emco Transformers Ltd.", note: "Jalgaon & Thane" },
    { name: "Hackbridge Hewittic & Easun Ltd.", note: "" },
];

const TESTING = [
    { area: "Buchholz Relay", tests: ["Gas Volume Test", "Loss of Oil Test", "Surge Test"] },
    { area: "Pressure Testing", tests: ["Porosity Test", "Elements Test", "Mechanical Strength"] },
    { area: "MOG Calibration", tests: ["Level Marking Calibration", "Leakproofness up to 4 Kg/cm²"] },
    { area: "Electrical Testing", tests: ["Insulation Resistance (Megger 500V)", "200 MΩ range"] },
];

const MACHINES = [
    { icon: "⚙️", name: "Power Presses", detail: "30T and 10T capacity" },
    { icon: "🔩", name: "Lathe Machines", detail: "6 Ft Heavy Duty + 5 Ft Precision" },
    { icon: "🔧", name: "Drilling Machines", detail: "Geared, heavy-duty" },
    { icon: "🔥", name: "Welding Machines", detail: "300 Amps capacity" },
    { icon: "🎨", name: "Paint Stoving Oven", detail: "4×4×4 Ft" },
    { icon: "💨", name: "Air Compressor", detail: "15 Kg/cm² pressure" },
];

const STATS = [
    { value: "1973", label: "Year Established" },
    { value: "50+", label: "Years of Expertise" },
    { value: "7–8", label: "Skilled Employees" },
    { value: "7+", label: "Major OEM Clients" },
];

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>

            {/* ── Hero Header ──────────────────────────────── */}
            <header className={styles.pageHeader}>
                <div className={styles.headerInner}>
                    <span className={styles.headerLabel}>Since 1973 · Vadodara, Gujarat</span>
                    <h1>Instruments & Controls</h1>
                    <p className={styles.headerSub}>
                        Manufacturer of precision transformer protection devices — Buchholz Relays, Magnetic Oil Level Gauges & Accessories. Trusted by India&apos;s top transformer OEMs for over five decades. 
                        Strengthened by our sister concern, <strong>Mody & Associates</strong>.
                    </p>
                    {/* iOS stats row */}
                    <div className={styles.statsRow}>
                        {STATS.map(s => (
                            <div key={s.label} className={styles.statPill}>
                                <span className={styles.statValue}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* ── Company Overview ─────────────────────────── */}
            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <div className={styles.overviewGrid}>
                        {/* Main story */}
                        <div className={styles.overviewText}>
                            <span className={styles.sectionTag}>🏭 Our Story</span>
                            <h2>Engineering Precision<br />Since 1973</h2>
                            <p>
                                Established in 1973 at the <strong>GIDC Makarpura Industrial Area, Vadodara</strong>, M/s Instruments & Controls has been a trusted name in transformer protection for over five decades. Managed by qualified and experienced engineers, we operate from our own manufacturing premises with a fully equipped factory.
                            </p>
                            <p>
                                We are leading manufacturers of <strong>Buchholz Relays</strong>, <strong>Magnetic Oil Level Gauges (MOG)</strong>, <strong>Oil Surge Relays</strong>, and <strong>Silicagel Breathers</strong> — products installed in thousands of power transformers across India and internationally.
                            </p>
                            <p>
                                As a <strong>Registered SSI Unit</strong> and member of the <strong>Vadodara Chamber of Commerce & Industry (VCCI)</strong>, we combine traditional craftsmanship with modern quality systems to deliver instruments that protect critical electrical infrastructure.
                            </p>
                        </div>

                        {/* Factsheet card */}
                        <div className={styles.factCard}>
                            <div className={styles.factCardHeader}>
                                <span className={styles.factCardIcon}>📋</span>
                                <h3>Company Factsheet</h3>
                            </div>
                            <ul className={styles.factList}>
                                <li><span>Nature of Business</span><strong>Manufacturer</strong></li>
                                <li><span>Legal Status</span><strong>Partnership / Registered SSI</strong></li>
                                <li><span>Established</span><strong>1973</strong></li>
                                <li><span>CEO / MD</span><strong>Manjula Manoj Mody</strong></li>
                                <li><span>Employees</span><strong>7 – 8 People</strong></li>
                                <li><span>Location</span><strong>146, GIDC Makarpura, Vadodara – 390010</strong></li>
                                <li><span>GST No.</span><strong>24ACFPM7209L2ZF</strong></li>
                                <li><span>Trade Body</span><strong>VCCI Member</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Team ─────────────────────────────────────── */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>👥 Leadership</span>
                        <h2>Our Team</h2>
                        <p>Qualified engineers & management professionals with decades of hands-on industry experience.</p>
                    </div>
                    <div className={styles.teamGrid}>
                        {TEAM.map(member => (
                            <div key={member.name} className={styles.teamCard}>
                                <div className={styles.teamAvatar}>{member.emoji}</div>
                                <h3 className={styles.teamName}>{member.name}</h3>
                                <span className={styles.teamRole}>{member.role}</span>
                                <span className={styles.teamQual}>{member.qual}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Clientele ────────────────────────────────── */}
            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>🏆 Clientele</span>
                        <h2>Trusted by Industry Leaders</h2>
                        <p>Our products are installed in transformers built by India&apos;s foremost OEM manufacturers.</p>
                    </div>
                    <div className={styles.clientGrid}>
                        {CLIENTS.map(client => (
                            <div key={client.name} className={styles.clientCard}>
                                <div className={styles.clientIcon}>⚡</div>
                                <div className={styles.clientInfo}>
                                    <strong>{client.name}</strong>
                                    {client.note && <span>{client.note}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Quality & Testing ────────────────────────── */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>🔬 Quality</span>
                        <h2>Testing & Quality Control</h2>
                        <p>Rigorous in-house testing equipment ensures every product meets or exceeds specifications before shipment.</p>
                    </div>
                    <div className={styles.testingGrid}>
                        {TESTING.map(t => (
                            <div key={t.area} className={styles.testCard}>
                                <h4 className={styles.testArea}>{t.area}</h4>
                                <ul className={styles.testList}>
                                    {t.tests.map(test => (
                                        <li key={test}>
                                            <span className={styles.testDot} />
                                            {test}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Infrastructure / Machines ────────────────── */}
            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>🏗️ Infrastructure</span>
                        <h2>Manufacturing Facilities</h2>
                        <p>Modern machinery and precision equipment at our Makarpura factory ensures consistent quality at scale.</p>
                    </div>
                    <div className={styles.machineGrid}>
                        {MACHINES.map(m => (
                            <div key={m.name} className={styles.machineCard}>
                                <span className={styles.machineIcon}>{m.icon}</span>
                                <span className={styles.machineName}>{m.name}</span>
                                <span className={styles.machineDetail}>{m.detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────── */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaCard}>
                    <span className={styles.sectionTag}>📞 Get In Touch</span>
                    <h2>Partner with 50 Years of Excellence</h2>
                    <p>Whether you&apos;re sourcing for a new transformer project or need a reliable replacement — we&apos;re here to help.</p>
                    <div className={styles.ctaActions}>
                        <Link href="/contact" className={styles.primaryBtn}>Request a Quote</Link>
                        <Link href="/products" className={styles.secondaryBtn}>View Products</Link>
                    </div>
                    <p className={styles.gstNote}>GST: 24ACFPM7209L2ZF · 146, GIDC Makarpura, Vadodara – 390010, Gujarat</p>
                </div>
            </section>

        </div>
    );
}
