const dataMapper = require('./dataMapper');
const nav_categorie = require('../nav_bar_categorie.json');
const pagination = require('../utils/pagination');
const convert= require('../utils/convert');
const film_categories = require('../data/film_categories')

const filmController = {

    homePage: async (req, res) => {

        try {

            const id = parseInt(req.params.id);
            const activePage = id;
            
            const limitOnPage = pagination.limitOnPage;
            const offset = (id - 1) * limitOnPage;

            const selectAllFilmOnData = await dataMapper.selectAllFilm(limitOnPage, offset);

            const allFilm = selectAllFilmOnData.rows;
            const countAllFilm = parseInt(allFilm[0].total_films);
            const countNumberOfPage = pagination.numberOfPage(countAllFilm);

            res.render('../views/accueil', { title: 'FilmVue', nav_categorie, allFilm, activePage, pagination , convert,countNumberOfPage,film_categories});

        } catch (error) {
            console.error(error);
        }

    }

}

module.exports = filmController;