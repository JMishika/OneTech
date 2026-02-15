"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "L'adresse e-mail n'est pas valide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

export type FormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    success: boolean;
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Veuillez corriger les erreurs.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: process.env.EMAIL_SERVER_PORT === '465',
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"via OneTech" <${process.env.EMAIL_FROM}>`,
    to: "onetech243@gmail.com",
    replyTo: email,
    subject: `Nouveau message de contact de ${name}`,
    text: message,
    html: `
        <p>Vous avez reçu un nouveau message de <strong>${name}</strong> (${email}).</p>
        <p><strong>Message:</strong></p>
        <blockquote style="padding: 12px; border-left: 4px solid #ccc; background-color: #f4f4f4; margin: 0;">${message.replace(/\n/g, '<br>')}</blockquote>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      message: "Merci! Votre message a été envoyé avec succès.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      message: "Une erreur est survenue lors de l'envoi du message. Le serveur de messagerie n'est peut-être pas configuré.",
      success: false,
    };
  }
}
