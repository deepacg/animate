$(document).ready(function(){
	var left_val = 0
	var top_val = 0
	$(document).keydown(function(e){
		var action = e.keyCode
		// console.log(e.keyCode)
		if(action == 37) {
			// move left
			left_val -= 10
			$('#mario').css('left', left_val)
		}
		else if(action == 39){
			// move right
			left_val += 10
			$('#mario').css('left', left_val)
		}
		else if(action == 38){
			// move up
			top_val -= 10
			$('#mario').css('top', top_val)
		}
		else if(action == 40){
			// move down
			top_val += 10
			$('#mario').css('top', top_val)
		}
	})
})