import Jwt from "jsonwebtoken";

export const generarJWT = (userId: string, email: string, role: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        Jwt.sign(
            { userId, email, role },
            process.env.SECRET || "SECRET",
            {
                expiresIn: 60 * 60 * 24,
            },
            (err, token) => {
                return err ? reject(err) : resolve(token as string);
            }
        );
    });
}
;