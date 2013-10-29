// style switcher v1.1
// JavaScript Document
// Dependencies: cookie.js, flexOnload.js

var SKIN_NAME = 'skin'; // cookie name
var SKIN_EXPIRES = 60 * 60 * 24 * 31; // one month (in seconds)
var SKIN_SELECTOR = 'styleSwitcher'; // selectbox name/id




function activateStyle(title)
{
	var aLinkList = document.getElementsByTagName("link");
	for(var idx=0; idx<aLinkList.length; idx++)
	{
		if(aLinkList[idx].getAttribute("rel")
			&& aLinkList[idx].getAttribute("rel").indexOf("style") != -1
			&& aLinkList[idx].getAttribute("title"))
		{
			aLinkList[idx].disabled = true;
			if(aLinkList[idx].getAttribute("title") == title)
			{
				aLinkList[idx].disabled = false;
			}
		}
	}
	saveStyle(title);
}

function setSelector(title)
{
	var selector = document.getElementById(SKIN_SELECTOR);
	for(var idx = 0; idx < selector.length; idx++)
	{
		if(selector.options[idx].value == title)
		{
			selector.options[idx].selected = true;
			break;
		}
	}
}

function saveStyle(title)
{
	var expiresDate = new Date();
	expiresDate.setTime(expiresDate.getTime() + (SKIN_EXPIRES * 1000));


	setCookie(SKIN_NAME, title, expiresDate);
}

function loadStyle()
{
	var title = getCookie(SKIN_NAME);
	if(title)
	{
		setSelector(title);
		activateStyle(title);
	}
}

function removeStyle()
{
	deleteCookie(SKIN_NAME);
}

// add loadStyle to onload function
flexOnloadRegister("loadStyle()");



