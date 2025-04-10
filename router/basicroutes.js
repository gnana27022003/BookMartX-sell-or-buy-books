const express=require('express')
const broute=express.Router();
const sellermodel=require('../model/sellermodel')
broute.get('/',async(req,res)=>{
    res.render('homes')
})

broute.get('/who',async(req,res)=>{
    res.render("userorseller")
})


  
broute.get('/contactus',async(req,res)=>{//contact us
  res.render('contactus')
})

broute.get('/profile', (req, res) => {
  if (req.session.user) {
    console.log(req.session.user)
    if (req.session.user.role === 'seller') {
      res.redirect('/sellerprofile');
    } else {
      res.redirect('/buyerprofile');
    }
  } else {
    res.redirect('/who');
  }
});
broute.get('/logout',(req,res)=>{
  res.redirect('/')
})

broute.get('/aboutus',(req,res)=>{
  res.render('aboutus')
})

broute.get('/projects',(req,res)=>{
  res.render('projects')
})

broute.get('/terms',(req,res)=>
{
  res.render('terms')
})
module.exports=broute