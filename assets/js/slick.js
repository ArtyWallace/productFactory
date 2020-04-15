$(document).ready(function(){
        $(".projects__inner").on("init reInit afterChange", function(event, slick, currentSlide){
            let i = (currentSlide ? currentSlide : 0) + 1;
            $(".project__count").html(i + "/" + slick.slideCount);
        });

        $(".projects__inner").slick({    
            prevArrow: $(".slick__prev"),
            nextArrow: $(".slick__next")
        });
    
});