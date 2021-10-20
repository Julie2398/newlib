const mongoose=require('mongoose');

//database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.dijvc.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//schema definition
const Schema=mongoose.Schema;

const authSchema=new Schema({

 author:String,
    occupation:String,
    about:String,
    image:String

});

//Model creation

var authdata=mongoose.model('authdata',authSchema);

module.exports=authdata;
