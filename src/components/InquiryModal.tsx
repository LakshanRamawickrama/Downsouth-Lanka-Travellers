"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import styles from './css/InquiryModal.module.css';
import { useInquiryModal } from '@/context/InquiryModalContext';
import { contactConfig } from '@/data/contact';

const InquiryModal: React.FC = () => {
    const { isOpen, closeModal } = useInquiryModal();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'tours',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form Submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
        closeModal();
        setFormData({ name: '', email: '', phone: '', service: 'tours', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={styles.overlay} onClick={closeModal}>
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeBtn} onClick={closeModal}>
                            <X size={20} />
                        </button>

                        <div className={styles.header}>
                            <h2>Send an Inquiry</h2>
                            <p>Fill out the form below and we&apos;ll get back to you.</p>
                        </div>

                        <div className={styles.formContainer}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder={contactConfig.phones[0].value}
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Subject</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="tours">Tour Packages</option>
                                            <option value="transport">Transport Service</option>
                                            <option value="custom">Custom Itinerary</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        placeholder="Tell us about your travel plans..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    <Send size={18} />
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default InquiryModal;
