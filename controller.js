$(document).ready(function(){
	$("body").attr("press","0");

	$("#test").swipe( {
        swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
          if(phase == "cancel" || phase == "end"){
          	if($("body").attr("press") == "1"){
				$("body").attr("press","0");
			}
          	console.log("gasi");
          	$.post( "control.php",{
		        direction : "up",
		        mode      : "off"
	      	});
          }
          if(phase == "move"){
          	if($("body").attr("press") == "0"){
				$("body").attr("press","1");
	          	switch(direction){
	          		case "up":
	          			$.post( "control.php",{
					        direction : "up",
					        mode      : "on"
				      	});
	          			break;
	          		case "down":
	          			$.post( "control.php",{
					        direction : "down",
					        mode      : "on"
				      	});
	          			break;
	          		case "left":
	          			$.post( "control.php",{
					        direction : "left",
					        mode      : "on"
				      	});
	          			break;
	          		case "right":
	          			$.post( "control.php",{
					        direction : "right",
					        mode      : "on"
				      	});
	          			break;	
	          	}
	        }

          }
        },
        threshold:200,
        maxTimeThreshold:5000,
        fingers:'all'
      });

	$(".btnRover").mousedown(function(){
		var direction = $(this).attr("move");
		console.log("Moving " + direction);
		$.post( "control.php",{
	        direction : direction,
	        mode      : "on"
      	});
	});
	$(".btnRover").mouseup(function(){
		var direction = $(this).attr("move");
		console.log("Stoped moving " + direction);
		$.post( "control.php",{
	        direction : direction,
	        mode      : "off"
      	});
	});
	

	$(document).delegate(document,"keydown",function(e){
		if($("body").attr("press") == "0"){
			$("body").attr("press","1");
			switch(e.keyCode){
				case 87:
				case 38:
					var direction = $(this).attr("move");
					$.post( "control.php",{
				        direction : "up",
				        mode      : "on"
			      	});
					break;
				case 65:
				case 37:
					var direction = $(this).attr("move");
					$.post( "control.php",{
				        direction : "left",
				        mode      : "on"
			      	});
					break;
				case 68:
				case 39:
					var direction = $(this).attr("move");
					$.post( "control.php",{
				        direction : "right",
				        mode      : "on"
			      	});
					break;
				case 83:
				case 40:
					var direction = $(this).attr("move");
					$.post( "control.php",{
				        direction : "down",
				        mode      : "on"
			      	});
					break;
				case 32:
					$.post( "control.php",{
				        mode2      : "on"
			      	});
					break;
			}
		}
	});

	$(document).delegate(document,"keyup",function(e){
		if($("body").attr("press") == "1"){
			$("body").attr("press","0");
		}
		switch(e.keyCode){
			case 87:
			case 38:
				var direction = $(this).attr("move");
				$.post( "control.php",{
			        direction : "up",
			        mode      : "off"
		      	});
				break;
			case 65:
			case 37:
				var direction = $(this).attr("move");
				$.post( "control.php",{
			        direction : "left",
			        mode      : "off"
		      	});
				break;
			case 68:
			case 39:
				var direction = $(this).attr("move");
				$.post( "control.php",{
			        direction : "right",
			        mode      : "off"
		      	});
				break;
			case 83:
			case 40:
				var direction = $(this).attr("move");
				$.post( "control.php",{
			        direction : "down",
			        mode      : "off"
		      	});
				break;
			case 32:
					$.post( "control.php",{
				        mode2      : "off"
			      	});
					break;
		}
	});

	$(".btnLazer").mousedown(function(){
		$.post( "control.php",{
	        mode2      : "on"
      	});
	});
	$(".btnLazer").mouseup(function(){
		$.post( "control.php",{
	        mode2      : "off"
      	});
	});

	
});
