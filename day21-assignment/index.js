const MongoClient = require('mongodb').MongoClient;
const URL = "mongodb://localhost:27017";
const config = {useUnifiedTopology: true};
MongoClient.connect(URL, config, (error,MyMongoClient )=>{
    if (error){
        console.log('Database Connection Fail');
    }else {
        console.log('Database Connection Success');
        // insertOneItem(MyMongoClient);
        // insertManyItem(MyMongoClient);
        // findAllProducts(MyMongoClient);
        // findOneItemWithoutCondition(MyMongoClient);
        // findOneItemWithCondition(MyMongoClient);
        // findAllDataByQuery(MyMongoClient);
        // findAllDataByProjection(MyMongoClient);
        // findAllDataByLimit(MyMongoClient);
        // findAllDataBySort(MyMongoClient);
        // update(MyMongoClient);
        // deleteOneItem(MyMongoClient);
        // deleteAllItem(MyMongoClient);
        // createCollection(MyMongoClient);
        // deleteCollection(MyMongoClient);
    }
})

function DBConnection(MyMongoClient){
    const DB = MyMongoClient.db('shop');
    return DB.collection('products');
}
/**
* Insert One Data
*/
function insertOneItem(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);
    const product = {
        'name': 'Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens  (Black)',
        'regularPrice': '60,995',
        'specialPrice': '53,890',
        'warranty': '2 Year Warranty',
        'general': {
            'brand': 'Canon',
            'modelNo': 'EOS M50 Mark II',
            'brandColor': 'Black',
            'effectivePixels': '24.1 MP',
            'wifi': 'Yes',
        },
        'sensorFeatures':{
            'sensorType': 'CMOS',
            'imageSensorSize': '22.3 x 14.9',
        },
        'viewFinderFeatures': {
            'viewFinder': 'Yes',
            'viewFinderType': 'OLED'
        }
    }

    productsCollection.insertOne(product, (error)=>{
        if (error){
            console.log('Data Insert Fail')
        }else {
            console.log('Data Insert Success')
        }
    })
}
/**
 * Insert Multiple Data
 */
function insertManyItem(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    const products = [
            {
            'name': 'NIKON Z 50 Mirrorless Camera Body with 16-50mm Lens  (Black)',
            'regularPrice': '85,995',
            'specialPrice': '75,399',
            'warranty': '2 Year Warranty',
            'image': 'https://rukminim1.flixcart.com/image/416/416/k5o7r0w0/dslr-camera/z/h/4/z-50-z-50-nikon-original-imafzasjeyewfhwy.jpeg?q=70',
            'general': {
                'brand': 'NIKON',
                'modelNo': 'Z 50',
                'brandColor': 'Black',
                'type': 'Mirrorless',
                'effectivePixels': '20.9 MP',
                'wifi': 'Yes',
            },
            'sensorFeatures':{
                'sensorType': 'CMOS',
                'imageSensorSize': '23.5 x 15.7 mm',
            },
            'viewFinderFeatures': {
                'viewFinder': 'Yes',
                'viewFinderType': 'OLED'
            }
        },
        {
            'name': 'Canon EOS 200D II DSLR Camera EF-S18-55mm IS STM  (Black)',
            'regularPrice': '61,995',
            'specialPrice': '54,390',
            'warranty': '2 Year Warranty',
            'image': 'https://rukminim1.flixcart.com/image/416/416/juwzf680/dslr-camera/g/a/q/200d-ii-200d-ii-canon-original-imaffvrhzyqzayys.jpeg?q=70',
            'general': {
                'brand': 'Canon',
                'modelNo': 'EOS 200D II',
                'brandColor': 'Black',
                'type': 'DSLR',
                'effectivePixels': '24.1 MP',
                'wifi': 'Yes',
            },
            'sensorFeatures':{
                'sensorType': 'CMOS',
                'imageSensorSize': '22.3 x 14.9',
            },
            'viewFinderFeatures': {
                'viewFinder': 'Yes',
                'viewFinderType': 'OLED'
            }
        },
        {
            'name': 'Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)',
            'regularPrice': '41,995',
            'specialPrice': '36,390',
            'warranty': '2 Year Warranty',
            'image': 'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/dslr-camera/s/q/k/eos-1500d-canon-original-imafzfughbzn7tmg.jpeg?q=70',
            'general': {
                'brand': 'Canon',
                'modelNo': '1500D',
                'brandColor': 'Black',
                'type': 'DSLR',
                'effectivePixels': '24.1 MP',
                'wifi': 'Yes',
            },
            'sensorFeatures':{
                'sensorType': 'CMOS',
                'imageSensorSize': '22.3 x 14.9 mm',
            },
            'viewFinderFeatures': {
                'viewFinder': 'Yes',
                'viewFinderType': 'OLED'
            }
        },
    ];

    productsCollection.insertMany(products, (error)=>{
        if (error){
            console.log('Many Data Insert Fail')
        }else {
            console.log('Many Data Insert Success')
        }
    })
}
/**
 * Find All Data
 */
