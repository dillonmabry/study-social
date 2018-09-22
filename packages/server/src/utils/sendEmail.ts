import * as nodemailer from 'nodemailer';

export const sendEmail = async (
  recipient: string,
  url: string,
  subject: string,
  message: string) => {

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASS
      },
      tls: { rejectUnauthorized: false }
    });
    
    let mailMessage = {
      from: 'Sender Name <rapid.dev.solutions@gmail.com>',
      to: `Recipient<${recipient}>`,
      subject: subject,
      text: '',
      html: `<html>
              <body>
              <a href="${url}">${message}</a>
              </body>
            </html>`
    };
    
    transporter.sendMail(mailMessage, (err, info) => {
      if (err) {
        console.log('Error occurred via Nodemailer: ' + err.message);
      }
      console.log('Message sent via Nodemailer: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL from Nodemailer: %s', nodemailer.getTestMessageUrl(info));
    });
};