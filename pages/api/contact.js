import { PrismaClient } from "@prisma/client";
import { SMTPClient } from 'emailjs';


const prisma = new PrismaClient();

const smtp = "smtp.gmail.com"
const port = 465
const SSL = true
const user = process.env.GMAILUSER
const pass = process.env.GMAILPASSWORD

const mailClient = new SMTPClient({
	user: user,
	password: pass,
	host: smtp,
	ssl: SSL,
    port: port
});

export default async function contactAPI(req, res) {
    if (req.method === "POST") {
        let data = JSON.parse(req.body);
        const savedcontact = await prisma.contact.create({
            data: data
        });
        mailClient.send(
            {
                text: data.message,
                from: user,
                to: user,
                subject: `Message From ${data.name} : ${data.email} Contact Form`,
            },
            (err, message) => {
                null;
            }
        );
        res.status(200).json("success");   
    }
}  
