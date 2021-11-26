let mongoose=require('mongoose')
let Schema=mongoose.Schema


let productSchema=new Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      imageUrl: String,
    
      price: {
        type: String,
        required: true,
      },
      category:{
          type:String,
          required:true
      },
      quantity: {
        type: String,
        required: true,
      },
      date_product: {
        type: Date,
        default: Date.now,
      },
})
module.exports=mongoose.model('Product',productSchema)