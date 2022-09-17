
document.addEventListener('DOMContentLoaded', function() {
    /* sidebar */
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    /* collapsible */
    var elemsCo = document.querySelectorAll('.collapsible');
    var instancesCo = M.Collapsible.init(elemsCo);
    /* carousel */
    var elemsCa = document.querySelectorAll('.carousel');

    if(window.innerWidth > 991){
        var instanceCa = M.Carousel.init(elemsCa, {
            indicators: true
        });
        console.log (window.innerWidth); 
    }else{
        var instanceCa = M.Carousel.init(elemsCa, {
            indicators: false,
            fullWidth: true
        });
    }
    
});

