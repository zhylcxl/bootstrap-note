jQuery(function($) {
	$(".list-group-title-start").click(function() {
		$(".list-group-start").toggle();
	});
	$(".list-group-title-style").click(function() {
		$(".list-group-style").toggle();
	});
	$(".list-group-title-components").click(function() {
		$(".list-group-components").toggle();
	});
	$(".list-group-title-javascript").click(function() {
		$(".list-group-javascript").toggle();
	});	
	
	$('[data-toggle="tooltip"]').tooltip();
	
	$(".panel-footer").css("display", "none");
});

function toggleCode(codeClass) {
	$(codeClass).toggle();
}
