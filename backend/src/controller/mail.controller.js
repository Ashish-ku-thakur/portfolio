import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";

const currentPath = path.resolve(".");

const envFile =
  process.env.NODE_ENV === "production"
    ? path.join(currentPath, "backend", ".env.production")
    : path.join(currentPath, "backend", ".env.dev");

// const envFile =
  // process.env.NODE_ENV === "production" ? ".env.production" : ".env.dev";

dotenv.config({ path: envFile });

export const sendTheEmail = async (req, res) => {
  const { name, email, message } = req.body.contectData;
  console.log(email);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Gmail SMTP setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // = ashkumar828717@gmail.com
        pass: process.env.PASSKEY, // = App password
      },
    });

    // Email content: sent TO you, FROM your own Gmail, recruiter ke details included
    const mailOptions = {
      from: `Portfolio ${process.env.EMAIL}`,
      to: process.env.EMAIL, // Aapka hi email jahan recruiter ka message milega
      subject: `${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New message from your portfolio website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send email." });
  }
};
