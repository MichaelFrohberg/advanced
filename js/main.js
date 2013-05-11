$('#browse').on('pageinit', function() {
	$('#submit').on('click', function(event) {
		event.preventDefault();
		// Act on the event
	});
})
$('#postGig').on('pageinit', function() {
	$('li').on('click', function(e) {
        alert($.this.html());
        e.stopPropagation();
		// Act on the event
	});
});