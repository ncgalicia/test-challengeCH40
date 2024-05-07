
//expresion regular 
let dnaRegex =  /^[CTAG]+$/;

function isValidDNA(cadena){
    if ( cadena.legth === 0 ){
        return '';
    }if (dnaRegex.test(cadena)) {
        return ("true");
    } else {
        return("false");
    }
} 

isValidDNA("CTAG"); // should return true
isValidDNA("CTXG"); // should return false due to 'X'
isValidDNA("ctag"); // should return false due to lowercase
isValidDNA(""); // should return false for empty string

module.exports = isValidDNA;