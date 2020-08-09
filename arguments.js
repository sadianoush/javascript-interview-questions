// function addNumbers(num1, num2){
//      var sum = 0;
//      console.log('double', double);
//     for (let i = 0; i < arguments.length; i++) {
//         const num = arguments[i];
//         sum = sum + num;
        
//     }
   
//     function logInfo(message){
//         console.log(message);
//     }
//     logInfo('good morning');

//     var double = sum * 2;
//     return double;
// }


// var result = addNumbers(3, 5, 8, 15);
// console.log(result);


function getFullName(firstName, lastName){
    console.log(arguments);
    let fullName = '';
    // const result = [...arguments].join(' ')
    for(let i =0; i< arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName + ' ' +  namePart;
    }
    return fullName;
}

const name =getFullName('hanif', 'poribohon');
console.log(name);