// const Cart = require("../models/cart");
// const Product = require("../models/product");

// let jwt = require("jsonwebtoken");
// let config = require("config");
// const User = require("../models/user");
// let secret = config.get("secret");

// exports.addProductCart=async(req,res)=>{
//   let token = req.headers.authorization;
//   let decoded = jwt.verify(token, secret);
//   let user = await User.findById(decoded.id);
//   let userID = user.id;
//   try {
//     let theOrder = req.body;
//     let anItems=[]
//     for (let i = 0; i < theOrder.order.length; i++) {
//       anItems.push({
//         itemId:theOrder.order[i].id,
//         itemTitle:theOrder.order[i].title,
//         itemQuantity:theOrder.order[i].quantity,
//         itemPrice:theOrder.order[i].price,
//         bill:theOrder.order[i].bill
//       });
//     }
//     // console.log(userID)
//     let newOrder = new Order({
//       userId:userID,
//       items:anItems,
//     });
//     newOrder.save();
//     res.send(newOrder);
//   } catch (error) {
//     console.log(error.message);
//   }
// };