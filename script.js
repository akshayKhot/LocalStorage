var tasks = ["Workout", "Go for a swim", "Work on thesis", "Have a good time", "Build a JQuery app"];

$( document ).ready(function() {
    localStorage.setItem("prop", "val");
    console.log(localStorage);

    $.each(tasks, function (i, task) {
        console.log(i + ": " + task);
        var div = $(`
            <div class="checkbox">
                            <label>
                                <input type="checkbox" value="">
                                <span class="item">${task}</span>
                            </label>
                        </div>
        `);
        $(".items").append(div);
    });
});

