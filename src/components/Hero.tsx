"use client";

import Image from "next/image";
import styles from "./css/Hero.module.css";
import { Search, MapPin, Calendar, Map } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "../../public/images/hero.jpg";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}>
                <Image
                    src={HeroImage}
                    alt="Sri Lanka Beach"
                    fill
                    priority
                    quality={100}
                />
            </div>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Discover the Magic of <span>Sri Lanka</span>
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Authentic travels, luxury transport, and unforgettable memories in paradise.
                </motion.p>

                <motion.div
                    className={styles.searchBar}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className={styles.searchField}>
                        <div className={styles.label}><MapPin size={14} style={{ marginRight: 4 }} /> Destination</div>
                        <input type="text" placeholder="Where to?" className={styles.input} />
                    </div>

                    <div className={styles.searchField}>
                        <div className={styles.label}><Map size={14} style={{ marginRight: 4 }} /> Tour Type</div>
                        <select className={styles.input}>
                            <option>Adventure</option>
                            <option>Wildlife</option>
                            <option>Cultural</option>
                            <option>Beach Stay</option>
                        </select>
                    </div>

                    <div className={styles.searchField}>
                        <div className={styles.label}><Calendar size={14} style={{ marginRight: 4 }} /> Duration</div>
                        <input type="text" placeholder="Days" className={styles.input} />
                    </div>

                    <button className={styles.searchBtn}>
                        <Search size={24} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
