"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './css/SuccessPopup.module.css';

interface SuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
    message?: string;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ isOpen, onClose, message }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className={styles.overlay} onClick={onClose}>
                    <motion.div
                        className={styles.successCard}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.iconWrapper}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            >
                                <Check size={40} strokeWidth={3} />
                            </motion.div>
                        </div>
                        <h2 className={styles.title}>Success!</h2>
                        <p className={styles.message}>
                            {message || "Your message has been sent successfully."}
                        </p>
                        <button className={styles.closeBtn} onClick={onClose}>
                            Great!
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SuccessPopup;
