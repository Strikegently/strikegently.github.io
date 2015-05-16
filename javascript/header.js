var header =
    "<header>" +
    "<h1>RSBot in a Nutshell</h1>" +
    "<span class=\"view\"><a href=\"/\">Home</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/Contributing.html\">How to Contribute</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/IntelliJ.html\">Setting up RSBot for IntelliJ</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/PollingScript.html\">PollingScript</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/ClientContext.html\">ClientContext</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/QueryIntro.html\">Query Introduction</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/NpcsAndObjects.html\">Npcs and GameObjects</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/Widgets.html\">Widgets and Chat</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/Interacting.html\">Interacting</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/Banking.html\">Banking</a></span>" +
    "<span class=\"view\"><a href=\"/lessons/Walking.html\">Walking</a></span>" +
    "</header>";

$(document).ready(function () {
    $(".wrapper").prepend(header);
});