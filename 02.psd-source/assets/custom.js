$(document).ready(function(){

	/*==========================================================*/
	/* Syntax highlighter */
	/*==========================================================*/
	
	SyntaxHighlighter.defaults['toolbar'] = false;
	SyntaxHighlighter.all();
	
	/*==========================================================*/
	/* Scrollspy */
	/*==========================================================*/
	
	$('#doc-content').scrollspy({
		target: '#doc-menu'
	});
	
	$('#doc-content').scroll(function () {
		$('#doc-content').scrollspy('refresh');
	});
	
	/*==========================================================*/
	/* LocalScroll */
	/*==========================================================*/
	
	$('#doc-menu').localScroll({
		target: '#doc-content',
		axis: 'y'
	});
	
	$('body').localScroll({
		axis: 'y'
	});
	
	/*==========================================================*/
	/* Magnific PopUp */
	/*==========================================================*/
	
	$('.magnificPopup').magnificPopup({
		disableOn: 400,
		closeOnContentClick: true,
		type: 'image'
	});

//

});