const dataMapper = require('./dataMapper')
//Part of navigation bar
const nav_categorie = require('../nav_bar_categorie.json');

const favorieFilmController = {

    favoris: (req, res) => {
        if (!req.session.favoris) {
            req.session.favoris = []
        }
        let favorisFilm=req.session.favoris
        
        res.render('../views/favoris', { title: 'Favoris', nav_categorie ,favorisFilm})
    },
    addToFavorie: async (req, res) => {
        const id = req.params.id;
        const { rows } = await dataMapper.selectFilmById(id);
        
        if (!req.session.favoris) {
            req.session.favoris = []
        }

        if(!req.session.favoris.find(s=>s.id==id)){
            req.session.favoris.push(rows[0])
        }

        res.redirect('/favoris')

    },deleteToFavorie : (req,res)=>{
        const id = req.params.id;
        req.session.favoris=(!req.session.favoris.filter(s=>s.id==id))

        res.redirect('/favoris')

    }





}

module.exports = favorieFilmController;