const express =require('express');
const path=require('path')

const filmController=require('../controller/filmController')
const favorieFilmController=require('../controller/favorieFilmController')

const router = express.Router();

/*Accueil*/
router.get(['/','/accueil'],(_req,res)=>{
    res.redirect('/accueil/page/1')
})

router.get('/accueil/page/:id',filmController.homePage)


router.get('/favoris',favorieFilmController.favoris)

router.get('/favoris/add/:id',favorieFilmController.addToFavorie)
router.get('/favoris/delete/:id',favorieFilmController.deleteToFavorie)



module.exports=router;
