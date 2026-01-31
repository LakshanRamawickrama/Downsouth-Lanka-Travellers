"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/components/css/Contact.module.css";
import contact from "../../../public/images/contact.png";
import { contactConfig } from "@/data/contact";

export default function ContactPage() {
    return (
        <main style={{ backgroundColor: "#fafafa" }}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.contactHero}>
                <Image
                    src={contact}
                    alt="Contact Us"
                    fill
                    style={{ objectFit: "cover", opacity: 0.6 }}
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroContent}>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.container}>
                <div className={styles.grid}>

                    {/* Inquiry Form */}
                    <motion.div
                        className={styles.formCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ gridColumn: "1 / -1", maxWidth: "800px", margin: "0 auto", width: "100%" }}
                    >
                        <h3 className={styles.formTitle}>Send an Inquiry</h3>
                        <p className={styles.formSubtitle}>Fill out the form below and our travel experts will get back to you within 24 hours.</p>

                        <form>
                            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>First Name</label>
                                    <input type="text" className={styles.input} placeholder="John" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Last Name</label>
                                    <input type="text" className={styles.input} placeholder="Doe" />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email Address</label>
                                <input type="email" className={styles.input} placeholder="john@example.com" />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Phone Number</label>
                                <input type="tel" className={styles.input} placeholder={contactConfig.phones[0].value} />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Message / Tour Interest</label>
                                <textarea className={styles.textarea} placeholder="Tell us about your travel plans, dates, and interests..."></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </form>
                    </motion.div>

                </div>

                {/* Location Map */}
                <motion.div
                    className={styles.mapSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className={styles.mapTitle}>Find Us</h2>
                    <div className={styles.mapContainer}>
                        <iframe
                            src={contactConfig.googleMapsEmbed}
                            className={styles.mapFrame}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Downsouth Lanka Office Location"
                        ></iframe>
                    </div>
                </motion.div>

            </section>

            <Footer />
        </main>
    );
}
