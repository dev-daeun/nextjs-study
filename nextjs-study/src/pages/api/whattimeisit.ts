import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const currentDate = new Date();
    res.json({time: currentDate.toLocaleString()});

}