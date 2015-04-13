$(document).ready(function(){
	$("body").attr("press","0");

	$("#test").swipe( {
        swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
          /*var str = "<h4>Swipe Phase : " + phase + "<br/>";
          str += "Direction from inital touch: " + direction + "<br/>";
          str += "Distance from inital touch: " + distance + "<br/>";
          str += "Duration of swipe: " + duration + "<br/>";
          str += "Fingers used: " + fingers + "<br/></h4>";

          //Here we can check the:
          //phase : 'start', 'move', 'end', 'cancel'
          //direction : 'left', 'right', 'up', 'down'
          //distance : Distance finger is from initial touch point in px
          //duration : Length of swipe in MS 
          //fingerCount : the number of fingers used
          if (phase!="cancel" && phase!="end") {
            if (duration<5000)
              str +="Under maxTimeThreshold.<h3>Swipe handler will be triggered if you release at this point.</h3>"
            else
              str +="Over maxTimeThreshold. <h3>Swipe handler will be canceled if you release at this point.</h3>"
          
            if (distance<200)
              str +="Not yet reached threshold.  <h3>Swipe will be canceled if you release at this point.</h3>"
            else
              str +="Threshold reached <h3>Swipe handler will be triggered if you release at this point.</h3>"
          }
          
          if (phase=="cancel")
            str +="<br/>Handler not triggered. <br/> One or both of the thresholds was not met "
          if (phase=="end")
            str +="<br/>Handler was triggered."  
          
          $("#test").html(str);*/


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
			//console.log(e.keyCode);
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

	/*$(".card").click(function(){
		var page = $(this).attr('id');
		$.get( page+".php").done(function(data){
				$(".container").html(data).trigger('create');
			});
	});

	$(document).delegate(".card2","click",function(){
		var gpio = $(this).attr('gpio');
		var mode = $(this).attr('mode');
	    var bulb = $(this).attr('bulb');
	    if($(this).attr("level") == "1"){
	    	var new_level = 0;
	    }else{
	    	var new_level = 1;
	    }
	    console.log(new_level);
			//console.log("gpio "+ gpio + " mode " + mode);
		if(bulb == "true"){
			$.post( "control.php",{
		        gpio:gpio,
		        mode:new_level
	        });
	        if($(this).attr("level") == "1"){
		    	$(this).attr("level",0);
		    }else{
		    	$(this).attr("level",1);
		    }

	    }else{
	    	console.log(mode);
	      if (mode == "on"){      
	        $(this).attr('mode','off');
	        $(this).addClass("activeYes");
	        $(this).removeClass("activeNo");
	         mode = 1;
	      }
	      else{
	        $(this).attr('mode','on');
	        $(this).removeClass("activeYes");
	        $(this).addClass("activeNo");
	        mode = 0;
	      }

	      $.post( "control.php",{
	        gpio:gpio,
	        mode:mode
	      });
	    }
    
	});

	


	$(".control_button").click(function(){
		var mode = $(this).attr("mode");
		var gpio = $(this).attr("gpio");

		if(mode == "on"){
			$.post("control.php",{
				mode : mode,
				pin  : gpio
			});
			$(this).removeClass("btn-default");
			$(this).addClass("btn-success");
			$(this).attr("mode","off");
		}
		else if (mode == "off"){
			$.post("control.php",{
				mode : mode,
				pin  : gpio
			});
			$(this).removeClass("btn-success");
			$(this).addClass("btn-default");
			$(this).attr("mode","on");
		}
	});*/

	 

});