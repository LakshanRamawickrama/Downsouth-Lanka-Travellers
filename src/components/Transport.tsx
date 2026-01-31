"use client";

import Image from "next/image";
import styles from "./css/Transport.module.css";
import { Users, Briefcase, Snowflake } from "lucide-react";
import { motion } from "framer-motion";
import { useInquiryModal } from "@/context/InquiryModalContext";

const vehicles = [
    {
        name: "Luxury Mini Van",
        image: "https://images.unsplash.com/photo-1549411989-388a101e4913?q=80&w=1200&auto=format&fit=crop",
        desc: "The ultimate choice for family adventures. Spacious, plush interiors with panoramic windows for viewing the island.",
        capacity: "6-8",
        luggage: "Large",
        ac: true,
        badge: "Most Popular"
    },
    {
        name: "Premium SUV",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
        desc: "Traverse any terrain in absolute luxury. Perfect for couples or small families seeking style and safety.",
        capacity: "3-4",
        luggage: "Medium",
        ac: true,
        badge: "Luxury Choice"
    },
    {
        name: "VIP Tour Coach",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
        desc: "Coordinating large groups? Our VIP coaches offer lounge-style seating and full climate control.",
        capacity: "25-45",
        luggage: "Unlimited",
        ac: true,
        badge: "Group Travel"
    },
    {
        name: "Coastal Tuk-Tuk",
        image: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?q=80&w=1200&auto=format&fit=crop",
        desc: "The heartbeat of Sri Lanka. Experience the warm breeze and vibrant streets in our well-maintained classic three-wheelers.",
        capacity: "2-3",
        luggage: "Small",
        ac: false,
        badge: "Local Experience"
    }
];

export default function Transport() {
    const { openModal } = useInquiryModal();

    return (
        <section id="transport" className={styles.transportSection}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                    <h2 className="section-title">Our Premium Fleet</h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Travel in comfort and style across the island. Every vehicle in our
                        handpicked fleet is meticulously maintained for your safety and relaxation.
                    </p>
                </div>

                <div className={styles.grid}>
                    {vehicles.map((vehicle, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.transportCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image src={vehicle.image} alt={vehicle.name} fill />
                                <div className={styles.badge}>{vehicle.badge}</div>
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.vehicleName}>{vehicle.name}</h3>
                                <p className={styles.vehicleDesc}>{vehicle.desc}</p>

                                <div className={styles.features}>
                                    <span><Users size={18} /> {vehicle.capacity} Seats</span>
                                    <span><Briefcase size={18} /> {vehicle.luggage} Luggage</span>
                                    {vehicle.ac && <span><Snowflake size={18} /> Climate Control</span>}
                                </div>

                                <button className={styles.cta} onClick={openModal}>
                                    Enquire to Book
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
