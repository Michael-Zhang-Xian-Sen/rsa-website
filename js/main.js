$(document).ready(function(){
	$("#suggestion").click(suggestionToggle);
	$("#friendlyLink").click(friendlyToggle)
})

function suggestionToggle(){
	// 如果cube1当前为隐藏状态
	if($(".cube1").hasClass("hide")){
		// 如果cube2当前也为隐藏状态
		if($(".cube2").hasClass("hide")){
			$(".cube1").removeClass("hide");
		}else{
			$(".cube2").addClass("hide");
			$(".cube1").removeClass("hide");
		}
	}else{
		$(".cube1").addClass("hide");
	}
}

function friendlyToggle(){
	if($(".cube2").hasClass("hide")){
		// 如果cube2当前也为隐藏状态
		if($(".cube1").hasClass("hide")){
			$(".cube2").removeClass("hide");
		}else{
			$(".cube1").addClass("hide");
			$(".cube2").removeClass("hide");
		}
	}else{
		$(".cube2").addClass("hide");
	}
}