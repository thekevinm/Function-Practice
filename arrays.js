// ---------------------------
// The Arrays You Will Work With
// ---------------------------
function numbers(a,b,c,d,e,f,g,h,i,j,k) {
	return Math.max(a,b,c,d,e,f,g,h,i,j,k);
}
var numbers = [1,12,4,18,9,7,11,3,101,5,6];



function strings(array) {
  var longestWord = "";
  array.forEach(function(strings) {
    if(strings.length > longestWord.length) {
      longestWord = strings;
    }
  });
  return longestWord;
}
var strings = ['this','is','a','collection','of','words'];


var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest numberX
// ---------------------------


// ---------------------------
// 2. Find longest string
// ---------------------------


// ---------------------------
// 3. Find even numbers
// ---------------------------



// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------