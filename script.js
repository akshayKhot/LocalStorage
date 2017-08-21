$( document ).ready(function() {
    console.log( "document loaded" );
    testEvents();
});

function testEvents() {
    $("article").click(function(e) {
        console.log(e);
    });
}

function testSelections() {
    $(".zoomin").click(function() {
        $("#text").attr("class", "big");
    });
    $(".zoomout").click(function() {
        $("#text").attr("class", "small");
    });

    console.log($("ul").length);
}

function handleAttr() {
    $("h3").attr("class", "blue");
}

function callMe(name) {
  console.log("Hello World, " + name);
}