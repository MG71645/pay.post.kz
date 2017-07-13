$(document).ready( function() {
    
  function animate() {
    $('.scene').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $('body').scrollTop();
			var Height = document.documentElement.clientHeight;
			if (imagePos < topOfWindow+(Height-200)) {
				$(this).addClass('animate');
			} else {
        $(this).removeClass('animate');
      }
		});
  }
    
  animate();
    
  $('body').scroll(function() {
		animate();
	});
    
});