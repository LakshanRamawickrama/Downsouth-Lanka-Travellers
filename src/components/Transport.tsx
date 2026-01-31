"use client";

import Image from "next/image";
import styles from "./css/Transport.module.css";
import { Users, Briefcase, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

const vehicles = [
    {
        name: "Luxury Mini Van",
        image: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?q=80&w=600&auto=format&fit=crop",
        desc: "Perfect for families. Comfortable seating for up to 8 passengers.",
        capacity: "6-8",
        luggage: "4-6",
        ac: true
    },
    {
        name: "Premium SUV",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600&auto=format&fit=crop",
        desc: "Ideal for couples or small groups seeking comfort and style.",
        capacity: "3-4",
        luggage: "2-3",
        ac: true
    },
    {
        name: "Tour Coach",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
        desc: "Large coaches for corporate groups and big tour parties.",
        capacity: "25-40",
        luggage: "20+",
        ac: true
    },
    {
        name: "Classic Tuk-Tuk",
        image: "https://images.unsplash.com/photo-1550974825-755176b5de31?q=80&w=600&auto=format&fit=crop",
        desc: "The authentic Sri Lankan experience for short coastal trips.",
        capacity: "2-3",
        luggage: "1-2",
        ac: false
    }
];

export default function Transport() {
    return (
        <section id="transport" className={`${styles.transportSection} section`}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Our Premium Fleet</h2>
                    <p className="section-subtitle" style={{ margin: "0 auto 4rem" }}>
                        Reliable and comfortable transportation for every type of traveler. From luxury vans to authentic tuk-tuks.
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
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image src={vehicle.image} alt={vehicle.name} fill />
                            </div>
                            <h3 className={styles.vehicleName}>{vehicle.name}</h3>
                            <p className={styles.vehicleDesc}>{vehicle.desc}</p>
                            <div className={styles.features}>
                                <span><Users size={16} /> {vehicle.capacity} Seats</span>
                                <span><Briefcase size={16} /> {vehicle.luggage} Bags</span>
                                {vehicle.ac && <span><Snowflake size={16} /> Fully A/C</span>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
