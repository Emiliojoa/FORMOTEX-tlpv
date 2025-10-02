import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { userModel } from '../models/userModel';


export const validarJWT = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.token as string;

    if (!token) {
        res.status(400).json({
            msg: 'No tienes permiso para realizar esta acción'
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET || 'SECRET') as { uid: string };

        const user = await userModel.findById(uid);

        if (!user) {
            res.status(404).json({
                msg: 'El usuario no existe'
            });
        }

        //@ts-ignore
        req.user = user;

        next();

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al autenticar'
        })
    }

}
