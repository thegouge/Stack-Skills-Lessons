$(document).ready(function() {
    // jQuery Codes must be here

    // Div fades away
    var opened1 = true;
    $('#div1').click(function() {
        $('#div2').fadeToggle(500, function() {
            if(opened1 == true) {
                $('#div1').css('border-bottom', '3px solid black');
                opened1 = false;
            } else {
                $('#div1').css('border-bottom', 'none');
                opened1 = true;
            }
        });
    });

    // div slides up
    $('#div3').click(function() {
        $('#div4').slideToggle(500, function() {
            if(opened1 == true) {
                $('#div3').css('border-bottom', '3px solid black');
                opened1 = false;
            } else {
                $('#div3').css('border-bottom', 'none');
                opened1 = true;
            }
        });
    });

    var bodyRed = true;
    $('.body').click(function() {
        if(bodyRed == true) {
            $(this).css({'background': '#a9c1e8', 'color': '#520959'});
            bodyRed = false;
        } else {
            $(this).css({'background': 'red', 'color': 'white'});
            bodyRed = true;
        }
    });

    // red square animates
    $('#div5').click(function() {
        $(this).animate({
            height: '50px',
            width: '50px',
            marginLeft: '5em',
            backgroundColor: 'blue'
        }, 1000);
        $(this).animate({
            height: '20em',
            width: '20em',
            marginLeft: '0',
            backgroundColor: 'red'
        }, 1000);
    });

    // Copying text in the second body div and copys it into animating div
    $('#copyPaste').click(function() {
        var text = $('#div4').text();
        $('#div5').text(text);
    });

    // Expands the Richard Nixon Picture
    $('#richarded').click(function() {
        $('#richard').width(615);
    });

    // Adds Richard Simmons
    // I think better practice would be to wrap them in a div
    $('#add').click(function() {
        $('#richard').after('<img src="../Media/richard-simmons.jpg" class="simmons">');
    });

    // removes all the richard simmons
    $('#remove').click(function() {
        $('.simmons').remove();
        $('#richard').width(1);
    });

    // Puts the name json into an array
    var names = [];
    $.getJSON('./js/name.json', function(data) {
        data.map(function(thing) {
            names.push(thing);
        });
    });


    // Picks a random name from the names array and prints it
    $('#append').click(function() {
        $('#list').append('<li>' + names[Math.floor(Math.random() * names.length)] + '</li>');
    });

    $('#delete').click(function() {
        $('#list').empty();
    });
});
