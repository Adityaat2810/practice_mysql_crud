const {Product} = require('../models/index')
const productRepository = require('../repository/product-repository')

class productService{

    constructor(){
        this.productRepository= new productRepository();
    }

    async createProduct(data){
        try{

            const product = this.productRepository.createProduct(data)

        }catch(error){
            console.log("something went wrong at service layer");
            throw {error}

        }
    }

    async deleteProduct(productId){
        try{

            const response= await this.productRepository.deleteProduct(productId)
            return response

        }catch(error){
            console.log("something went wrong at service layer");
            throw {error}

        }
    }

    async updateProduct(productId,data){
        try{

            const response = this.productRepository.updateProduct(productId, data);
            return response;

        }catch(error){
            console.log("something went wrong at service layer");
            throw {error}

        }
    }

    async getProduct(productId){
        try{

            const product =await this.productRepository.getProduct(productId);
            return product;

        }catch(error){
            console.log("something went wrong at service layer");
            throw {error}

        }
    }

    async getAllProducts(filter){
        try{

            const products = await this.productRepository.getAllProducts(filter);
            return cities;

        }catch(error){
            console.log("something went wrong at service layer");
            throw {error}
        }
    }

}

module.exports=productService

