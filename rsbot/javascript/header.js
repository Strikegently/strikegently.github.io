var header =
    "<header>" +
    "<h1>RSBot in a Nutshell</h1>" +
    "<span class=\"view\"><a href=\"/rsbot\">Home</a></span>" +
    "<span class=\"view\"><a href=\"/rsbot/lessons/Contributing.html\">How to Contribute</a></span>" +
    "<span class=\"view\"><a href=\"/rsbot/lessons/IntelliJ.html\">Setting up RSBot for IntelliJ</a></span>" +
    "<span class=\"view\"><a href=\"/rsbot/lessons/PollingScript.html\">PollingScript</a></span>" +
    "<span class=\"view\"><a href=\"/rsbot/lessons/ClientContext.html\">ClientContext</a></span>" +
    "<span class=\"view\"><a href=\"/rsbot/lessons/QueryIntro.html\">Query Introduction</a></span>" +
    "<span class=\"view\"><a href=\"/rsbot/lessons/NpcsAndObjects.html\">Npcs and GameObjects</a></span>" +
    "<span class=\"view\"><a href=\"/rsbot/lessons/Widgets.html\">Widgets and Chat</a></span>" +
    "<span class=\"view\"><a href=\"/rsbot/lessons/Interacting.html\">Interacting</a></span>" +
    "<span class=\"view\"><a href=\"/rsbot/lessons/Banking.html\">Banking</a></span>" +
    "</header>";

$(document).ready(function () {
    $(".wrapper").prepend(header);
});