$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        console.log("--------------------------------------------------------> Saving...");
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Saves user input in local storage.
        saveData(time, text);
        console.log(time);
        console.log(text);
    })

    function timeTracker() {
        // Gets current number of hours.
        var currentTime = moment().hour();

        // loop over time blocks        
        $(".time-block").each(function () {
            var timeString = $(this).attr("id").split("hour")[1];
            var blockTime = parseInt(timeString);

            // Checks time and marks past/future/present.
            if (blockTime < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }

            else if (blockTime == currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
            
            // render existing events text (if any)
            var eventText = retrieveData('hour' + timeString);            
            if(eventText){
                 $(this).children(".description").text(eventText); 
            }
            
        })
    }

    function saveData(key, value){
        localStorage.setItem(key, value);
        return true;
    }

    function retrieveData(key){
        return localStorage.getItem(key);
    }

    //Runs function
    timeTracker()

})

//Current day and year display at top of page.
var todayDate = moment().format('ddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
