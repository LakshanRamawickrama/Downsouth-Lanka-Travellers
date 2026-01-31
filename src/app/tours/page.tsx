"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Clock, MapPin, Star, Filter, Search } from "lucide-react";
import { motion } from "framer-motion";
import { allTours } from "@/data/tours";
import styles from "@/components/css/Tours.module.css";
import { useState } from "react";
import tourHero from "../../../public/images/mirissa.jpg";

export default function ToursPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("All");

    const tags = ["All", ...Array.from(new Set(allTours.map(t => t.tag)))];

    const filteredTours = allTours.filter(tour => {
        const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tour.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTag = selectedTag === "All" || tour.tag === selectedTag;
        return matchesSearch && matchesTag;
    });

    return (
        <main style={{ paddingTop: "var(--nav-height)" }}>
            <Navbar />

            {/* Header */}
            <section className="section" style={{ position: "relative", minHeight: "350px", display: "flex", alignItems: "center", color: "white", textAlign: "center", overflow: "hidden" }}>
                <Image
                    src={tourHero}
                    alt="Sri Lanka Highlands"
                    fill
                    style={{ objectFit: "cover", zIndex: -1 }}
                    priority
                />
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", zIndex: 0 }} />

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <motion.h1
                        style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "1rem" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        All Tour Packages
                    </motion.h1>
                    <p style={{ fontSize: "1.2rem", opacity: "0.9", maxWidth: "700px", margin: "0 auto" }}>
                        Explore our complete collection of handpicked experiences across the beautiful island of Sri Lanka.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="container" style={{ marginTop: "-2rem", position: "relative", zIndex: 10 }}>
                <div className="glass" style={{ padding: "2rem", borderRadius: "16px", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between", boxShadow: "var(--shadow-lg)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1, minWidth: "300px" }}>
                        <Search size={20} color="var(--muted)" />
                        <input
                            type="text"
                            placeholder="Search by destination or tour name..."
                            style={{ padding: "0.8rem", border: "1px solid #ddd", borderRadius: "8px", width: "100%", outline: "none" }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <Filter size={20} color="var(--muted)" />
                        {tags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                style={{
                                    padding: "0.5rem 1.2rem",
                                    borderRadius: "100px",
                                    background: selectedTag === tag ? "var(--primary)" : "white",
                                    color: selectedTag === tag ? "white" : "var(--foreground)",
                                    border: `1px solid ${selectedTag === tag ? "var(--primary)" : "#ddd"}`,
                                    fontWeight: "500"
                                }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tours Grid */}
            <section className="section container">
                <div className={styles.grid}>
                    {filteredTours.map((tour, idx) => (
                        <motion.div
                            key={tour.id}
                            className={styles.tourCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            style={{ height: "auto", display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ position: "relative", height: "300px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                                <Image src={tour.image} alt={tour.title} fill style={{ objectFit: "cover" }} />
                                <div className={styles.overlay} />
                                <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", zIndex: 5 }}>
                                    <span className={styles.tag}>{tour.tag}</span>
                                </div>
                            </div>
                            <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--secondary)", marginBottom: "0.5rem" }}>{tour.title}</h3>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1rem" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Clock size={16} /> {tour.duration}</span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><MapPin size={16} /> {tour.location}</span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Star size={16} fill="#FFD700" color="#FFD700" /> {tour.rating}</span>
                                </div>
                                <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: "1.5" }}>
                                    {tour.description}
                                </p>
                                <div style={{ marginTop: "auto" }}>
                                    <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Enquire for Details</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredTours.length === 0 && (
                    <div style={{ textAlign: "center", padding: "5rem 0" }}>
                        <h3 style={{ fontSize: "1.5rem", color: "var(--muted)" }}>No tours found matching your search.</h3>
                        <button className="btn-secondary" style={{ marginTop: "1rem" }} onClick={() => { setSearchTerm(""); setSelectedTag("All"); }}>Clear All Filters</button>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
