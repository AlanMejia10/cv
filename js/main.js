
$(function () {
    // turns on the background of the navbar
    $(document).on("scroll", function () {
        let $navbar = $(".navigation");
        $navbar.toggleClass("scrolled", $(this).scrollTop() > $navbar.height());
    });

    //smooth navigation
    $(".navigation li a").on("click", function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        },1500);
    });
});
