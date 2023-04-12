// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../config/nodemailer";

type Data = {
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
  const { email, subject, message } = req.body as Data;

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
      to: "laraxlara97@gmail.com",
      from: `${email}`,
      replyTo: email,
      subject: `${subject}`,
      text: message,
      html: `<p>${message}</p>`,
    });

    res.status(200).send({ status: "done", message: "message has been sent" });
  } catch (error) {
    res.status(500).send({ status: "fail", error: `${error}` });
  }
};

export default handler;