function findAllProducts(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    productsCollection.find().toArray((error, data)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(data)
        }
    })
}
/**
 * Find One Data without condition. This method give first data in products Collection
 */
function findOneItemWithoutCondition(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    const findObj = {};
    productsCollection.findOne(findObj, (error, data)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(data)
        }
    })
}
/**
 * Find One Data with condition. This method give us specific first data in collection that's we provide in condition
 */
function findOneItemWithCondition(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    const findObj = {"general.brand": "Canon", 'general.modelNo': 'EOS 200D II'};
    productsCollection.findOne(findObj, (error, data)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(data)
        }
    })
}
/**
 * Find Many Data with query. This method give us specific many data in collection that's we provide in query condition
 */
function findAllDataByQuery(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    const query = {"general.brand": "Canon"};
    productsCollection.find(query).toArray((error, data)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(data)
        }
    })
}

/**
 * Find all data by projection. This method give us specific many data in collection that's we provide in projection condition
 */
function findAllDataByProjection(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    const findObj = {};
    const findProjection = {projection: {name:1, regularPrice: 1, specialPrice: 1, 'general.brand': 1, 'general.modelNo': 1}}
    productsCollection.find(findObj, findProjection).toArray((error, data)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(data)
        }
    })
}

/**
 * Find all data by limit. This method give us specific limit data in collection (this is always show Ascending order from the beginning) that's we provide in limit method
 */
function findAllDataByLimit(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    productsCollection.find().limit(2).toArray((error, data)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(data)
        }
    })
}

/**
 * Find all data by sort. This method give us all data in collection (Ascending or Descending Order) that's we provide in sort (key: 1 or key: -1) method
 */
function findAllDataBySort(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    const sortPattern = {specialPrice: 1}; //Ascending Order
    // const sortPattern = {specialPrice: -1}; //Descending Order
    productsCollection.find().sort(sortPattern).toArray((error, data)=>{
        if (error){
            console.log('Data not found')
        }else {
            console.log(data)
        }
    })
}
/**
 * Update Data
 */
function update(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    const query = {'general.brand': 'Canon', 'general.modelNo': '1500D'};
    const updateValues = {$set: {specialPrice: '34,000', warranty: '3 Year Warranty'}};

    productsCollection.updateOne(query, updateValues, (error, result)=>{
        if (error){
            console.log('Update Fail')
        }else {
            console.log(result)
        }
    })
}

/**
 * Delete One Item Data
 */
function deleteOneItem(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    const query = {'general.brand': 'Canon', 'general.modelNo': 'EOS 200D II'}

    productsCollection.deleteOne(query, (error, result)=>{
        if (error){
            console.log('Data Delete Fail')
        }else {
            console.log(`${result.deletedCount} Data deleted`)
        }
    })
}
/**
 * Delete All Item
 */
function deleteAllItem(MyMongoClient){
    const productsCollection = DBConnection(MyMongoClient);

    productsCollection.deleteMany((error, resultObj)=>{
        if (error){
            console.log('Data Delete Fail')
        }else {
            console.log(`Total deleted data: ${resultObj.deletedCount}`);
        }
    })
}

/**
 * Create Collection
 */
function createCollection(MyMongoClient){
    const DB = MyMongoClient.db('shop');

    DB.createCollection('brands', (error, result)=>{
        if (error){
            console.log('Collection Create Fail')
        }else {
            console.log(result)
        }
    })
}

/**
 * Delete Collection
 */
function deleteCollection(MyMongoClient){
    const DB = MyMongoClient.db('shop');

    DB.dropCollection('brands', (error, result)=>{
        if (error){
            console.log('Collection Delete Fail')
        }else {
            console.log(result)
        }
    })
}

