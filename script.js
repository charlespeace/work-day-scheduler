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
            .siblings('description')
        var time = $(this)
            .parent()
            .attr('id')
            localStorage.setItem(time, note)
            console.log('Saved to local storage')
    })

    checkTime();
})