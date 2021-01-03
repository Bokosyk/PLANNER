$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");

        // Saves user input in local storage.
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        // Gets current number of hours.
        var timeNow = moment().hour();

        //loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        })
    }

})

//Current day and year display at top of page.
var todayDate = moment().format('ddd, MMM Do YYYY');
$("#currentDay").html(todayDate);