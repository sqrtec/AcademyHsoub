$(function(){
    let currentDate = new Date();
    $('#current-year').text(currentDate.getFullYear());
});

var $links = $(".item-links");

$links.click(function (e) {
    $links.removeClass("active");
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translateValue = "translateX("+ position * 25 +"%)";
    $("#wrapper").css({
        transform: translateValue
    });

    clickedLink.addClass("active");

});

$($links[0]).addClass("active");