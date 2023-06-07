const Products = require("./models/productsSchema");
const productsdata = require("./constant/productsdata");
const imagesdata = require("./constant/imagesdata");
const Images = require("./models/imagesSchema");

const DefaultData = async()=>{
    try {

        await Products.deleteMany({});
        await Images.deleteMany({});


        const storeData = await Products.insertMany(productsdata);
        const storeImages = await Images.insertMany(imagesdata);
        console.log(storeData);
        console.log("FFIDTRADE.com" + storeImages);
    } catch (error) {
        console.log("error"+error.message);
    }
}

module.exports = DefaultData;