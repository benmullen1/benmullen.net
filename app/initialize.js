var $ = require('jquery');

console.log('Initializing modules, just trying to use jQuery!', $('body'));


document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  
  $("#mainButton").click(function(){
	console.log('Switching to Main section');
	toggleSection('mainContent');
	//$("#mainContent").css('display','inline')
	//$("#contribution").css('display','none');
	//$("#tech").css('display','none');
	//$("#childhood").css('display','none');
	//$("#legacy").css('display','none');
	//$("#credits").css('display','none');
	
  })

  $("#experienceButton").click(function(){
	console.log('Switching to Experience section');
	toggleSection('experience');
  })

  $("#techButton").click(function(){
    console.log('Switching to Tech section');
    toggleSection('tech');
    })

  $("#funFactsButton").click(function(){
	console.log('Switching to Fun Facts section');
	toggleSection('funFacts');
  })
  
  $("#creditsButton").click(function(){
	console.log('Switching to Credits section');
	toggleSection('credits');
  })

});

function toggleSection(name){
	$("#mainContent").css('display','none')
	$("#contribution").css('display','none');
	$("#tech").css('display','none');
	$("#experience").css('display','none');
	$("#funFacts").css('display','none');
	$("#credits").css('display','none');
	switch (name){
		case "mainContent":
			$("#mainContent").css('display','inline');
			break;
		case "tech":
			$("#tech").css('display','inline');
			break;
		case "experience":
			$("#experience").css('display','inline');
			break;
		case "funFacts":
			$("#funFacts").css('display','inline');
			break;
		case "credits":
			$("#credits").css('display','inline');
			break;
		default:
			$("#mainContent").css('display','inline');
	}
}
