const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index',{title: "website"})
})
router.get('/skills', (req,res)=>{
    res.render('skills',{title: "website"})
})
router.get('/projects', (req,res)=>{
    res.render('projects',{title: "website"})
})
router.get('/contact', (req,res)=>{
    res.render('contact',{title: "website"})
})

module.exports = router;