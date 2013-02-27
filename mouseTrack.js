var mousedown = false
var mx,my,nx,ny,count,phi
var move="", omove, tmove
var pi =3.14159

document.onmousedown = function(event)
{
	//right mouse click
	if(event.which == 3)
	{
		count = 0
		my = event.pageX;
		mx = event.pageY;
		mousedown = true
	}
};

document.onmouseup = function(event)
{
	//right mouse click
	if(event.which == 3)
	{
		if(move != "")
		{
			exeFunc()
			mousedown = false
		}
		else
		{
			var contextMenu = $find("<%= RadMenu1.ClientID %>");
			contextMenu.show(args);
		}
	}
};


document.onmousemove = function(event)
{
	//track the mouse if we are holding the right button
	if(mousedown)
	{
		ny = event.pageX;
		nx = event.pageY;
		var r = Math.sqrt(Math.pow(nx-mx,2)+Math.pow(ny-my,2))
		if(r > 9)
		{
			phi = Math.atan2(ny-my,nx-mx)
			if(phi < 0) phi += 2.*pi
			if(phi >= pi/4. && phi < 3.*pi/4.)
				tmove="right"
			else if(phi >= 3.*pi/4. && phi < 5.*pi/4.)
				tmove="up"
			else if(phi >= 5.*pi/4. && phi < 7.*pi/4.)
				tmove="left"
			else if(phi >= 7.*pi/4. || phi < pi/4.)
				tmove="down"
			mx = nx
			my = ny
			if(tmove != omove)
			{
				move += tmove
				omove = tmove
			}
		}
	}
};

function exeFunc()
{
	if(move == "left") window.history.back()
	else if(move == "right") window.history.forward()
	else if(move == "up") window.open()
 	else if(move == "updown") 
	{
		 window.open('','_self',''); 
		 self.close()
	}
}


document.oncontextmenu = function()
{
// 	if(move != "")
// 		move = ""
		return false;
// 	else
// 		return true
};