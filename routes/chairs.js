const express = require('express')
const router = express.Router()
const Chair = require('../models/chair')


router.get("/", async (req,res) => {
    try{
        const chairs = await Chair.find()
        res.json(chairs)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
})


router.get("/:title", getChair, (req,res) => {
    res.json(res.chair)
})


router.post("/",async (req,res) => {
    const chair = new Chair({
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
        const newChair = await chair.save()
        res.status(201).json(newChair)
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.patch("/:title", getChair, async(req,res) => {
    if(req.body.title != null){
        res.chair.title = req.body.title
    }
    if(req.body.description != null){
        res.chair.description = req.body.description
    }
    if(req.body.dimension != null){
        res.chair.dimension = req.body.dimension
    }
    if(req.body.width != null){
        res.chair.width = req.body.width
    }
    if(req.body.depth != null){
        res.chair.depth = req.body.depth
    }
    if(req.body.height != null){
        res.chair.height = req.body.height
    }
    if(req.body.image_url != null){
        res.chair.image_url = req.body.image_url
    }
    if(req.body.model_url != null){
        res.chair.model_url = req.body.model_url
    }
    if(req.body.category != null){
        res.chair.category = req.body.category
    }
    if(req.body.price != null){
        res.chair.price = req.body.price
    }
    if(req.body.currency != null){
        res.chair.currency = req.body.currency
    }
    if(req.body.rating != null){
        res.chair.rating = req.body.rating
    }
    if(req.body.created_at != null){
        res.chair.created_at = req.body.created_at
    }

    try{
        const updatedChair = await res.chair.save()
        res.json(updatedChair)

    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.delete("/:title", getChair, async(req, res) => {
    try {
      await res.chair.deleteOne()
      res.json({ message: "Deleted Product" })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  
  
  
  
async function getChair(req, res, next) {
    let chair
    try {
      chair = await Chair.findOne({ title: req.params.title })
      if (!chair) {
        return res.status(404).json({ message: "Cannot find product" })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  
    res.chair = chair
    next()
  }
  

  
  

  module.exports = router

/*const express = require('express')
const router = express.Router()
const Chair = require('../models/chair')


// Getting all
router.get('/',  async(req,res) => {
    try {
        const chairs = await Chair.find()
        res.json(chairs)
    }
    catch(err){

        res.status(500).json({message : err.message})
    }
})
// Getting one
router.get('/:id', (req,res) => {
    res.send(req.params.id)
})



// Creating one
router.post('/', async (req,res) => {
    const chair = new Chair({
        title : req.body.title,
        description : req.body.description,
        width : req.body.width,
        depth : req.body.depth,
        height : req.body.height,
        image_url : req.body.image_url,
        category : req.body.category,
        price : req.body.price,
        currency : req.body.currency,
        rating : req.body.rating,
        created_at : req.body.created_at,
    })
    try{
        const newChair = await  chair.save()
        res.status(201).json(newChair)
    }
    catch (err){
        res.status(400).json({message : err.message})
    }
})

// Updateing one
router.patch('/:id', (req,res) => {
    
})

// Delete one
router.delete('/:id', (req,res) => {
    
})


module.exports = router
*/