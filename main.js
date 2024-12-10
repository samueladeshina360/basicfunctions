/*
1. function to convert a str type to a list containing
   a array of the individual.
2. funtion to sort an array of integer types.
*/

let split = (strr) => {
    
    if (strr.length < 1){
        return "The string you entered is empty."
    }
    
    var new_list = [];

    for (element in strr){
        new_list.push(strr[element]);
    }

    return new_list
}


let sort_ed = (arr) => {

    if (arr){
        return arr.sort((a,b) => a-b);
    }else{

        return "An error occured with the parameter."
    }
    
}

console.log(split("Samuel"));
console.log(sort_ed([56,54,243,65,75,1,1,4,6,7]));