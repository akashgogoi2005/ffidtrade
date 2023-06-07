const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});


//create model

const uploads = new mongoose.model("uploads", newSchema)

module.exports = uploads;