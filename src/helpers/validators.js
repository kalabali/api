const getLastDate = (month, year) => {
    let isKabisat = false;
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                isKabisat = true;
            }            
        }
        else{
            isKabisat = true;
        }
    }
    if(isKabisat && month === 2){
        return 29;
    }
    else if(month === 2){
        return 28;
    }
    else if((month > 7 && month % 2 == 0) || (month < 7 && month % 2 == 1)){
        return 31;
    }
    return 30;    
}

const dateChecker = (date, month, year) => {        
    if(typeof(date) !== 'number'){
        return false;
        // throw new Error('expected properties date passed in as number!');
    }
    if(date % 1 !== 0){
        return false;
        // throw new Error('expected properties date passed in as non floating number!');
    }
    if(date <= 0){
        return false;
        // throw new Error('expected properties date passed not as negatif number or zero!');
    }
    const lastDate = getLastDate(month, year);
    if(date > lastDate){
        return false;
        // throw new Error(`${date}/${month}/${year} is not a valid date!`);
    }
    return true;
}

module.exports = {
    dateChecker
}