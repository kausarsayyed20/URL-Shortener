const mongoose = require('mongoose');


const URI="mongodb+srv://User2:"+process.env.PW+"@cluster0.xtqpb.mongodb.net/FCCdb?retryWrites=true&w=majority";

const connectDB=()=>{
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }); 
    console.log('db connected..!');
}

module.exports=connectDB;