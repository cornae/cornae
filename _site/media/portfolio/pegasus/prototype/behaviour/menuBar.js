

var delay = 1.5; // in seconds
var handles = new Array();
var timeout = new Array();
delay *= 1000;

//
sfHover = function() 
{
	var li_list = document.getElementById("mainMenu").getElementsByTagName("LI");
	for(var i=0; i<li_list.length; i++) 
	{
		li_list[i].onmouseover = function()
		{
			this.className += " open";
			closeOtherSfHover(this);
		}
		
		li_list[i].onmouseout = function()
		{
			var hc = handles.length;
			handles[hc] = this;
			timeout[hc] = setTimeout("closeSfHover(" + hc + ")", delay);
			//this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}

function closeSfHover(i)
{
	if(handles && handles[i])
	{
		handles[i].className = handles[i].className.replace("open", "");
		handles[i] = null;

		if(timeout[i]) 
		{
			clearTimeout(timeout[i]);
			timeout[i] = null;
		}
	}
}

//
function closeOtherSfHover(p)
{
	if(!p || !handles) return;	
	var new_handles = new Array(); // used to clean-up references list
	var new_timeout = new Array(); // used to clean-up references list
	
	for(var i=0; i<handles.length; i++)
	{
		if(handles[i])
		{
			if(!isParent(handles[i], p) && !isParent(p, handles[i]))
			{
				closeSfHover(i);
			}
			else
			{
				new_handles[new_handles.length] = handles[i];
				new_timeout[new_timeout.length] = timeout[i];
			}
		}
	}
	handles = new_handles;
	timeout = new_timeout;
}

//
function isParent(child, parent)
{
	if(!child || !parent)
	{
		return false;
	}
	
	if(child.parentNode == parent)
	{
		return true;
	}
	
	return isParent(child.parentNode, parent);
}
