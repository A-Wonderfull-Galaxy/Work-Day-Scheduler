//document
$(document).ready(function(){

    //display current date
    let currentDateEl = moment().format("dddd MMMM D, YYYY");
    $('#currentDay').text(currentDateEl);

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
    
    //variable to declare all time block
    let eventsEl = document.querySelectorAll('.event');

    //forEach loop to save event input
    eventsEl.forEach(function(event,i){
        const eventInput = event.querySelector('textarea');
        const saveBtn = event.querySelector('button');
        eventInput.value = localStorage.getItem('event-' + (i+1))

        //on click save, event listner
        saveBtn.addEventListener('click', function(){
            localStorage.setItem('event-' + (i+1), eventInput.value);
        })
    })
});