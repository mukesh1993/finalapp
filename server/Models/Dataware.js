var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var Dataware=new Schema({
   wave:String,
   name:String,
   email:String,
   phone:String,
   url:String,
   code:String,
   dept:String,
   desn:String,
   comment:String,
   pwd:String,
});
module.exports=mongoose.model('mukesh1',Dataware);//mukesh is collection name
