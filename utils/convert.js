const convert= {

    getYearFromDate:(dateString)=>{

        const date = new Date(dateString)
        const year = date.getFullYear();

        return year;
    }
}

module.exports=convert;