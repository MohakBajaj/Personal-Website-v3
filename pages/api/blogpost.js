import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function blogpostAPI(req, res) {
    if (req.method === "GET") {
        const post = await prisma.blog.findFirst({
            where: {
                slug: req.query.slug
            }
        })
        if (post === null) {
            res.status(404).json("Not found");
        } else {
            res.status(200).json(post);
        }
    }
    if (req.method === "POST") {
        res.status(200).json("Method not allowed");
    }
}
