import mongoose from "mongoose";

const RestaurantSchema= new mongoose.Schema({
    Restaurant:{
        type: String,
        required: false,
        unique:true
    },
    Date:{
        type: String,
        required:false,
    }
});

module.exports= <any>mongoose.models['restaurant1'] || mongoose.model('restaurant1',RestaurantSchema);

