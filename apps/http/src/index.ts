import express from "express"
import { router } from "./routes/v1"


const app = express()

//using router to structure the apis of specific route in a specific folders
app.use("/api/v1",router)


// passing port numbers form teh env or else use the default ones
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000")
})
