// function arrayPrintArguament(array){
//     array.reverse()
//     return array


// }
// array = arrayPrintArguament([1,2,3,4,5]);
// console.log(array);
//     function createThelephoneNumberArgument(numbers){
//         var format = "xx- xxxxxxx";
//         for (var i=0; i<numbers.length; i++){
//           format = format.replace('x', numbers[i]);
//         }

//         return format;
//       }
// numbers = createThelephoneNumberArgument([0,8,6,7,5,6,7,8,9]);
// console.log(numbers);
// function arrayPrintArguament(array) {
//     var max=0; var chart; var counter=0;
//     for (var i = 0; i < array.length; i++) {

//         for (var j = i + 1; j < array.length; j++) {

//             if(array[i] == array[j]){
//                            }               counter++
        
//         if(counter>max){                                 
           
// }
//            }   }
// }
// array = arrayPrintArguament([1,2,3,4,7,7,9,9,9,9,9]);
// console.log(array);
var stuff =[5,46,53,5,1,5,9];
function getMostAppered(numbersArray){
var temp=0;
var counter;
var mostAppered;
for(var i=0;i<numbersArray.length;i++){
    counter= countNumber(i,numbersArray)
    if(counter>temp){
        temp=counter;
        mostAppered=numbersArray[i]
    }
}
return mostAppered;
}
function countNumber(i,numArray){
var counterT=0;
    for(var j=0;j<numbersArray.length;j++){
        if(numArray[i]==numArray[j]){
            counterT++
        }
    }
return counterT;
}
var stuff =getMostAppered()
console.log(mostAppered);
// function sumUnits(num){
//     var sum=1; var i=1;
//     while (num<sum.length) {
//         sum*=num%10;
//         num=parseInt(num/10);
//         i++

//     }
//     return sum;
// }
// var sum=sumUnits([1*2*3*4]);
// console.log(sum);