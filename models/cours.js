const mongo=require('mongoose')
const schema=mongo.Schema
const Cours=new schema({
    coursname:String,

})
module.exports=mongo.model('cours',Cours)