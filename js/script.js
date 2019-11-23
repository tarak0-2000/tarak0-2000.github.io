$(function() {
	// スクロールしたときに実行
	$(window).scroll(function () {
		// 目的のスクロール量を設定(px)
		var TargetPos = 350;
		// 現在のスクロール位置を取得
		var ScrollPos = $(window).scrollTop();
		// 現在位置が目的のスクロール量に達しているかどうかを判断
		if( ScrollPos >= TargetPos ) {
			// 達していれば表示
			$("#top-button").fadeIn();
		}
		else {
			// 達していなければ非表示
			$("#top-button").fadeOut();
		}
	});

	// ページ内スムーススクロール
	$('a[href^="#"]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		SmoothScroll(target);

		return false;
	});

	// 詳細表示制御
	$('.frame').click(function(){
		var thisId = $(this).attr("id");
		var targetId = "#" + thisId + "-section";
		var targetHide = $(targetId).css('display') == 'none' ? true : false;


		if( targetHide ) {
			// ターゲットが非表示ならスライドで表示する
			$(".details-area").slideUp(1000);
			$(targetId).slideDown(1000);
			setTimeout(function(){
				// 表示されたターゲットへ移動する
				SmoothScroll(targetId);
			},800);
		}else{
			// ターゲットが表示されているならそこへ移動する
			SmoothScroll(targetId);
		}

		return false;
	});

});



// スムーススクロール処理
function SmoothScroll(target){
	var position = $(target).offset().top;
	$("html, body").animate({scrollTop:position}, 500, "swing");

	return false;
}
