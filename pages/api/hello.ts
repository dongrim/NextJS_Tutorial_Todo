import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string
  weight?: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  // res.status(200).json({ name: "John Doe" });
  res.send([{ weight: 120 }, { name: "Joe" }]);
}
