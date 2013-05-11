
$('#browse').on('pageinit', function(e) {
	e.preventDefault();
	
	})
$('#home').on('pageinit', function() {
	$('li').on('click', function(e) {
        alert($.this.html());
        e.stopPropagation();
		// Act on the event
	});
});