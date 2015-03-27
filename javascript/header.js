var header =
    "<header>" +
    "<h1>RSBot Scripting Tutorials</h1>" +
    "<span class=\"view\"><a href=\"/index.html\">Home</a></span>" +
    "<br>" +
    "<span class=\"view\"><a href=\"/lessons/IntelliJ.html\">Setting up RSBot for IntelliJ</a></span>" +
    "<br>" +
    "<span class=\"view\"><a href=\"/lessons/PollingScript.html\">PollingScript</a></span>" +
    "</header>";

$(document).ready(function () {
    $(".wrapper").prepend(header);
});