const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index')
})
router.get('/skills', (req,res)=>{
    res.render('skills')
})
router.get('/projects', (req,res)=>{
    res.render('projects')
})
router.get('/contact', (req,res)=>{
    res.render('contact')
})

module.exports = router;