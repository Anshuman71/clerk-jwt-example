import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ message: "error" });
    }
    return res
      .status(200)
      .json({ safehouseKey: "under-the-doormat", message: "success" });
  } catch (err) {
    return res.status(401).json({ message: "error" });
  }
}
