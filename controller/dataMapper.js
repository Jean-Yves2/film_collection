const client = require('../utils/db_config');

const dataMapper = {
    
    limitOnPage(limit){
        
        if (limit) {
            return limit;
        } else {
            return limit=10;
        }

        
    },
    selectAllFilm: async (limitOnPage) => {
        let result;

        if (limitOnPage) {
            result = await client.query(`SELECT * FROM films LIMIT $1`, [limitOnPage])

        } else {
            result = await client.query(`SELECT * FROM films `)
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