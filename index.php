<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>НАСА</title>

	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap-theme.min.css">
	<link href="css/bootstrap.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">

	<script src="js/jquery-2.1.1.js"></script>	
	<script src="js/bootstrap.min.js"></script>	
	<script src="js/jquery.touchSwipe.min.js"></script>

	<script src="controller.js"></script>

</head>
<body>
		<?php
			exec("gpio -g  mode 2  out");
			exec("gpio -g  mode 3  out");
			exec("gpio -g  mode 4  out");
			exec("gpio -g  mode 17 out");
			exec("gpio -g  mode 27 out");

			exec("gpio -g write 2  0");
			exec("gpio -g write 3  0");
			exec("gpio -g write 4  0");
			exec("gpio -g write 17 0");
			exec("gpio -g write 27 0");
		?>
	

		<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12 title" href="index.php">
						<h1>КУРИОСИТИ 
						<span class="sub-title">DIY</span></h1>
					</div>
				</div>
			<div class="wrapCenter">
				
				<br>
				<div class="row">
					<div class="col-xs-12">
						<div class="btnRover" id="moveUp" move="up">
							ONWARDS
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-6">
						<div class="btnRover" id="moveLeft" move="left">
							LEFT
						</div>
					</div>
					<div class="col-xs-6">
						<div class="btnRover" id="moveRight" move="right">
							RIGHT 
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<div class="btnRover" id="moveBack" move="down">
							REVERSE
						</div>
					</div>
				</div>
				<br>
				<br>
				<br>
				<div class="row">
					<div class="col-xs-12">
						<div class="btnLazer">
							SECRET WEAPON
						</div>
					</div>
				</div>
				<br>
				<br>
				<div class="row">
					<div class="col-xs-12">
						<div id="test">
						</div>
					</div>
				</div>
			</div>
		</div>	
	
	</center>
	<br/>

</body>
</html>