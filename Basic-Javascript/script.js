document.write('This is in an External File');

function palindrome(){
    var x = document.getElementById('input').value;
    x = x.replace(/\W/g, '').toUpperCase();

    var rev = x.split('').reverse().join('');

    if (x == rev){
        document.getElementById('output').innerHTML = "the string " +
        document.getElementById('input').value +
        " is a palindrome";
    }
    else {
        document.getElementById('output').innerHTML = "Not a Palindrome!"
    }
}
