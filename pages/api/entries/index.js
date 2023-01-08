import prisma from '/lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const user = await prisma.entry.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        res.status(200).json(user);
    } else if (req.method === 'POST') {
        const body = JSON.parse(req.body);
        const user = await prisma.entry.create({
            data: {
                user: {
                    connect: {
                        id: req.body.userId,
                    },
                },
                mood: body.mood,
                note: body.note?.trim(),
            },
        });
        return res.json(user);
    }
}