
import { verify } from "jsonwebtoken";


export const validateJwt = (token: string): boolean => {
    try {
        const secret = process.env.JWT_SECRET || "default_secret";
        const decoded = verify(token, secret);
        return !!decoded;
    } catch (error) {
        return false;
    }
};