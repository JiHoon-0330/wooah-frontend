import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  try {
    await res.unstable_revalidate(`/${page}`);
    return res.json({ revalidated: true });
  } catch (error) {
    res.status(500);
    return res.json({ revalidated: false });
  }
};
