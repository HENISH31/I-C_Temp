import React from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
            <header className={styles.pageHeader}>
                <div className="container">
                    <h1>Connect With Our Engineers</h1>
                    <p>Inquiries for custom specifications or standard catalog distribution.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h2>Headquarters</h2>
                            <p>Instruments & Controls</p>
                            <p>146, GIDC Industrial Estate, Makarpura</p>
                            <p>Vadodara - 390010, Gujarat, India</p>

                            <div className={styles.contactMethods}>
                                <div className={styles.method}>
                                    <span>📍</span> Vadodara, India
                                </div>
                                <div className={styles.method}>
                                    <span>📧</span> info@instruments-controls.com
                                </div>
                                <div className={styles.method}>
                                    <span>📞</span> +91 (265) 265-1234
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.formBox} glass`}>
                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Business Email</label>
                                    <input type="email" placeholder="john@company.com" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Message</label>
                                    <textarea rows={5} placeholder="Inquiry details..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
