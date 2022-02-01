// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  if(str.split('').reverse().join('') === str)
    return true;
  else 
    return false;
}

palindrome("eyE");
