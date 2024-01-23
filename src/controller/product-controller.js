const express = require('express');
const productService = require('../service/product_service')
const ProductService = new productService();

const create=async(req,res)=>{
    try{
        const product = await ProductService.createProduct(req.body);
        console.log(product);
        return res.status(201).json({
           data:product ,
           success:true ,
           message:'successfuly created a product',
           err:{}
        })

   }catch(error){
       console.log(error)
       return res.status(500).json({
           data:{},
           success:false,
           message:'not able to create a product',
           err:error

       })
   }
}

const update =async(req,res)=>{
    try{
        const product = await ProductService.updateProduct(req.params.id,req.body);
        return res.status(201).json({
            data:product,
            success:true,
            message:'sucessfuly updated a product',
            err:{}
        })

    }catch(error){

        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update a product',
            err:error
        })

    }
}

const destroy=async(req,res)=>{
    try{

        const product= await ProductService.deleteProduct(req.params.id);
        return res.status(201).json({
            data:product,
            success:true,
            message:'sucessfuly deleted a product',
            err:{}
        })



    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete a product',
            err:error
        })

    }
}

const get = async(req,res)=>{
    try{

        const product = await ProductService.getProduct(req.params.id);
        return res.status(201).json({
            data:product,
            success:true,
            message:'sucessfully fetched product',
            err:{}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to fetch a product',
            err:error
        })

    }
}

const getAll= async(req,res)=>{
    try{
        console.log(req.query)
        const products = await ProductService.getAllProducts(req.query);
        return res.status(201).json({
            data:products,
            success:true,
            message:"sucessfull fetched all products",
            err:{}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'unable to fetch all products',
            err:error
        })

    }
}


module.exports ={
    create,
    update,
    destroy,
    get,
    getAll
}