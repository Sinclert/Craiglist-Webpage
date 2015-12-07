/* THIS IS THE JAVASCRIPT FILE OF OUR INDEX PAGE (EXERCISE 3) */
$(document).ready(function () {
    
    /* This variables is are to calculate the number of divs are in the slider */
    var currentIndex = 0,
    items = $('#container div'),
    itemAmt = items.length;


    /* This variable is used to define the time for automatically change divs in the slider */
    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems(currentIndex);
    }, 8000);


    /* Function activated in the "next" and "prev" methods */
    function cycleItems(index) {
        var item = $('#container div').eq(currentIndex);
        items.hide();
        item.fadeIn(1000);

    }

    /* Function activated when the user clicks in the "next" button */
    $('#next').click(function() {
      clearInterval(autoSlide);
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems(currentIndex);
    });


    /* Function activated when the user clicks in the "prev" button */
    $('#prev').click(function() {
      clearInterval(autoSlide);
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
      }
      cycleItems(currentIndex);
    });
});