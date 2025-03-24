import {Router} from "express"

export const adminRouter = Router()

//the previous apis prefi are /api/v1/admin


adminRouter.post('/element',(req,res)=>{
    res.json({message:"Metadata"})
})

adminRouter.put('/element/:elementId',(req,res)=>{
    res.json({message:"Bulk Metadata"})
})

adminRouter.get('/avatar',(req,res)=>{
    res.json({message:"Bulk Metadata"})
})

adminRouter.get("/map",(req,res)=>{
    res.json({message:"Bulk Metadata"})
})


