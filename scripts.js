$('#first-button').click((event) => {
    console.log('Yeah, you clicked me');
});

$('#second-button').click((event) => {
    $('#first-button').text('You traitor!');
});

$('#prettifier').click((event) => {

    let chooseColor = document.getElementById("randomcolor").value;

    $('button').css('background', chooseColor);
    $('button').css('border', '2px solid #0b8ec1');
    $('button').css('border-radius', '50px');
    $('button').css('font-size', '20px');
    $('button').css('font-family', 'Patrick Hand, cursive');
});