

const dataMapper = require('../controller/dataMapper');

const pagination = {
    limitOnPage: 10,
    currentPage: 2,
    numberOfPage: async () => {

        const {rows} = await dataMapper.selectAllFilm();
        const totalPage=Math.ceil(rows.length/pagination.limitOnPage)
        
        console.log(totalPage);

    },
    getFilms: async (offset) => {
        const { rows } = await dataMapper.selectByPagination(pagination.limitOnPage, offset);

        return rows;
    },
    nextPage: async () => {
        try {
            
            pagination.currentPage++;
            const offset = (pagination.currentPage - 1) * pagination.limitOnPage;
    
            const allFilm = await pagination.getFilms(offset);
            return allFilm;
            
        } catch (error) {
            console.log(error)
        }
        
    },
    previousPage: async () => {

        try {
            pagination.currentPage--;
        
            const offset = (pagination.currentPage - 1) * pagination.limitOnPage;

            const allFilm = await pagination.getFilms(offset);
            return allFilm;
            
        } catch (error) {
            console.log(error)
        }
      
        

    }



}

pagination.numberOfPage();

module.exports = pagination;





