

const dataMapper = require('../controller/dataMapper');

const pagination = {
    limitOnPage: 9,
    numberOfPage: (count_number_page) => {

        const totalPage=Math.ceil(count_number_page/pagination.limitOnPage)
        
        return totalPage;

    },
    nextPage: (activePage) => {
        try {

            activePage++
            return activePage ;
            
        } catch (error) {
            console.log(error)
        }
        
    },
    previousPage: (activePage) => {

        try {

            activePage--;
            if(activePage==0)return 1;

            return activePage ;

        } catch (error) {
            console.log(error)
        }
      
        

    }



}

module.exports = pagination;





