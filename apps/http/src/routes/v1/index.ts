 import {Router} from "express"
  import {userRouter} from "./user"
  import {spaceRouter} from "./space"
  import {adminRouter} from "./admin"

 export const router = Router();


router.use("/user",userRouter)
router.use("/space",spaceRouter)
router.use("/admin",adminRouter)



 router.post("/singin",(req,res)=>{
    res.json({message:"Login"})

 })

 router.post("/singup",(req,res)=>{
    res.json({message:"Register"})
 })


 router.get('/elements',(req,res)=>{
    res.json({message:"Elements"})
 })

 router.get('/avatas',(req,res)=>{
    res.json({message:"Avatas"})
 })
 