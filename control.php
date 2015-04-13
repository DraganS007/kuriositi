<?php
	if(isset($_POST["gpio"])){
		$gpio = $_POST["gpio"];
		$mode = $_POST["mode"];
		
		exec("gpio -g write $gpio $mode");
	}
	
	if(isset($_POST["mode2"])){
		$mode2 = $_POST["mode2"];
		switch ($mode2) {
			case 'on':
				exec("gpio -g write 27 1");
				break;
			case 'off':
				exec("gpio -g write 27 0");
				break;
		}
	}
	if(isset($_POST["mode"])){
		$direction = $_POST["direction"];
		$mode      = $_POST["mode"];
		$pin1      = 2;
		$pin2      = 3;
		$pin3      = 4;
		$pin4      = 17;
		$bit;
		$bit2;
		if($mode == "on"){
			$bit  = 1;
			$bit2 = 0;
		}elseif($mode == "off"){
			$bit  = 0;
			$bit2 = 0;
		}
		switch ($direction) {
			case 'up':				
				exec("gpio -g write $pin1 $bit");
				exec("gpio -g write $pin2 $bit2");
				exec("gpio -g write $pin3 $bit");
				exec("gpio -g write $pin4 $bit2");
				break;
			case 'down':
				exec("gpio -g write $pin1 $bit2");
				exec("gpio -g write $pin2 $bit");
				exec("gpio -g write $pin3 $bit2");
				exec("gpio -g write $pin4 $bit");
				break;
			case 'left':
				exec("gpio -g write $pin1 $bit");
				exec("gpio -g write $pin2 $bit2");
				exec("gpio -g write $pin3 $bit2");
				exec("gpio -g write $pin4 $bit");
				break;
			case 'right':
				exec("gpio -g write $pin1 $bit2");
				exec("gpio -g write $pin2 $bit");
				exec("gpio -g write $pin3 $bit");
				exec("gpio -g write $pin4 $bit2");
				break;
		}
	}
	
?>