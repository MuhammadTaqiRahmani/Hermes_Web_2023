$(document).ready(function() {
    var navbar = $(".navbar");

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            navbar.addClass("sticky");
            $("#checkbtn").css("display", "block"); // Show the mobile menu button when sticky
        } else {
            navbar.removeClass("sticky");
            $("#checkbtn").css("display", "none"); // Hide the mobile menu button when not sticky
        }
    });
});
