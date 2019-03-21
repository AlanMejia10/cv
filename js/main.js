
$(function(){
    $(document).on("scroll", function(){
        let $navbar= $(".navigation");
        $navbar.toggleClass("scrolled", $(this).scrollTop()>$navbar.height());
    });

    $(".navigation li:first-child").on("click", function(){
        $("html, body").animate({
            scrollTop: $(".section-education").offset().top
         }, 2000);
    });
});
