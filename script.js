var tasks = [];

$( document ).ready(function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if(!tasks) 
        console.log("Please add some tasks");
    
    updateScreen(tasks);

    $(".addBtn").click(function() {
        var task = $(".taskInput").val();
        updateStorage(task);
        addTask(task);
        $(".taskInput").val("");
    });

    $(".clearBtn").click(function() {
        localStorage.clear();
        updateScreen([]);
    });
});

function updateScreen(tasks) {
    if(tasks && tasks.length === 0)
        $(".items").empty();
    $.each(tasks, function (i, task) {
        addTask(task);
    });
}

function updateStorage(task) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks)
        tasks.push(task);
    else 
        var tasks = [task];
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


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
