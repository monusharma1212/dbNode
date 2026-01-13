const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    description:{
        type:String
    },
    parent_id:{
        type:mongoose.Types.ObjectId,
        ref: "categories",
        default: null
    },
    category_img:{
        type:String
    },  
    isActive:{
        type:Boolean,
        default: true
    }
}, {
    timestamps:true,
    versionKey:false
}) 

const Category = mongoose.model('categories', categoriesSchema);

module.exports = Category;
