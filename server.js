const express =require('express');
const ejs=require('ejs')
const path=require('path')

const app=express();
app.set("view engine","ejs")
app.use(express.static(__dirname+'/public'))

//Part of navigation bar
const nav_categorie=require('./nav_bar_categorie.json');


app.get('/',(req,res)=>{

    
    res.render(path.join(__dirname,'/views/accueil.ejs'),{title:'Welcome' , nav_categorie })
})

app.get('/:myLink',(req,res)=>{

    const myLink =req.params.myLink.toLowerCase();
    console.log(myLink)
    res.locals.switch_css= false;

    if(myLink!='' && myLink !='accueil'){
        res.locals.switch_css= true;
    }
    
    res.render(path.join(__dirname,"/views/"+myLink+".ejs"),{title:myLink , nav_categorie })

})

app.listen(3000)