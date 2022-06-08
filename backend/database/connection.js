const mongoose=require("mongoose")
MONGO_URI=`mongodb+srv://ayyanbazil:ayyanbazil123@nodeexpressproject.gb1ff.mongodb.net/?retryWrites=true&w=majority`
const connectDB=async (url)=>{
 await mongoose.connect(MONGO_URI);
    console.log("connected to Database");
}
module.exports=connectDB