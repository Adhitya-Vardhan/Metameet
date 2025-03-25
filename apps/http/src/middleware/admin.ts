
declare global{
    namespace Express {
       export interface Request {
        role?: "Admin" | "User";
            userId: string;
        }
    }
}

//middle ware are used to populate the , request object so it can  be used in other places, to do that
// we need to declare the object globally to override it because the typescript dosent know that we are adding a new property to the request object 


import { NextFunction,Response, Request } from "express"
import jwt from "jsonwebtoken"

const JWT_PASSWORD = process.env.JWT_PASSWORD || "supersecretkey"

export const adminMiddleware = (req : Request , res : Response, next : NextFunction) => {
    const header = req.headers["authorization"];
      const token = header?.split(" ")[1]
    if(!token){
        res.status(401).json({message: "Unauthorized"})
        return
    }
    try {
        const decoded = jwt.verify(token, JWT_PASSWORD)  as {role : string,userId : string}
        if(decoded.role !== "Admin"){
            res.status(401).json({message: "Unauthorized"})
            return
        }
        req.userId = decoded.userId
        next()
    } catch (error) {
        res.status(401).json({message: "Unauthorized"})
    }
}   