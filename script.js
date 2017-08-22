var tasks = ["Workout", "Go for a swim", "Work on thesis", "Have a good time", "Build a JQuery app"];

$( document ).ready(function() {
    localStorage.setItem("prop", "val");

    $.each(tasks, function (i, task) {
        addTask(task);
    });

    $(".addBtn").click(function() {
        var task = $(".taskInput").val();
        addTask(task);
    });
});


function addTask(task) {
    var div = $(`
            <div class="checkbox">
                            <label>
                                <input type="checkbox" value="">
                                <span class="item">${task}</span>
                            </label>
                        </div>
        `);
        $(".items").append(div);
}
