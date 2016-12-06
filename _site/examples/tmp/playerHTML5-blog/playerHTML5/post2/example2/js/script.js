
$(document).ready(function()
{
	audio = document.getElementById('audio');
	time = document.getElementById('time');
	
	$("#play-pause").click(function()
	{
		time.max = audio.duration;
		timeInterval = setInterval("atualizaTime()", 700);
		if(audio.paused)
		{
			audio.play();
			$("#play-pause").text("pause");
		} else 
		{
			audio.pause();
			$("#play-pause").text("play");
		}
	});
	$("#time").change(function()
	{
		audio.currentTime = $("#time").val();
	});
	$("#time").mousedown(function(){
		clearInterval(timeInterval);
	});
	$("#time").mouseup(function(){
		timeInterval = setInterval("atualizaTime()", 700);
	});
	
	$("#mudo").click(function()
	{
		if(audio.muted)
			audio.muted = false;	
		else 
			audio.muted = true;

	});
	$("#vol").change(function()
	{
		if(audio.muted)
			muted();
		
		audio.volume = $("#vol").val();
		
	});
	
atualizaTime = function()
{
	$("#time").val(audio.currentTime);
}
muted = function()
{
	if(audio.muted)
		audio.muted = false;		
	else 
		audio.muted = true;		
}


});
