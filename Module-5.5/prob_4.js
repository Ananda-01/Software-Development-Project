// remove duplicate value from the array

// function removeDuplicate(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(removeDuplicate([1, 2, 4, 4,5,5,1, 10]));



// check palindrome

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam'));

