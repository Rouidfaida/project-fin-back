const Product = require("../models/product");
//add product
exports.addProducts = async (req, res) => {

    try {
      const newProduct = await new Product(req.body);
      newProduct.save();
      res.send(newProduct);
    } catch (error) {
      res.status(500).json({errors: error.message});
    }
  };
  //put product
 

  exports.putProduct = async (req, res) => {
    try {
      let newProductEdited= await Product.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
      res.send(newProductEdited)
      
   
  } catch (error) {
      return res.status(500).json({msg: error.message})
  }
    
  };
  //delete product
  exports.deletProduct = async (req, res) => {
    try {
      const newProduct = await Product.findByIdAndDelete(req.params.id);
      res.send({msg: `${newProduct.title} was successfully deleted`});
    } catch (error) {
      res.status(500).json({errors: error.message});
    }
  };
  //get product
  exports.getProduct = async (req, res) => {
    try {
      let listProducts= await Product.find()
      res.send(listProducts)
    } catch (error) {
      res.status(500).json({errors: error.message});
    }
  };
  //get product by id
  exports.getProductById = async (req, res) => {
    try {
      let productn= await Product.findById(req.params.id)
      res.send(productn)
    } catch (error) {
      res.status(500).json({errors: error.message});
    }
  };
  