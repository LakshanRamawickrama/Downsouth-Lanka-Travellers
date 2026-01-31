"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./css/Footer.module.css";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.grid} container`}>
                <div className={styles.logoArea}>
                    <div className={styles.logo}>
                        <Image src="/logo.jpg" alt="Logo" width={60} height={60} style={{ borderRadius: "8px" }} />
                        <div className={styles.logoText}>
                            DOWNSOUTH<br /><span>LANKA TRAVELLERS</span>
                        </div>
                    </div>
                    <p className={styles.aboutText}>
                        Your premium gateway to the wonders of Sri Lanka. We specialize in providing unforgettable experiences,
                        reliable transport, and deep local insights across the Southern coast and beyond.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        <Facebook size={20} className={styles.link} style={{ cursor: "pointer" }} />
                        <Instagram size={20} className={styles.link} style={{ cursor: "pointer" }} />
                        <Twitter size={20} className={styles.link} style={{ cursor: "pointer" }} />
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <div className={styles.links}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="#tours" className={styles.link}>Tour Packages</Link>
                        <Link href="#transport" className={styles.link}>Our Fleet</Link>
                        <Link href="#about" className={styles.link}>About Us</Link>
                        <Link href="#contact" className={styles.link}>Contact</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Destinations</h4>
                    <div className={styles.links}>
                        <span className={styles.link}>Galle Fort</span>
                        <span className={styles.link}>Mirissa Beach</span>
                        <span className={styles.link}>Yala Safari</span>
                        <span className={styles.link}>Ella Highlands</span>
                        <span className={styles.link}>Kandy Culture</span>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Contact Us</h4>
                    <div className={styles.contactItem}>
                        <MapPin size={20} style={{ color: "var(--primary)" }} />
                        <span>Southern Highway Office,<br />Galle, Sri Lanka</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Phone size={20} style={{ color: "var(--primary)" }} />
                        <span>+94 77 123 4567<br />+94 91 222 3456</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Mail size={20} style={{ color: "var(--primary)" }} />
                        <span>info@downsouthlanka.com<br />bookings@downsouthlanka.com</span>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    &copy; {new Date().getFullYear()} Downsouth Lanka Travellers. All Rights Reserved. Designed for Excellence.
                </div>
            </div>
        </footer>
    );
}
