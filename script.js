$(function() {
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
    checkTime();
    console.log('getting time')
})