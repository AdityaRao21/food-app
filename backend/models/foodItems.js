const mongoose=require("mongoose");

const foodDataSchema=new mongoose.Schema({
    CategoryName:{
        type:String
    },
    name:{
        type:String
    },
    img:{
        type:String
    },
    options:{
        type:Array
    },
    description:{
        type:String
    }
})

const food_items=mongoose.model("food_items",foodDataSchema);

module.exports=food_items;