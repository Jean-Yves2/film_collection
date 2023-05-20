const dataMapper = require('./dataMapper');
//Part of navigation bar
const nav_categorie=require('../nav_bar_categorie.json');

// Pagination
const pagination = require('../utils/pagination')
const filmController = {

    homePage: async (req, res) => {

        const id =parseInt(req.params.id);
        const activePage=id;
        console.log(activePage)
        const limitOnPage = pagination.limitOnPage;
        const offset = (id-1)*10

        const selectAllFilmOnData = await dataMapper.selectAllFilm(limitOnPage,offset);

        const allFilm=selectAllFilmOnData.rows;
        const countAllFilm =parseInt(allFilm[0].total_films);
        const countNumberOfPage = pagination.numberOfPage(countAllFilm);


        try {

            res.render('../views/accueil',{title:'Welcome' , nav_categorie,allFilm,countNumberOfPage, activePage})
        
        } catch (error) {
            console.error(error);
        }
        
    }

}

module.exports = filmController;