import prisma from "/lib/prisma"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const days = await prisma.day.findMany({
            where: {
                userId: req.query.userId
            }
        });

        res.status(200).json(days);
    }
}