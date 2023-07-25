import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";

connectDB()

const server = app.listen(PORT, ()=>{
    console.log(`Server run on port: ${server.address().port}`)
})

