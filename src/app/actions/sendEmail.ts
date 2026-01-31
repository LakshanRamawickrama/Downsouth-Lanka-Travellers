"use server";

import nodemailer from 'nodemailer';

export async function sendEmail({
    subject,
    text,
    html
}: {
    subject: string;
    text: string;
    html: string;
}) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Sending it to ourselves
        subject: subject,
        text: text,
        html: html,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}
