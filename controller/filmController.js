const dataMapper = require('./dataMapper');
//Part of navigation bar
const nav_categorie=require('../nav_bar_categorie.json');
const filmController = {

    homePage: async (req, res) => {

        const id =req.params.id
        console.log(id)
        const selectAllFilmOnData = await dataMapper.selectAllFilm();
        const allFilm=selectAllFilmOnData.rows;
        try {
            //res.render('acceuil',{films:allFilm})
            res.render('../views/accueil',{title:'Welcome' , nav_categorie,allFilm })
        } catch (error) {
            console.error(error);
        }
        
    }

}

module.exports = filmController;