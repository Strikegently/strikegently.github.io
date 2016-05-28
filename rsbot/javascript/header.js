$(document).ready(function () {
    var $header = $(".wrapper header");
    if (!$header.length) {
        $header = $("<header></header>");
        $(".wrapper").prepend($header);
    }
    $header.load("/rsbot/header.html");
});