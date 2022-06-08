const site=require("./schema")
const getAll= (req,res)=>{
site.find({},(err,result)=>{
    // const {name,dis}=result
    // console.log(result);
    res.status(200).json(result)
})
}
module.exports={
    getAll
}