// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(document).ready(function () {

    // Edit button click
    $('.edit-button').click(function () {

        var description = $(this).data('description');
        var dueDateStr = $(this).data('due-date');
        var id = $(this).data('id');

        $('#editDescription').val(description);
        $('#editDueDate').val(convertDate(dueDateStr));
        $('#editTaskId').val(id);

        $('#editModal').modal('show');
    });

    // Delete button click
    $('.delete-button').click(function () {

        var id = $(this).data('id');

        $('#deleteTaskId').val(id);

        $('#deleteModal').modal('show');

    });


    // Date filter to change when user put value
    $('#filterDate').change(function () {

        const selectedDate = $(this).val();

        $('#todo-list li').each(function () {
            const dueDateSpan = $(this).find('.time');

            const dueDateText = dueDateSpan.text();

            if (convertDate(dueDateText) === selectedDate) {
                $(this).show();
            } else {
                $(this).hide();
            }

            // show all days if user reset filter
            if (selectedDate === '') {
                $(this).show();
            }
        });
    });

    // if date is today set color to red

    var currentDate = new Date().toISOString().slice(0, 10);

    $('.time').each(function () {
        var dueDate = $(this).data('due-date');
        if (dueDate === currentDate) {
            $(this).css('color', 'red');
        }
    });

    // tooltip logic
    var tooltipShown = false;
    $('.resizable').click(function () {

        // Show tooltip only if it hasn't been shown already
        if (!tooltipShown) {
            var tooltip = $('<div>').text('You can resize the textarea by dragging the bottom-right corner.');
            tooltip.addClass('tooltip fade show alert alert-info');
            $('body').append(tooltip);
            var documentWidth = $(document).width();
            var tooltipWidth = tooltip.outerWidth();
            tooltip.css({
                top: 10,
                left: documentWidth - tooltipWidth - 10, // Position the tooltip from the right
                opacity: 1
            });

            // Hide the tooltip after 5 seconds
            setTimeout(function () {
                tooltip.fadeOut(300, function () {
                    $(this).remove();
                    tooltipShown = true;
                });
            }, 5000);
            tooltipShown = true;
        }
    });
});

// function to convert dateString to date format in input type date
function convertDate(date) {
    var parts = date.split(" ");
    var datePart = parts[0];

    var dateParts = datePart.split(".");
    var day = dateParts[0];
    var month = dateParts[1];
    var year = dateParts[2];
    return year + "-" + month + "-" + day;
}

// Function to display modal with upcoming tasks
function checkDueDatesAndShowModal() {
    var tasks = document.querySelectorAll('.time');
    var currentDate = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    var tasksTomorrow = [];

    tasks.forEach(function (task) {
        var dueDate = new Date(task.dataset.dueDate);
        var timeDifference = dueDate.getTime() - tomorrow.getTime();
        var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        if (daysDifference === 0) {
            tasksTomorrow.push(task.previousElementSibling.textContent);
        }
    });

    if (tasksTomorrow.length > 0) {
        var modalBody = document.getElementById('incomingTasksModalBody');
        modalBody.innerHTML = '<p>Tasks due tomorrow:</p><ul>';

        tasksTomorrow.forEach(function (task) {
            modalBody.innerHTML += '<li>' + task + '</li>';
        });

        modalBody.innerHTML += '</ul>';

        var myModal = new bootstrap.Modal(document.getElementById('incomingTasksModal'));
        myModal.show();
    }
}

window.onload = function () {
    checkDueDatesAndShowModal();
};
