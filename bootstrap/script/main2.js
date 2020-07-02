$(document).ready(function(){
  $("div").dblclick(function(){
    $( this ).toggleClass("doubcl2");
  });
});
$(document).ready(function(){
  $(".tog1").click(function(){
  $("div").toggle("tog2");
  });
});
function fade(div_id, button) {
	if (button.value == 'Fade Out') {
		$('#' + div_id).fadeOut('slow');
		button.value = 'Fade In';
	} else {
		$('#' + div_id).fadeIn(2000);
		button.value = 'Fade Out';
	}
}
