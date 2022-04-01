$(function() {

    // Function to check time
    function checkTime() {
        var currentTime = moment().hours();
        // Loop through time block classes
        $('.time-block').each(function() {
            var blockTime = parseInt(
                $(this)
                    .attr('id')
                    .split('-')[1]
            )
            // Check and apply appropriate classes based on current time
            if (blockTime < currentTime) {
                $(this).addClass('past')
            } else if (blockTime === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
    }

    // Listen and save notes to local storage
    $('.saveBtn').on('click', function() {
        var note = $(this)
            .siblings('.description')
            .val()
        var time = $(this)
            .parent()
            .attr('id')
            localStorage.setItem(time, note)
            console.log('Added to local storage')
    })
    
    // Load locally stored data for each hour
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
    $('#hour-19 .description').val(localStorage.getItem('hour-19'));

    checkTime();
})