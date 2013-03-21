(function() {

    /********* SLIDER *********/

    //Little setup
    var auto = 1;
        transitionTime = 500;
        timeBetweenSlides = 4000;

    var sliderArray = [ $slider = $('.slider'),
                        $slide = $slider.find('li'), 
                        $slidemarkers = $('.slide-list'),
                        $slidemarker = $slidemarkers.find('li'),
                        $nextslide = $('.slide-nav .next'),
                        $prevslide = $('.slide-nav .prev') ]

    //For sliding to previous/next slides
    function slideNav(sliderArray, direction) {

        //Get the index of the active slide
        var i = $slider.find('li.active').index();

        //Remove active class of said slide and fade out
        $slide.eq(i).removeClass('active').fadeOut(transitionTime);
        
        //Do the same with markers -fade out
        $slidemarker.eq(i).removeClass('active');

        //A little logic for sliding
        if(direction == 'next') {
            if(!(i++ < $slide.last().index())) i = 0;
        } else if(direction == 'prev') {
            if(!(i-- > 0)) i = 2;
        }

        //Fade in the next slide and add the active class
        $slide.eq(i).fadeIn(transitionTime);
        $slide.eq(i).addClass('active');
        $slidemarker.eq(i).addClass('active');
    }

    function nextSlide(sliderArray) {
        slideNav(sliderArray, 'next');
    }

    function prevSlide(sliderArray) {
        slideNav(sliderArray, 'prev');
    }

    function sliderAutoPlay(auto) {
        if(auto) {
            $interval = setInterval(function() {
                //Auto play the slider if the curosr isn't hovered over the slide image
                if(!$sliderElem.hasClass('hover')) nextSlide(sliderArray);
            }, transitionTime + timeBetweenSlides);
        }
    }

    function displaySlide(sliderArray, slideid) {
        //Disable autoplay
        clearInterval($interval);
        
        $slide.removeClass('active');
        $slidemarker.removeClass('active');

        $slide.fadeOut();

        $slidemarker.eq(slideid).addClass('active');
        $slide.eq(slideid).addClass('active').fadeIn(transitionTime);
    }

    function slider(sliderElem) {

        $sliderElem = $(sliderElem);

        $slide.fadeOut()
              .first()
                .addClass('active')
                .fadeIn(transitionTime);

        $slidemarker.first().addClass('active');

        $($('.park-images')).hover(function() {
            $sliderElem.addClass('hover');
        }, function() {
            $sliderElem.removeClass('hover');
        });

        sliderAutoPlay(auto);
        
        $($slidemarker).click(function() {
            var index = $(this).index();
            clearInterval($interval);
            displaySlide(sliderArray, index);
        });

        $($nextslide).click(function() {
            clearInterval($interval);
            nextSlide(sliderArray);
        });

        $($prevslide).click(function() {
            clearInterval($interval);
            prevSlide(sliderArray);
        });
    }

    /****************/

})();
