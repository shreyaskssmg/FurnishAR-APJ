const express = require('express')
const router = express.Router()
const Sofa = require('../models/sofa')


router.get("/", async (req,res) => {
    try{
        const sofas = await Sofa.find()
        res.json(sofas)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
})


router.get("/:title", getSofa, (req,res) => {
    res.json(res.sofa)
})


router.post("/",async (req,res) => {
    const sofa = new Sofa({
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
        const newSofa = await sofa.save()
        res.status(201).json(newSofa)
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.patch("/:title", getSofa, async(req,res) => {
    if(req.body.title != null){
        res.sofa.title = req.body.title
    }
    if(req.body.description != null){
        res.sofa.description = req.body.description
    }
    if(req.body.dimension != null){
        res.sofa.dimension = req.body.dimension
    }
    if(req.body.width != null){
        res.sofa.width = req.body.width
    }
    if(req.body.depth != null){
        res.sofa.depth = req.body.depth
    }
    if(req.body.height != null){
        res.sofa.height = req.body.height
    }
    if(req.body.image_url != null){
        res.sofa.image_url = req.body.image_url
    }
    if(req.body.model_url != null){
        res.sofa.model_url = req.body.model_url
    }
    if(req.body.category != null){
        res.sofa.category = req.body.category
    }
    if(req.body.price != null){
        res.sofa.price = req.body.price
    }
    if(req.body.currency != null){
        res.sofa.currency = req.body.currency
    }
    if(req.body.rating != null){
        res.sofa.rating = req.body.rating
    }
    if(req.body.created_at != null){
        res.sofa.created_at = req.body.created_at
    }

    try{
        const updatedSofa = await res.sofa.save()
        res.json(updatedSofa)

    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.delete("/:title", getSofa, async(req, res) => {
    try {
      await res.sofa.deleteOne()
      res.json({ message: "Deleted Product" })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  
  
  
  
async function getSofa(req, res, next) {
    let sofa
    try {
      sofa = await Sofa.findOne({ title: req.params.title })
      if (!sofa) {
        return res.status(404).json({ message: "Cannot find product" })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  
    res.sofa = sofa
    next()
  }
  

  
  

  module.exports = router

