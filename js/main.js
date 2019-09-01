//CoOL Sticker
$('#mc-embedded-subscribe').click(function (e) { 
    e.preventDefault();

    // Add Sticker
    $('.sticker').show();
    setTimeout(function () { 
        $('.sticker').hide();
        //Submit the form
        $('#mc-embedded-subscribe-form').submit();
    }, 1000)
})


