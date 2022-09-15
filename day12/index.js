const MongoClient = require('mongodb').MongoClient;
const URL = "mongodb+srv://alamgir:Azalamgir2658430@cluster0.pb7kuyb.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(URL, (error)=>{
    if (error){
        console.log('Connection Fail')
    }else {
        console.log('Connection Success')
    }
})