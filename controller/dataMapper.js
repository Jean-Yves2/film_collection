const client = require('../utils/db_config');

const dataMapper = {
    
    selectAllFilm: async (limitOnPage,offset) => {
        let result;

        if (limitOnPage) {
            result = await client.query(`SELECT * , (
                SELECT COUNT(*) 
                FROM films
            ) AS total_films FROM films limit $1 OFFSET $2`, [limitOnPage,offset])

        } else {
            result = await client.query(`SELECT * , (
                SELECT COUNT(*) 
                FROM films
            ) AS total_films FROM films limit 10 OFFSET $1`,[offset])
           // result = await client.query(`SELECT * , COUNT(*) OVER() AS total_film FROM films `)
        }

        return result;

    },
    selectFilmById: async (id) => {
        
        return await client.query(`SELECT * FROM films WHERE id=$1;`, [id])
    },
    selectByPagination: async (limitOnPage,offset)=>{
        return await client.query(`SELECT * FROM films LIMIT $1 OFFSET $2`, [limitOnPage,offset])
    }
}

module.exports = dataMapper;