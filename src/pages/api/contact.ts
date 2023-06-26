// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../config/nodemailer";

type Data = {
  name: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { name, surname, email, subject, message } = req.body as Data;

  if (req.method !== "POST") {
    return res.status(404).send({ status: "fail", error: "Begone." });
  }

  try {
    if (!subject || !subject.trim()) {
      throw new Error("Please provide a valid name.");
    }

    if (!email || !email.trim()) {
      throw new Error("Please provide a valid email address.");
    }

    if (!message || !message.trim()) {
      throw new Error("Please provide a valid email message.");
    }

    await transporter.sendMail({
      to: "utopia.climbingcommunity@gmail.com",
      from: `${email}`,
      replyTo: email,
      subject: `Utopia Climbing Community: ${subject}`,
      text: message,
      html: `
      <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
      <div style="max-width: 700px; background-color: white; margin: 0 auto">
        <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
        
        </div>
        <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
          <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
            Utopia Climbing Community - Contact Form
          </p>
          <div style="font-size: .8rem; margin: 0 30px">
          <p>Name: <b>${name}</b></p>
          <p>Surname: <b>${surname}</b></p>
          <p>Subject: <b>${subject}</b></p>
            <p>Email: <b>${email}</b></p>
            <p>Message: <i>${message}</i></p>
          </div>
        </div>
      </div>
    </div>
      `,
    });

    res.status(200).send({ status: "done", message: "message has been sent" });
  } catch (error) {
    res.status(500).send({ status: "fail" });
  }
};

export default handler;
