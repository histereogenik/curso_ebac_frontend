$(document).ready(function() {
    $('#form-drag-menu button').click(function() {
        if ($('#form-write-task').is(':visible')) {
            $('#form-write-task').slideUp();
        } else {
            $('#form-write-task').slideDown();
        }
    })

    $('#form-drag-menu').on('submit', function(e) {
        e.preventDefault();
    })

    $('#form-write-task').on('submit', function(e) {
        e.preventDefault();
        const writeOnList = $('#input-write-a-task').val();
        const newTask = $('<li></li>');
        $(`<div class="taskNotDone">- ${writeOnList}</div>`).appendTo(newTask);
        $(newTask).appendTo('ul');
        $('#input-write-a-task').val('');
    })

    $('ul').on('click', '.taskNotDone', function (event) {
        $(this).toggleClass('taskDone')
    });
})