$(document).ready(function () {
    var $header = $(".wrapper header");
    if (!$header.length) {
        $(".wrapper").prepend("<header></header>");
    }
    $($header).load("/rsbot/header.html");
});