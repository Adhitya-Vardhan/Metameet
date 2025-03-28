import { NextFunction,Response, Request } from "express"
import jwt from "jsonwebtoken"

const JWT_PASSWORD = process.env.JWT_PASSWORD || "supersecretkey"

export const userMiddleware = (req : Request , res : Response, next : NextFunction) => {
    const header = req.headers["authorization"];
      const token = header?.split(" ")[1]
    if(!token){
        res.status(401).json({message: "Unauthorized"})
        return
    }
    try {
        const decoded = jwt.verify(token, JWT_PASSWORD)  as {role : string,userId : string}
        req.userId = decoded.userId
        next()
    } catch (error) {
        res.status(401).json({message: "Unauthorized"})
    }
}   