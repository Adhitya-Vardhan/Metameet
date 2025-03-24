import express from "express"
import { router } from "./routes/v1"
import  client  from "@repo/db/client"

const app = express()

//using router to structure the apis of specific route in a specific folders
app.use("/api/v1",router)


// passing port numbers form teh env or else use the default ones
app.listen(process.env.PORT || 3000, () => {
    client.$connect()
    console.log("Server running on port 3000")
})
