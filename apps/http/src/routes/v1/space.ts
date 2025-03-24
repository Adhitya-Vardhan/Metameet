
import {Router} from "express"

export const spaceRouter = Router()


spaceRouter.post('/',(req,res)=>{
    res.json({message:"Metadata"})
})


spaceRouter.delete('/:spaceId',(req,res)=>{
    res.json({message:"Metadata"})
})


spaceRouter.get('/:spaceId',(req,res)=>{
    res.json({message:"Metadata"})
})



spaceRouter.get('/',(req,res)=>{
    res.json({message:"Metadata"})
})


spaceRouter.post("/element",(req,res)=>{
    res.json({message:"Metadata"})
})

spaceRouter.delete("/element",(req,res)=>{
    res.json({message:"Metadata"})
})


