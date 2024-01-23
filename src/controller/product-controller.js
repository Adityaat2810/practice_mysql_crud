const express = require('express');
const productService = require('../service/product_service')

const create=async(req,res)=>{
    try{
        const product = await productService.createProduct(req.body);
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
        const product = await productService.updateProduct(req.params.id,req.body);
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

        const product= await productService.deleteProduct(req.params.id);
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

        const product = await productService.getProduct(req.params.id);
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
        const products = await productService.getAllProducts(req.query);
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