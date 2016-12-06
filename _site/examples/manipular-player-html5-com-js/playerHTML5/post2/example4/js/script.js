
$(document).ready(function(){
	audio = document.getElementById('audio');
	time = document.getElementById('time');
	
	$("#play-pause").click(function(){
		time.max = audio.duration;
		timeInterval = setInterval("atualizaTime()", 700);
		if(audio.paused){
			audio.play();
			$("#play-pause").removeClass("fa-play").addClass("fa-pause");
		} else {
			audio.pause();
			$("#play-pause").removeClass("fa-pause").addClass("fa-play");
			
		}
	});
	$("#time").change(function(){
		audio.currentTime = $("#time").val();
	});
	$("#time").mousedown(function(){
		clearInterval(timeInterval);
	});
	$("#time").mouseup(function(){
		timeInterval = setInterval("atualizaTime()", 700);
	});
	$("#mudo").click(function(){
		if(audio.muted)
			$("#vol").val(audio.volume);
		muted();
	});
	$("#vol").change(function(){
		if(audio.muted)
			muted();
		
		audio.volume = $("#vol").val();
		
	});
	
	
atualizaTime = function(){
	$("#time").val(audio.currentTime);
}
muted = function(){
	if(audio.muted){
			audio.muted = false;
			$("#mudo").removeClass("fa-volume-off").addClass("fa-volume-up");
			
		} else {
			audio.muted = true;
			$("#mudo").removeClass("fa-volume-up").addClass("fa-volume-off");
			$("#vol").val(0);
		}
}

});

