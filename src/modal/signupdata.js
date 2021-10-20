const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.dijvc.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//schema definition
const Schema=mongoose.Schema;

const LoginSchema=new Schema({

    fname:String,
    lname:String,
    cnum:Number,
    mail:String,
    password:String,
    repassword:String


});

//Model creation

var Logindata=mongoose.model('logindata',LoginSchema);

module.exports=Logindata;