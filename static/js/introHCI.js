'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
	//console.log("Project clicked");
	e.preventDefault();
	var color = $( this ).css( "background-color" );
	if (color == 'rgb(127, 255, 0)') {
		$(this).css("background-color", "");
	} else {
		//console.log(color);
		$(this).css("background-color", "#7fff00");
	}
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var image = $(containingProject).find("img");
	if (image.length == 0) {
		console.log("no img");
	} else {
		$(image).toggle();
	}
	/*
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
		containingProject.append("<div class='project-description'><p>Description of the project</p></div>");
	} else {
		description.html("<p>Stop clicking on me! You just did it at " + (new Date()) +  "</>");
	}
	*/
}
