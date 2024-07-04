const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://sakshamthakur157:010101@cluster0.dkbufqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;
