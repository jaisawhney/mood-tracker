import prisma from '/lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const days = await prisma.entry.findMany({
            where: {
                userId: req.query.userId,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        res.status(200).json(days);
    }
}