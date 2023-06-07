const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
    id:String,
    url:String,
})

const Images = new mongoose.model("images", imagesSchema);

module.exports = Images;