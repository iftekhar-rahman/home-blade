jQuery(document).ready(function($){

    $(".main-content-scroll").on('click', function(event) {
        if (this.hash !== "") {
            
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
        
            window.location.hash = hash;
            });
        } // End if
    });

    $(document).ready(function () {
        $('.second-button').on('click', function () {
            $('.animated-icon2').toggleClass('open');
        });
    });

    

});