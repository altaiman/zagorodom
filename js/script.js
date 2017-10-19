$(function(){
    // $('.slider').slick({
    //     variableWidth: true,
    //     centerMode: true
    // });

    $('.slider').flickity({
        wrapAround: true,
        arrowShape: { 
            x0: 30,
            x1: 100, y1: 50,
            x2: 100, y2: 50,
            x3: 100
        }
    })
});