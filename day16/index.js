const MongoClient = require('mongodb').MongoClient;
const URL = "mongodb://localhost:27017";

MongoClient.connect(URL, (error, myMongoClient)=>{
    if (error){
        console.log('Connection Fail')
    }else {
        console.log('Connection Success');
        // insertData(myMongoClient)
        // deleteOne(myMongoClient)
        // deleteAll(myMongoClient)
        // findOne(myMongoClient)
        // findAll(myMongoClient)
        // findAllDataByProjection(myMongoClient)
        // findAllDataByQuery(myMongoClient)
        // findDataByLimit(myMongoClient)
        findDataBySort(myMongoClient)
    }
})





function insertData(myMongoClient){
    const blogDB = myMongoClient.db('blog');
    const postsCollection = blogDB.collection('posts');
    //
    // const postData =
    //     {
    //         title: "Post 4",
    //         body: "body of post 4",
    //         category: "Mobile",
    //         view: "60",
    //         tags: ['samsung', 'samphony'],
    //         date: Date()
    //     };

    const postData = [
    {
        title: "Post 1",
        body: "body of post 1",
        category: "Mobile",
        view: "60",
        tags: ['samsung', 'samphony'],
        date: Date()
    },
    {
        title: "Post 2",
        body: "body of post 2",
        category: "Mobile",
        view: "60",
        tags: ['samsung', 'samphony'],
        date: Date()
    },
    {
        title: "Post 3",
        body: "body of post 3",
        category: "Mobile",
        view: "60",
        tags: ['samsung', 'samphony'],
        date: Date()
    },
    {
        title: "Post 4",
        body: "body of post 4",
        category: "Mobile",
        view: "60",
        tags: ['samsung', 'samphony'],
        date: Date()
    },
    {
        title: "Post 5",
        body: "body of post 5",
        category: "Mobile",
        view: "60",
        tags: ['samsung', 'samphony'],
        date: Date()
    }
];


    postsCollection.insertMany(postData, (error)=>{
        if (error){
            console.log('Data insert fail')
        }else {
            console.log('Data insert success')
        }
    })
}

function deleteOne(myMongoClient) {
    const blogDB = myMongoClient.db('blog');
    const postCollection = blogDB.collection('posts');
    const deleteData = {title: 'Post 3'};
    postCollection.deleteOne(deleteData, (error)=>{
        if (error){
            console.log('Data Delete Fail')
        }else{
            console.log('Data Delete Success')
        }
    })
}

function deleteAll(myMongoClient){
    const blogDB = myMongoClient.db('blog');
    const posts = blogDB.collection('posts');

    posts.deleteMany((error, result)=>{
        if (error){
            console.log('Data delete fail')
        }else {
            console.log(result.deletedCount)
        }
    })
}

function findOne(myMongoClient){
    const blogDB = myMongoClient.db('blog');
    const posts = blogDB.collection('posts');

    const findData = {title: 'Post 4'}

    posts.findOne(findData, (error, result)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(result)
        }
    })
}

function findAll(myMongoClient){
    const blogDB = myMongoClient.db('blog');
    const posts  = blogDB.collection('posts');

    posts.find().toArray((error, result)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(result)
        }
    })
}


function findAllDataByProjection(myMongoClient) {
    const blogDB = myMongoClient.db('blog');
    const posts = blogDB.collection('posts');

    const itemObj = {};
    const itemProjection = {projection: {title: 1, view: 1}}

    posts.find(itemObj, itemProjection).toArray((error, result) =>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(result)
        }
    })
}

function findAllDataByQuery(myMongoClient) {
    const blogDB = myMongoClient.db('blog');
    const posts  = blogDB.collection('posts');

    const query = {title: 'Post 3', body: 'body of post 5'}

    posts.find(query).toArray((error, result)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(result)
        }
    })
}


function findDataByLimit(myMongoClient) {
    const blogDB = myMongoClient.db('blog');
    const posts  = blogDB.collection('posts');

    posts.find().limit(2).toArray((error, result)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(result)
        }
    })
}

function findDataBySort(myMongoClient) {
    const blogDB = myMongoClient.db('blog');
    const posts  = blogDB.collection('posts');

    const sortPattern = {title: 1}

    posts.find().sort(sortPattern).toArray((error, result)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(result)
        }
    })
}




