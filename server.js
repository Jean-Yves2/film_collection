const express =require('express');
const ejs=require('ejs')
const path=require('path')

const app=express();
app.set("view engine","ejs")


app.get('/',(req,res)=>{

    
    res.render(path.join(__dirname,'/views/accueil.ejs'),{title:'Welcome'})
})

app.get('/horreur',(req,res)=>{ 

 
    
    console.log(res.locals.footer)
    res.render(path.join(__dirname,'/views/accueil.ejs'),{title:'Dark side'})
})

app.listen(3000)