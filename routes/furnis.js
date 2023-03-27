const express = require('express')
const router = express.Router()
const Furni = require('../models/furni')


router.get("/", async (req,res) => {
    try{
        const furnis = await Furni.find()
        res.json(furnis)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
})


router.get("/:title", getFurni, (req,res) => {
    res.json(res.furni)
})


router.post("/",async (req,res) => {
    const furni = new Furni({
        title : req.body.title,
        description : req.body.description,
        dimension : req.body.dimension,
        width : req.body.width,
        depth : req.body.depth,
        height : req.body.height,
        image_url : req.body.image_url,
        model_url : req.body.model_url,
        category : req.body.category,
        price : req.body.price,
        currency : req.body.currency,
        rating : req.body.rating,
        created_at : req.body.created_at,

    })

    try{
        const newFurni = await furni.save()
        res.status(201).json(newFurni)
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.patch("/:title", getFurni, async(req,res) => {
    if(req.body.title != null){
        res.furni.title = req.body.title
    }
    if(req.body.description != null){
        res.furni.description = req.body.description
    }
    if(req.body.dimension != null){
        res.furni.dimension = req.body.dimension
    }
    if(req.body.width != null){
        res.furni.width = req.body.width
    }
    if(req.body.depth != null){
        res.furni.depth = req.body.depth
    }
    if(req.body.height != null){
        res.furni.height = req.body.height
    }
    if(req.body.image_url != null){
        res.furni.image_url = req.body.image_url
    }
    if(req.body.model_url != null){
        res.furni.model_url = req.body.model_url
    }
    if(req.body.category != null){
        res.furni.category = req.body.category
    }
    if(req.body.price != null){
        res.furni.price = req.body.price
    }
    if(req.body.currency != null){
        res.furni.currency = req.body.currency
    }
    if(req.body.rating != null){
        res.furni.rating = req.body.rating
    }
    if(req.body.created_at != null){
        res.furni.created_at = req.body.created_at
    }

    try{
        const updatedFurni = await res.furni.save()
        res.json(updatedFurni)

    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.delete("/:title", getFurni, async(req, res) => {
    try {
      await res.furni.deleteOne()
      res.json({ message: "Deleted Product" })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  
  
  
  
async function getFurni(req, res, next) {
    let furni
    try {
      furni = await Furni.findOne({ title: req.params.title })
      if (!furni) {
        return res.status(404).json({ message: "Cannot find product" })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  
    res.furni = furni
    next()
  }
  

  
  

  module.exports = router
