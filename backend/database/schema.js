const mongoose = require("mongoose")
const siteSchema = new mongoose.Schema(
    {
        name: String,
        dis: String,
        img: String,
        catagory:String,
        trending:Boolean,
        brand:String,
        price:String,

    }
)
module.exports = mongoose.model("site", siteSchema)