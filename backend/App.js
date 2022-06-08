const express=require("express")
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())
const site=require('./database/routes')
const connectDB=require("./database/connection")
app.use("/",site)
  


app.listen("8000",()=>{
    console.log("server is running on port 8000");
})
connectDB()