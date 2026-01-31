"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/Navbar.module.css";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.jpg"
                        alt="Downsouth Lanka Travellers"
                        width={50}
                        height={50}
                        className={styles.logoImg}
                    />
                    <div className={styles.logoText}>
                        DOWNSOUTH<span>LANKA TRAVELLERS</span>
                    </div>
                </Link>

                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/tours" className={styles.navLink}>Tours</Link>
                    <Link href="/#transport" className={styles.navLink}>Transport</Link>
                    <Link href="/#about" className={styles.navLink}>About</Link>
                    <Link href="/#contact" className={styles.navLink}>Contact</Link>
                    <button className={styles.cta}>Enquire Now</button>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu (Simplified for now) */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    {/* Mobile menu content would go here */}
                </div>
            )}
        </nav>
    );
}
