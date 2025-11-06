function isPalindrome(word) {
  word = word.toLowerCase();
  const result = word.split("").reverse().join("");

  if (result == word) {
    console.log("True");
  } else {
    console.log("False");
  }
}
isPalindrome("Racecar");
