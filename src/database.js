import mongoose from "mongoose";

// localhost: 127.0.0.1
// const url = 'mongodb://localhost:27017/cafe-branch' //BD-LOCAL
const url = 'mongodb+srv://TomasBudeguer:KJI5kQLnLz619pLl@cluster0.vjacqdu.mongodb.net/cafe-branch'

mongoose.connect(url)

const connection = mongoose.connection

connection.once('open', ()=>{
    console.log('BD conectada')
})