import prisma from "/lib/prisma"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const user = await prisma.day.findMany();

        res.status(200).json(user);
    } else if (req.method === "POST") {
        const user = await prisma.day.create({
            data: {
                user: {
                    connect: {
                        id: req.body.userId
                    }
                },
                mood: req.body.mood,
            },
        });
        return res.json(user)
    }
}