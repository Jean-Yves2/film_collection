const dataMapper = require('./dataMapper');
//Part of navigation bar
const nav_categorie = require('../nav_bar_categorie.json');

// Pagination
const pagination = require('../utils/pagination')
const filmController = {

    homePage: async (req, res) => {

        try {

            const id = parseInt(req.params.id);
            const activePage = id;
            
            const limitOnPage = pagination.limitOnPage;
            const offset = (id - 1) * 10

            const selectAllFilmOnData = await dataMapper.selectAllFilm(limitOnPage, offset);

            const allFilm = selectAllFilmOnData.rows;
            const countAllFilm = parseInt(allFilm[0].total_films);
            const countNumberOfPage = pagination.numberOfPage(countAllFilm);

            res.render('../views/accueil', { title: 'Welcome', nav_categorie, allFilm, countNumberOfPage, activePage, pagination })

        } catch (error) {
            console.error(error);
        }

    }

}

module.exports = filmController;