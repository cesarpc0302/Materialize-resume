document.addEventListener('DOMContentLoaded', function() {
    /* sidebar */
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    /* collapsible */
    var elemsCo = document.querySelectorAll('.collapsible');
    var instancesCo = M.Collapsible.init(elemsCo);
    /* carousel */
    var elemsCa = document.querySelectorAll('.carousel');
    var instanceCa = M.Carousel.init(elemsCa, {
        indicators: true
      });
});
