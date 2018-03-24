//Checks to see if the inputted string is a palindrome
function palindrome(){
    var x = document.getElementById('palindrome-input').value;
    x = x.replace(/\W/g, '').toUpperCase();

    var rev = x.split('').reverse().join('');

    if (x == rev){
        document.getElementById('palindromeOutput').innerHTML = "the string " +
        document.getElementById('palindrome-input').value +
        " is a palindrome!";
    }
    else {
        document.getElementById('palindromeOutput').innerHTML = "Not a Palindrome!"
    }
}

//outputs the user's birth year
function birthday() {
    var age = document.getElementById('age').value;
    var today = new Date();
    today = today.getFullYear();
    var birthYear = today - age;
    document.getElementById('birthOutput').innerHTML = `You were born in ${birthYear}!`;
}