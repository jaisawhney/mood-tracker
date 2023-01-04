import prisma from "/lib/prisma"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const users = await prisma.user.findMany();

        res.status(200).json(users);
    } else if (req.method === "POST") {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                password: ""
            },
        });
        return res.json(user)
    }
}