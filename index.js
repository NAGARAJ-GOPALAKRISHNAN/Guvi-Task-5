// 1.print odd numbers in the array

const oddNumbers=function(){
let array =[1,2,3,4,5,6,7,8,9,10]
let oddNum=[];
for (let index = 0; index < array.length; index ++) {
   if(array[index]%2 !== 0){
    oddNum.push(array[index])
   }
  
}
console.log(oddNum)
}


// oddNumbers()

// 2. convert all the strings to title caps in string array

const convertfun=function(){
const stringArray=["nagaraj","raja","gopi"]
for (let index = 0; index < stringArray.length; index++) {
    const element = stringArray[index].toUpperCase();
    console.log(element)    
}
}
// convertfun();

// 3.sum of all numbers in the array

const sumArray=function (){
    let array=[1,2,3,4,5,6,7,8,9,10]
    let sum=0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];               
    }
    console.log(sum) 
}

// sumArray()

// 4. Return the prime numbers in the array

let primeNumber=function(value){
    var primos=[]
    for (var i = 2; i <=value; i++) {
        var check = false;
        for (var j = 2; j <= i; j++) 
        {
            if(i%j == 0 && j!=i){
                check=true;
            }
            
        }
        if(check === false){
            primos.push(i)            
        }
        
    }
    return primos;
}
// primeNumber(10)

// 5. Return all the palindromes in an the array

// program to check if the string is palindrome or not


let checkPalindrome=function (string) {
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

//it's palindrome example 
const value = checkPalindrome("madam")
//it's not palindrome example
const values = checkPalindrome("nagaraj");

console.log(value);

// 6. return median of the two arrays

function getMedian(ar1, ar2, n)
{
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
// if (n1 == n2)
//     console.log("Median is "+ getMedian(ar1, ar2, n1));
// else
//     console.log("Doesn't work for arrays of unequal size");


// 7. Remove Duplicates from the array

let removeDuplicates=function () {
let arr = ["raj", "nagaraj", "kumar", 
"kumar", "nagaraj", "raj"];
return arr.filter((item, 
index) => arr.indexOf(item) === index);
}

// console.log(removeDuplicates());

// 8. rotate array in k times

let rotate=function (){
    let array=[1,2,3,4,5,6,7,8,9,10]
    let k =5;
    let after=[]
    for (let index = 0; index < k; index++) {
        after.push(array.pop())              
    }
    array.unshift(after) 
    console.log(array)
}
// rotate();




//---------------------------Using Arrow Function----------------------------------


//1.    print odd numbers in the array using arrow function

const oddNumber=()=>{
    let array =[1,2,3,4,5,6,7,8,9,10]
    let oddNum=[];
    for (let index = 0; index < array.length; index ++) {
       if(array[index]%2 !== 0){
        oddNum.push(array[index])
       }
      
    }
    console.log(oddNum)
    }

// oddNumber()

// 2. convert all the strings to title caps in string array

const convert=()=>{
    const stringArray=["nagaraj","raja","gopi"]
    for (let index = 0; index < stringArray.length; index++) {
        const element = stringArray[index].toUpperCase();
        console.log(element)    
    }
    }

// convert()

// 3.sum of all numbers in the array

const arraySum=()=>{
    let array=[1,2,3,4,5,6,7,8,9,10]
    let sum=0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];               
    }
    console.log(sum) 
}

// arraySum()

// 4. Return the prime numbers in the array

let primeNo=(value)=>{
    var primos=[]
    for (var i = 2; i <=value; i++) {
        var check = false;
        for (var j = 2; j <= i; j++) 
        {
            if(i%j == 0 && j!=i){
                check=true;
            }
            
        }
        if(check === false){
            primos.push(i)            
        }
        
    }
    return primos;
}

// console.log(primeNo(10));

// 5. Return all the palindromes in an the array

// program to check if the string is palindrome or not


const Palindrome=(string)=>{
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

//it's palindrome example 
const check1 = checkPalindrome("madam")
//it's not palindrome example
const check2 = checkPalindrome("nagaraj");

// console.log(check2);