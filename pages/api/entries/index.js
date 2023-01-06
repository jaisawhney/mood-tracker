import prisma from "/lib/prisma"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const user = await prisma.entry.findMany();

        res.status(200).json(user);
    } else if (req.method === "POST") {
        const user = await prisma.entry.create({
            data: {
                user: {
                    connect: {
                        id: req.body.userId
                    }
                },
                mood: req.body.mood,
                note: req.body.note
            },
        });
        return res.json(user)
    }
}