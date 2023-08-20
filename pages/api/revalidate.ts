import type { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  const defaultPage = "weverse";
  try {
    revalidatePath(`/${String(page)?.replace(defaultPage, "")}`);
    // await res.unstable_revalidate(`/${String(page)?.replace(defaultPage, "")}`);
    return res.json({ revalidated: true });
  } catch (error) {
    res.status(500);
    return res.json({ revalidated: false });
  }
};
