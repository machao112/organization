$(function() {
	displayHelp();
	faceClick();
	clickToggleMenu()
});

$(window).scroll(function(){
	scrollHelp();
	scrollTermi();
});

function displayHelp() {
	var helps = [
		{"image":"circle-1.png","title":"Expertise Skill", "info":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
															sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
		{"image":"circle-2.png","title":"Expertise Skill", "info":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
															sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
		{"image":"circle-3.png","title":"Expertise Skill", "info":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
															sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
		{"image":"circle-4.png","title":"Expertise Skill", "info":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
															sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
	]

	helps.forEach(function(help) {
		var item = '<div class="col-lg-3 col-md-6 item">\
						<div class="img-circle">\
							<img src="images/'+help.image+'" alt="circle">\
						</div>\
						<div class="info">\
							<p>'+help.title+'</p>\
							<p>'+help.info+' </p>\
						</div>\
					</div>';
		$('.help .row').append(item);
	})
}

function scrollHelp() {
	var wScroll = $(window).scrollTop();
	var offsetHelp = $('.help').offset().top;
	if(wScroll > offsetHelp -  $(window).height()/2){
		$('.item').each(function(i) {
			setTimeout(function(){
				$('.item').eq(i).addClass('swoosh');
			}, 300 * i)
			
		});
	}
}


function faceClick() {
	// $('.bubbles').find('.bubble').first().addClass('is-showing');
	$('.face').click(function(){
		var $this = $(this),
			$siblings = $this.parent().children(),
			$position = $siblings.index($this);
		$('.bubble').removeClass('is-showing').eq($position).addClass('is-showing');
	});
}

function scrollTermi() {
	var wScroll = $(window).scrollTop();
	var offsetTermi = $('.termi').offset().top;
	if(wScroll > offsetTermi -  $(window).height()/2) {
		$('.bubbles').find('.bubble').first().addClass('is-showing')
			.siblings().removeClass('is-showing');
	}
}

function clickToggleMenu() {
	$('.toggle-mobile-menu').click(function() {
		$(this).next().slideToggle(function() {
			$(this).toggleClass('expanded').css('display','');
		});
	})
}


