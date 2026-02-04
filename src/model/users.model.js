const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    },
    dob:{
        type:String,
        required:true

    }  ,
    gender:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default: true
    }
}, {   
    timestamps:true,
    versionKey:false
}) 

const User = mongoose.model('users', usersSchema);

module.exports = User;
