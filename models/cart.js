// let mongoose=require('mongoose')
// let Schema=mongoose.Schema;

// let cartSchema=new Schema({
//     userId: {
//         type: String,
//       },
//       items: [
//         {
//           productId: {
//             type: String,
//           },
//           title: String,
//           quantity: {
//             type: String,
//             required: true,
//             min: [1, 'Quantity can not be less then 1.'],
//           },
//           price: String,
//           bill: {
//             type: Number,
//             required: true,
//           },
//         },
        
//       ],
      
    
//     });
// module.exports=mongoose.model('Cart',cartSchema)