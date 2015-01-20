
var Browser = Browser;
if(Browser==undefined){
	Browser={isIE:false,version : 10000}
}
var is_ie_should_care = (Browser.isIE && Browser.version <= 9);
var overlap = function($login,$footer){
	var y1 = $login.offset().top;
	var h1 = $login.outerHeight(true);
	var bottom1 = y1 + h1;
	var top2 = $footer.offset().top;
	if(bottom1 > top2){
		return true;
	}
	return false;
}


var footer_display_reassign = function(){
	var loginBox = $('.login_frame');
	var footer = $('#login_footer');
	var footer_text = $('#login_footer_text');
	
	setTimeout(function(){
		var collision = overlap(loginBox,footer);
		if(collision){
				footer_text.hide();
		}else{
				footer_text.show();
		}
	}, 10);
	
}
var ie_care = function(){
	
	if(is_ie_should_care){
		var width = 301;
		$('#login span').css('color','white');
		$('#username').css('width',width+'px');
		$('#password').css('width',width+'px');
		$("input[type='email']").css('width',width+'px');
		$("input[type='password']").css('width',width+'px');
		
	}
}
footer_display_reassign();
$(window).resize(function(){
	footer_display_reassign();
})
$(document).ready(function(){
	ie_care();
})


