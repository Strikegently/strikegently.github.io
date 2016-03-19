var header =
    "<header>" +
    "<h1>Projects by Language</h1>" +
    "<span class=\"view\"><a href=\"/portfolio/languages/Java.html\">Java</a></span>" +
    "<span class=\"view\"><a href=\"/portfolio/languages/C.html\">C/C++</a></span>" +
    "</header>";

$(document).ready(function () {
    $(".wrapper").prepend(header);
});