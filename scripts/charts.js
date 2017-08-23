$(document).ready(function() {
    var elem = $("#placeholder");
    $.plot(elem, [ [[0, 0], [1, 1]] ], { yaxis: { max: 1 } });
});