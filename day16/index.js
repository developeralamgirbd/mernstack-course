const MongoClient = require('mongodb').MongoClient;

const URL = "mongodb+srv://alamgir:atlas123@cluster0.pb7kuyb.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(URL, (error, myMongoClient)=>{
    if (error){
        console.log('Connection Fail')
    }else {
        console.log('Connection Success');
        // InsertData(myMongoClient)
    }
});

/**
 * Insert Data in MongoDB
 */
function InsertData(myMongoClient){
    const schoolDB = myMongoClient.db('school');
    const studentsCollection = schoolDB.collection('students');

    const studentData = {
        name: "Alamgir",
        role: "938824",
        class: "Ten",
        city: "Mymensingh"
    };

    // const studentData = [
    //     {
    //         name: "student",
    //         role: "938824",
    //         class: "Ten",
    //         city: "Mymensingh"
    //     },
    //     {
    //         name: "student 2",
    //         role: "938825",
    //         class: "Ten",
    //         city: "Mymensingh"
    //     },
    //     {
    //         name: "student 3",
    //         role: "938826",
    //         class: "Ten",
    //         city: "Mymensingh"
    //     },
    //     {
    //         name: "student 4",
    //         role: "938827",
    //         class: "Ten",
    //         city: "Mymensingh"
    //     },
    //     {
    //         name: "student 5",
    //         role: "938828",
    //         class: "Ten",
    //         city: "Mymensingh"
    //     }
    // ];

    studentsCollection.insertOne(studentData, (error)=>{
        if (error){
            console.log('Data insert fail')
        }else {
            console.log('Data insert success')
        }
    });
}

/**
 * Insert Delete in MongoDB
 */

