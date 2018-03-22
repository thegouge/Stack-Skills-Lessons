function gitFukd(x) {
    for(var i = 0; i <= x; i++) {
        console.log(`Y'all got frickd ${i} times`);
    }
    return `How does it feel mother fricker?`;
}

function gitRekt(y) {
    for(var j = 0; j <= y; j++) {
        console.log(`git Rekt ${j} times`);
    }
    return `Today just isn't your day!`;
}

module.exports.rekt = gitRekt(7);
module.exports.fukd = gitFukd(5);
