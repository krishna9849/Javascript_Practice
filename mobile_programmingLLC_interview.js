/*


Q1:- Input var pattern =abba ; var s= dog cat cat dog
Output return true

Input var pattern =aaaa ; var s= dog cat cat dog
Output return false

Input var pattern =abba ; var s= dog dog cat dog
Output return false
Divyansh Sharma2:48 PM
function wordPattern(pattern, s) {
  const patternArray = pattern.split('');
  const words = s.split(' ');
  if (patternArray.length !== words.length) {
    return false;
  }
  const patternToWord = {};
  const wordToPattern = {};
  for (let i = 0; i < patternArray.length; i++) {
    const currentPattern = patternArray[i];
    const currentWord = words[i];
    if (!patternToWord[currentPattern]) {
      patternToWord[currentPattern] = currentWord;
    }
if (!wordToPattern[currentWord]) {
      wordToPattern[currentWord] = currentPattern;
    }
    if (
      patternToWord[currentPattern] !== currentWord ||
      wordToPattern[currentWord] !== currentPattern
    ) {
      return false;
    }
  }
  return true;
}
// Test cases
console.log(wordPattern('abba', 'dog cat cat dog')); 
console.log(wordPattern('aaaa', 'dog cat cat dog')); 
console.log(wordPattern('abba', 'dog dog cat dog'));



divyansh.sharma@mobileprogramming.com


*/


