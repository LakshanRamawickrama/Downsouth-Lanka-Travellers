"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/components/css/About.module.css";

import { journeyData } from "@/data/journey";

export default function GalleryPage() {
    return (
        <main style={{ backgroundColor: "#f8f9fa" }}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.aboutHero}>
                <Image
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
                    alt="Travel Journey"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Captured Moments
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Visual Stories from Paradise
                    </motion.p>
                </div>
            </section>

            {/* Modern Gallery Section */}
            <section className={styles.gallerySection}>
                <div className="container">

                    <div className={styles.modernGrid}>
                        {journeyData.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                className={styles.gridItem}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className={styles.itemOverlay}>
                                        <span className={styles.itemLocation}>{item.location}</span>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
