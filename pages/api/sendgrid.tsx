import { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  switch (req.method) {
    case "POST":
      try {
        sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

        const { name, email, subject, message } = req.body;

        const msg = {
          to: "admin@rationalnomads.com",
          from: "admin@rationalnomads.com",
          subject,
          text: `${message}\n From: ${name} - ${email}`,
          html: `<p>${message}</p><strong>From: ${name} - ${email}</strong>`,
        };

        await sgMail.send(msg);

        res.status(200).send({});
      } catch (error) {
        console.error(error);
        res.status(500).json({ error });
      }
      break;

    default:
      res.status(403).json({ errorMessage: "Forbidden" });
      break;
  }
};

export default handler;
