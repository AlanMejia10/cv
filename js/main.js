
$(function () {
    $(document).on("scroll", function () {
        let $navbar = $(".navigation");
        $navbar.toggleClass("scrolled", $(this).scrollTop() > $navbar.height());
    });

    $(".navigation li").on("click", function (event) {
        console.log(event.target);
        $("html, body").animate({
            scrollTop: $(".section-education").offset().top
        }, 2000);
    });
});
