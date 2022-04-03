//document
$(document).ready(function(){

    //display current date
    let currentDateEl = moment().format("dd MM D, YYYY");
    $('currentDay').text(currentDateEl);

    //time blocks change color based on hour of day
    let hourEl= moment().get("hour");
    $('.hour').each(function(){
        let timeBlock = parseInt($(this).attr("value"));
        if (timeBlock < hourEl){
            $(this).addClass("past");
        }
        if (timeBlock === hourEl){
            $(this).addClass("present");
        }
        if (timeBlock > hourEl){
            $(this).addClass("future");
        }
    });

});