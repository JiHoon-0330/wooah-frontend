import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.unstable_revalidate("/test");
    return res.json({ revalidated: true });
  } catch (error) {
    res.status(500);
    return res.json({ revalidated: false });
  }
};
