export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
        res.status(200).json({msg: "It worked!"});
    } else {
        res.status(200).json({});
    }
}
