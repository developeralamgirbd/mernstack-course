const {client} = require('./dbConfig');

const deleteMany = async ()=>{
    try {
        const DB = client.db('shop');
        const products = DB.collection('products');

        const query = {'general.brand': 'Canon'};

       const result = await products.deleteMany(query);
        console.log(`Deleted ${result.deletedCount} documents`)

    }catch (error) {
        console.log(error)
    }finally {
        await client.close()
    }
}

module.exports = { deleteMany }