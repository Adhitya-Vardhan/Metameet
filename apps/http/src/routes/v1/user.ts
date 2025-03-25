import {Router} from "express"
import { userMiddleware } from "../../middleware/user"
import { NextFunction,Response, Request } from "express"
import client from "@repo/db/client"
import { UpdateMetaSchema } from "../../types"

export const userRouter = Router()

userRouter.post('/metadata',userMiddleware, async (req,res)=>{
   const ParsedData = UpdateMetaSchema.safeParse(req.body)
   if(!ParsedData.success){
    res.status(400).json({message:"Validation failed"})
    return
   }

   try{

   await client.user.update({
        where: {
            id: req.userId
        },
        data:{
            avatarId : ParsedData.data.avatarId
        }
    })

    res.json({message:"Avatar Updated"})
    
   }catch(e){
    res.status(400).json({message:"Internal server error"})
   }
   
})

userRouter.get('/metadata/bulk',userMiddleware,async (req,res)=>{
    const userIdstring = (req.query.ids ?? "[]") as string;
    const userIds = (userIdstring).slice(1,userIdstring?.length-2).split(",");

    const metadata= await client.user.findMany({
        where: {
            id: {
                in: userIds
            }
        }, select:{
            avatar: true,
            id: true
        }
    })

    res.json({ avatars: metadata.map(m=>({
        userId: m.id,
        avatarId: m.avatar?.imageUrl
    }))})

})