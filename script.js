var tasks = [];

$( document ).ready(function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if(!tasks) 
        console.log("Please add some tasks");
    else {
        // tasks.push();
        // localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(tasks);
    }
    
    // $.each(mytasks, function (i, task) {
    //     addTask(task);
    // });

    $(".addBtn").click(function() {
        var task = $(".taskInput").val();
        updateStorage(task);
        addTask(task);
    });

    $(".clearBtn").click(function() {
        localStorage.clear();
    });
});

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
