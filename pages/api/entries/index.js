import prisma from '/lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const [mood_counts, entries] = await prisma.$transaction([
            prisma.entry.groupBy({
                by: ['mood'],
                _count: {
                    mood: true,
                },
                where: {
                    createdAt: {
                        lte: req.query.to,
                        gte: req.query.from,
                    },
                },
            }),
            prisma.entry.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
                where: {
                    createdAt: {
                        lte: req.query.to,
                        gte: req.query.from,
                    },
                },
            }),
        ]);

        const availableMoods = ['GREAT', 'GOOD', 'NEUTRAL', 'BAD', 'SAD'];
        const moods = availableMoods.reduce((acc, mood) => {
            const count = mood_counts.find(count => count.mood === mood);
            acc[mood] = count?._count.mood || 0;
            return acc;
        }, {});

        res.status(200).json({
            mood_count: moods,
            items: entries,
        });
    } else if (req.method === 'POST') {
        const body = JSON.parse(req.body);
        const user = await prisma.entry.create({
            data: {
                user: {
                    connect: {
                        id: process.env.USER_ID, // No auth implemented atm
                    },
                },
                mood: body.mood,
                note: body.note?.trim(),
            },
        });
        return res.json(user);
    }
}