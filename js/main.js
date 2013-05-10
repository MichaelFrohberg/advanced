
$('#launch').on('pageinit', function(e) {
	$.mobileChangePage();
	e.preventDefault();
	
	})
$('#home').on('pageinit', function() {
	$('#submit').on('click', function(event) {
        event.preventDefault();
		// Act on the event
	});
})