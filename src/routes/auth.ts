import { Router, Request, Response } from "express";
const router = Router();
router.post("/register", (req: Request, res: Response) => {
  res.json({ message: "Register працює" });
});
router.post("/login", (req: Request, res: Response) => {
  res.json({ message: "Login працює" });
});
export default router;
