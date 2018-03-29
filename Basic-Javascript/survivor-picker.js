// jshint esversion: 6

// contestant constructor function
function Contestant(name, points) {
    this.name = name;
    this.points = points;
}

// creating the contestants
var angela = new Contestant('angela', 0);
var bradley = new Contestant('bradley', 0);
var brendan = new Contestant('brendan', 0);
var chelsea = new Contestant('chelsea', 0);
var chris  = new Contestant('chris', 0);
var desiree = new Contestant('desiree', 0);
var domenick = new Contestant('domenick', 0);
var donathan = new Contestant('donathan', 0);
var james = new Contestant('james', 0);
var jenna = new Contestant('jenna', 0);
var kellyn = new Contestant('kellyn', 0);
var laurel = new Contestant('laurel', 0);
var libby = new Contestant('libby', 0);
var michael = new Contestant('michael', 0);
var sebastian = new Contestant('sebastian', 0);
var stephanie = new Contestant('stephanie', 0);
var wendell = new Contestant('wendell', 0);

// putting the contestants into an array
var contestants = [
        angela,
        bradley,
        brendan,
        chelsea,
        chris,
        desiree,
        domenick,
        donathan,
        james,
        jenna,
        kellyn,
        laurel,
        libby,
        michael,
        sebastian,
        stephanie,
        wendell
    ];

var rankings = [];

var result = [];

for (var i = 0; i < contestants.length; i++) {
    rankings[i] = i + 1;
}

// assigning unique point values to each contestant
contestants.map(function(person){
    var random = Math.floor(Math.random() * rankings.length);
    person.points = rankings[random];
    rankings.splice(random, 1);
    result[person.points - 1] = person;
});

result.forEach(function(person){
    console.log(`Give ${person.name} ${person.points} points!`);
});

/*
    Rent
    Car Registration
    Car Insurance
    Phone Bill
*/
