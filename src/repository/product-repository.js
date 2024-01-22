const { toDefaultValue } = require('sequelize/types/utils');
const {Product} = require('../models/index')
const {Op} =require('sequelize')

class productRepository{

    async createProduct({name,image_url,description, price}){

        try{
            const product= await Product.create({
                name:name,
                image_url:image_url,
                description:description,
                price:price
            })
        }catch(error){
            
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
      

    }

    async deleteProduct({productId}){

        try{
            await Product.destroy({
                where:{
                    id:productId
                }
            })
            return true;

        }catch(error){
            
            console.log('Something went wrong in the repository layer');
            throw {error};
        }

      

    }

    async updateCity({productId,data}){

        try{
            const product = await Product.findByPk(productId);
            product.name =data.name;
            product.image_url=data.image_url;
            product.description=data.description;
            product.price=data.price;
    
            await product.save();
    

        }catch(error){
           
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
       
    }


    async getProduct(productId){
        try{
            const product = await Product.findByPk(cityId);
            return product;
        }catch(error){
    
            console.log('Something went wrong in the repository layer');
            throw {error};
    
        }
    
       }

    async getAllProducts(filter){

        try{


        console.log(filter);
        if (filter.name) {
            const products = await Product.findAll({
                where: {
                    name: {
                        [Op.startsWith]: filter.name,
                    }
                }
            })
            return products;
        }

        const products = await Product.findAll();
        return products;

        }catch(error){

        console.log('Something went wrong in the repository layer');
        throw {error};


        }

        



    }

}

module.exports = productRepository;