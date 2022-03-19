import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const key = process.env.MASTERKEY;
export default async function blogAPI(req, res) {
    if (req.method === "POST") {
        if (req.body == "") {
            res.status(200).json("Data can not be empty")
        } else {
            let data = JSON.parse(req.body);
            if (data.key == key) {
                let blogData = {
                    slug: data.slug,
                    title: data.title,
                    metadesc: data.metadesc,
                    content: data.content,
                }
                const savedblog = await prisma.blog.create({
                    data: blogData
                });
                res.status(200).json("success");
            } else {
                res.status(401).json("Invalid key")
            }
        }
    }
    if (req.method === "GET") {
        if (req.query.limit) {
            const blogs = await prisma.blog.findMany({
                orderBy: [{
                    id: "desc"
                }],
                take: parseInt(req.query.limit)
            });
            res.status(200).json(blogs);
        } else {
            const blog = await prisma.blog.findMany(
                {
                    orderBy: [{ id: "desc" }]
                }
            );
            res.status(200).json(blog);
        }
    }
    if (req.method === "DELETE") {
        if (req.query.key == key) {
            const blog = await prisma.blog.deleteMany({
                where: {
                    slug: req.query.slug
                }
            });
            res.status(200).json("success");
        } else {
            res.status(401).json("Invalid key")
        }
    }
}
