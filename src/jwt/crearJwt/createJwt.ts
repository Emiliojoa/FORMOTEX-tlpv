import { sign, verify, JwtPayload } from "jsonwebtoken";
import { IUser } from "../../interfaces/user.interface";

export const createJwt = (user: IUser): string => {
    const secret = process.env.JWT_SECRET || "default_secret";
    return sign({ email: user.email, role: user.role }, secret, { expiresIn: '1h' });
};

export const verifyJwt = (token: string): JwtPayload | string => {
    const secret = process.env.JWT_SECRET || "default_secret";
    return verify(token, secret);
}