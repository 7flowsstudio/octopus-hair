import { Router, Request, Response } from "express";
const router = Router();
router.delete("/:id", (req: Request, res: Response) => {
  res.json({ message: "Deleted" });
});

export default router;
