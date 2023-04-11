const client = require('../utils/db_config');

const dataMapper = {

    selectAllFilm: async (limitOnPage) => {
        let result;

        if (limitOnPage) {
            result = await client.query(`SELECT * FROM films LIMIT ${limitOnPage}`)

        } else {
            result = await client.query(`SELECT * FROM films `)
        }

        return result;

    },
    selectFilmById: async (id) => {
        
        return await client.query(`SELECT * FROM films WHERE id=$1;`, [id])
    }
}

module.exports = dataMapper;