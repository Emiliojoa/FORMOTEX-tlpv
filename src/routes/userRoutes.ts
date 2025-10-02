import { Router } from "express";
import { createUser, loginUser } from "../controllers/userControllers";
import { validar } from "../middleware/validation";
export const userRoute = Router();

userRoute.post("/api/register", createUser)
userRoute.post("/api/login", loginUser)
// Ruta protegida de ejemplo
userRoute.get("/api/protegida", validar)
// userRoute.get("/api/auth",validar, authUser)
// userRoute.get("/api/logout", logoutUser)

