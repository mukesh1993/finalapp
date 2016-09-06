var express = require('express');
var router = express.Router();
var Dataware=require('../Models/Dataware.js');//schema importing
/* GET home page. */
router.get('/',function(req,res)
{
  console.log("inside get");
   Dataware.find(function(err,msg){
     if(err)
     {
       console.log(err);

     }
     else {
       res.json(msg);
     }
   });

});
router.post('/', function(req, res, next)
{
  console.log('Data is here');
console.log(req.body);
     var change = new Dataware(req.body);
    //  change.messageFrom=data.from;//if diff names given mapping have to done
    //  change.messageBody=data.body1;
    //  change.messageSubject=data.subject;
    //  change.messageDate=data.date;
  change.save(function (err) {
       if (err) {
           res.send(err);
       }
       else{
         res.send("data is saved")
          // console.log("Saved to database");
       }


  });

// console.log(req.body.from);
// console.log(req.body.subject);
// console.log(req.body.date);
// console.log(req.body.body1);

});



module.exports = router;
