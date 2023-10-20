const pagination = {
    limitOnPage: 20,
    numberOfPage: (count_number_page) => {

        const totalPage=Math.ceil(count_number_page/pagination.limitOnPage)
        
        return totalPage;

    },
    nextPage: (activePage ,countNumberOfPage) => {
        try {
            if(activePage==countNumberOfPage){
                return activePage
            }else{activePage++
            return activePage ;
            }
            
            
            
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





