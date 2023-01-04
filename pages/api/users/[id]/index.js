import prisma from "/lib/prisma"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const user = await prisma.user.findFirst({
            where: {
                id: req.query.userId,
            },
        });

        res.status(200).json(user);
    }
}