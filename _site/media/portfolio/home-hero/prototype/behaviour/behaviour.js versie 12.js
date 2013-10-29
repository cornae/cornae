/**
 * @author Andre Haveman
 * dependcies:
 * mootools v1.11 (http://mootools.net)
 */

// IE doesn't support console.log
if (typeof console == "undefined") {
	var console = {
		log : function(){}
	};
}

// set HomeHero namespace if not defined already
if (typeof HH == "undefined") {
	var HH = {};
}

HH.winLoaded = false;
HH.domReady = false;
HH.section = null;

/* ------------------------------------------------------------------------------------------------
 * Page initialization
 * ------------------------------------------------------------------------------------------------
 */



window.addEvent('domready',function() {
	HH.domReady = true;
	HH.section = document.body.id;
	
	if (HH.section=="home"){
		new ImageCrossFader("footer");
	}
	
	if (HH.section=="productInformation"){
		HH.WirelessIconFlasher.init();
	}
	
	if (HH.section=="fireSafetyTips"){
		HH.FireSafetyTips.init();
	}
	
	if (HH.section=="myHomeSafety"){
		HH.HouseCarousel.init();
	}
	
	if (document.body.className=="myHomeSafety room"){
		HH.RoomCarousel.init();
	}
	
	if (HH.section=="upcomingEvents"){
		HH.EventsCalendar.init();
	}
	
	if (HH.section=="productGallery"){
		HH.ProductGallery.init();
	}
	
});

window.addEvent('load',function() {
	HH.winLoaded = true;
	
	if (HH.section=="home"){
		HH.HomeIntro.init(5);
		HH.HomeIntro.addEvent("onFinishIntro",HH.HomeCarousel.init.bind(HH.HomeCarousel));
	}
});

/* ------------------------------------------------------------------------------------------------
 * Home page
 * ------------------------------------------------------------------------------------------------
 */
HH.HomeCarousel = {
	activeNum : 0,
	init : function(){
		this.triggers = $$("#mainMenu a");
		this.triggers[0].addClass("hover");
		this.triggers.each(function(lnk,i){
			lnk.addEvent("mouseenter",this.scrollTo.bind(this,i));
		}.bind(this));
		this.scrollEffect = new Fx.Scroll($("sectionCarousel"), {duration:800,wait:false});
		this.scrollEffect.scrollTo(0);
	},
	
	scrollTo : function(i){
		this.triggers[this.activeNum].removeClass("hover");
		this.scrollEffect.scrollTo(900*i);
		this.triggers[i].addClass("hover");
		this.activeNum = i;
	}
}

HH.HomeIntro = {
	delay : 2000,
	fadeDuration : 800,
	notStarted : false,
	init : function(slideNum){
		this.slideNum = slideNum;
		this.activeNum = 0;
		this.slides = $$("#intro li");
		this.animation = this.fadeOutSlide.periodical(this.delay,this);
	},
	
	fadeOutSlide : function(){
		var slide = this.slides[this.activeNum];
		var nextSlide = this.slides[this.activeNum+1] || null;
		if (nextSlide){
			nextSlide.setStyle("display","block");
		}
		var fadeOut = new Fx.Style(slide,"opacity",{duration:this.fadeDuration,onComplete:function(){
			slide.setStyle("display","none");
		}});
		fadeOut.start(0);
		this.activeNum++;
		if (this.activeNum>=this.slideNum){
			$clear(this.animation);
			this.fireEvent("onFinishIntro");
		}
	}
}
$extend(HH.HomeIntro,new Events);

// start image loading before domReady to ensure that they start loading before css starts with it.
//HH.pageType = $E("meta[name=pageType]") ? $E("meta[name=pageType]").getProperty("content") : "";
//if (HH.pageType=="home"){
/*if (location.href.indexOf("index.html")!=-1){
	// load intro images into cache and start animation and carousel
	HH.HomeIntro.images = [];
	for (var i=1;i<=5;i++){
		HH.HomeIntro.images.push("style/home/homeAnimation-Photo"+i+".jpg");
	}
	new Asset.images(HH.HomeIntro.images, {
		onComplete: function(){
			if (HH.domReady){
				HH.HomeIntro.init(5);
				HH.HomeIntro.addEvent("onFinishIntro",HH.HomeCarousel.init.bind(HH.HomeCarousel));
			} else {
				HH.HomeIntro.notStarted = true;
			}
		}
	});
}*/

/* ------------------------------------------------------------------------------------------------
 * Product Information
 * ------------------------------------------------------------------------------------------------
 */
HH.WirelessIconFlasher = {
	toggle : 1,
	numToggles : 0,
	init : function(){
		this.image = $("wirelessIcon");
		this.flasher = new Fx.Style(this.image,"opacity",{duration:400,onComplete:this.flash.bind(this)});
		this.flash.periodical(5000,this);
	},
	
	flash : function(){
		if (this.numToggles<4){
			this.toggle = this.toggle ? 0 : 1;
			this.flasher.start(this.toggle);
			this.numToggles++;
		} else {
			this.numToggles = 0;
		}
	}
}

HH.ProductGallery = {
	activeNum : -1,
	init : function(){
		this.products = $$("#productGalleryList a");
		this.dts = $$("#productDescriptions dt");
		this.dds = $$("#productDescriptions dd");
		this.dtFaders = [];
		this.ddFaders = [];
		
		this.products.each(function(product,i){
			product.addEvent("mouseover",this.show.bind(this,i));
		}.bind(this));
		this.dts.each(function(dt,i){
			this.dtFaders[i] = new Fx.Style(dt,"opacity",{wait:false,duration:500});
			this.dtFaders[i].set(0);
		}.bind(this));
		this.dds.each(function(dd,i){
			this.ddFaders[i] = new Fx.Style(dd,"opacity",{wait:false,duration:500});
			this.ddFaders[i].set(0);
		}.bind(this));
		this.show(0);
	},
	
	show : function(i){
		if (i!=this.activeNum){
			if (this.activeNum>=0){
				this.products[this.activeNum].removeClass("hover");
				this.dts[this.activeNum].setStyle("display","none");
				this.dtFaders[this.activeNum].set(0);
				this.dds[this.activeNum].setStyle("display","none");
				this.ddFaders[this.activeNum].set(0);
			}
			this.dtFaders[i].set(0);
			this.dts[i].setStyle("display","block");
			this.dtFaders[i].start(1);
			this.ddFaders[i].set(0);
			this.dds[i].setStyle("display","block");
			this.ddFaders[i].start(1);
			this.products[i].addClass("hover");
			this.activeNum = i;
		}
	}
}

/* ------------------------------------------------------------------------------------------------
 * Fire Safety Tips Page
 * ------------------------------------------------------------------------------------------------
 */
HH.FireSafetyTips = {
	activeBrowser : null,
	activeLink : null,
	init : function(){
		this.tipsBrowsers = {
			"Prevention" : new FingerBrowser("tipsBrowserPrevention",{closeMargin:-270,firstOpen:2}),
			"Responsive" : new FingerBrowser("tipsBrowserResponsive",{closeMargin:-270,openMargin:-100})
		}
		this.triggers = $$("#tipsBrowserMenu a");
		this.triggers.each(function(a){
			a.addEvent("click",this.showBrowser.bindAsEventListener(this,a));
		}.bind(this));
		this.showBrowser();
	},
	
	showBrowser : function(event,a){
		if (event){
			var event = new Event(event);
			event.stop();
		}
		if (!a){
			var a = this.triggers[0]
		}
		var browser = a.id.replace("trigger","");
		if (this.activeBrowser){
			this.tipsBrowsers[this.activeBrowser].hide();
		}
		if (this.activeLink){
			this.activeLink.getParent().removeClass("active")
		}
		a.getParent().addClass("active")
		this.tipsBrowsers[browser].show();
		this.activeBrowser = browser;
		this.activeLink = a;
	}
	
}

/* ------------------------------------------------------------------------------------------------
 * My Home Safety
 * ------------------------------------------------------------------------------------------------
 */
HH.HouseCarousel = {
	activeNum : -1,
	refreshDelay : null,
	flashDelay : null,
	flashSequence : null,
	init : function(){
		this.triggers = $$("#house li");
		this.fadeIn = [];
		this.fadeOut = [];
		this.numItems = this.triggers.length;
		this.triggers.each(function(lnk,i){
			lnk.addEvent("mouseenter",this.show.bindAsEventListener(this,i));
			lnk.addEvent("mouseout",this.refresh.bindAsEventListener(this,i));
			this.fadeIn[i] = new Fx.Style(lnk,"opacity",{wait:false,duration:200});
			this.fadeOut[i] = new Fx.Style(lnk,"opacity",{wait:false,duration:500}).set(0.01);
		}.bind(this));
		this.scrollEffect = new Fx.Scroll($("roomDrum"), {duration:800,wait:false});
		this.scrollEffect.scrollTo(0,0);
		
		if (HH.winLoaded){
			this.flash();
		} else {
			window.addEvent("load",this.flash.bind(this));
		}
	},
	
	show : function(event,i){
		$clear(this.refreshDelay);
		$clear(this.flashDelay);
		$clear(this.flashSequence);
		if (event){
			var event = new Event(event);
			event.stop();
		}
		if (i != this.activeNum || typeof i == "undefined"){
			if (this.activeNum>=0){
				this.fadeIn[this.activeNum].stop();
				this.fadeOut[this.activeNum].start(0.01);
				this.activeNum = -1;
			}
			if (i || i==0){
				this.scrollEffect.scrollTo(0,128*(i + 1));
				this.fadeOut[i].stop();
				this.fadeIn[i].start(1);
				this.activeNum = i;
			} else {
				this.scrollEffect.scrollTo(0,0);
			}
		}
	},
	
	refresh : function(event){
		this.refreshDelay = (function(){
			this.show();
			this.flashDelay = this.flash.delay(5000,this);
		}).delay(4000,this);
	},
	
	flash : function(){
		var i = 0;
		this.flashSequence = (function(){
			this.fadeOut[i].set(1).start(0.01);
			i++;
			if (i>=this.numItems){
				$clear(this.flashSequence);
				this.flashDelay = this.flash.delay(5000,this);
			}
		}).periodical(500,this);
	}
}


HH.RoomCarousel = {
	activeNum : -1,
	init : function(){
		this.menuItems = $$("#tipsMenu li");
		this.hotSpots = $$("#hotSpots li");
		this.dds = $$("#tips dd");
		this.hotSpotFaders = [];
		this.ddFaders = [];
		
		this.hotSpots.each(function(hotSpot,i){
			hotSpot.addEvent("mouseover",this.show.bind(this,i));
			this.hotSpotFaders[i] = new Fx.Style(hotSpot,"opacity",{wait:false});
			this.hotSpotFaders[i].set(0.01);
		}.bind(this));
		this.menuItems.each(function(menuItem,i){
			menuItem.addEvent("mouseover",this.show.bind(this,i));
		}.bind(this));
		this.dds.each(function(dd,i){
			this.ddFaders[i] = new Fx.Style(dd,"opacity",{wait:false});
			this.ddFaders[i].set(0);
			
		}.bind(this));
		this.show(0);
	},
	
	show : function(i){
		if (i!=this.activeNum){
			if (this.activeNum>=0){
				this.hotSpotFaders[this.activeNum].start(0.01);
				this.menuItems[this.activeNum].removeClass("active");
				this.dds[this.activeNum].setStyle("display","none");
				this.ddFaders[this.activeNum].set(0);
			}
			this.hotSpotFaders[i].start(1);
			this.ddFaders[i].set(0);
			this.dds[i].setStyle("display","block");
			this.ddFaders[i].start(1);
			this.menuItems[i].addClass("active");
			this.activeNum = i;
		}
	}
}

/* ------------------------------------------------------------------------------------------------
 * Upcoming events
 * ------------------------------------------------------------------------------------------------
 */
HH.EventsCalendar = {
	activeEvent : null,
	init : function(){
		this.container = $("footerSectionA");
		this.detailsContainer = $("eventDescription");
		this.monthImage = $E("#eventIllustration img");
		this.eventsLoader = new Ajax('', {
			method : 'get',
			update : "footerSectionA",
			autoCancel : true,
			onComplete : this.showMonth.bind(this),
			onFailure : this.onFailure.bind(this)
		});
		
		this.calendar = HH.Calendar;
		this.calendar.addEvent("onMonthChange",this.getMonth.bind(this))
		this.calendar.init();
	},
	
	getMonth : function(month, year){
		var url = month.toLowerCase() + year + ".html";
		this.eventsLoader.url = url;
		this.eventsLoader.request();
		var newSrc = 'media/upComingEvents-'+month.toLowerCase()+'-'+year+'.jpg';
		var newImage = new Asset.image(newSrc, {width:504,height:286,onload: function(){
			this.monthImage.src = newSrc;
		}.bind(this)});
	},
	
	showMonth : function(responseText,responseXML){
		this.events = this.container.getElements("li");
		this.eventDescriptions = this.container.getElements(".event");
		this.events.each(function(event,i){
			event.addEvents({
				"mouseenter" : this.hoverEvent.bindAsEventListener(this,i),
				"click" : this.showEvent.bindAsEventListener(this,i),
				"mouseleave" : this.hoverEvent.bindAsEventListener(this)
			});
			var dates = event.getElement("a").innerHTML.match(/[0-9]+/g);
			var dates = dates.map(function(date){
				return parseInt(date);
			});
			event.dates = dates;
			this.calendar.showRange(dates,"highlight");
			
		}.bind(this));
		this.activeEvent = null;
		this.showEvent(null,0);
	},
	
	hoverEvent : function(evt,i){
		if (i || i==0){
			this.calendar.showRange(this.events[i].dates,"hover");
		} else {
			this.calendar.clearCells("hover");
		}
	},
	
	showEvent : function(evt,i){
		if (evt){
			var event = new Event(evt);
			event.stop();
		}
		if (this.activeEvent){
			this.activeEvent.removeClass("active");
		}
		this.activeEvent = this.events[i];
		this.activeEvent.addClass("active");
		
		this.calendar.showRange(this.activeEvent.dates,"active");
		this.detailsContainer.innerHTML = this.eventDescriptions[i].innerHTML;
	},
	
	onFailure : function(){
		
	}
}


/* ------------------------------------------------------------------------------------------------
 * User interface widgets
 * ------------------------------------------------------------------------------------------------
 */

var FingerBrowser = new Class({
	activeFinger : -1,
	initialize : function(element,options){
		this.options = $extend({
			closeMargin : -270,
			openMargin : 0,
			firstOpen : 0
		},options || {});
		console.log("initialize HH.Fingers on: " + element);
		this.element = $(element);
		this.fadeDt = [];
		this.fadeDd = [];
		this.element.getElements("dt").each(function(dt,i){
			dt.addEvent("mouseenter",this.showFinger.bind(this,i));
			var a = dt.getElement("a");
			if (a){
				var url = a.href;
				dt.addEvent("click",function(){
					location.href = url;
				});
			}
			this.fadeDt[i] = new Fx.Style(dt,"margin-left",{wait:false});
		}.bind(this));
		this.element.getElements("dd").each(function(dd,i){
			dd.addEvent("mouseenter",this.showFinger.bind(this,i));
			this.fadeDd[i] = new Fx.Style(dd,"margin-left",{wait:false});
		}.bind(this));
	},
	
	showFinger : function(i){
		if (this.activeFinger!=i){
			if (this.activeFinger>=0){
				this.fadeDt[this.activeFinger].start(this.options.closeMargin);
				this.fadeDd[this.activeFinger].start(this.options.closeMargin);
				this.activeFinger = -1;
			}
			if (i || i==0){
				this.activeFinger = i;
				this.fadeDt[i].start(this.options.openMargin);
				this.fadeDd[i].start(this.options.openMargin);
			}
		}
	},
	
	show : function(){
		this.element.setStyle("display","block");
		this.showFinger(this.options.firstOpen);
	},
	
	hide : function(){
		this.element.setStyle("display","none");
		this.showFinger();
	}
});

var ImageCrossFader = new Class({
	z : 1,
	faders : [],
	activeSection : -1,
	initialize : function(elementId){
		this.element = $(elementId);
		this.triggers = this.element.getElements("p");
		this.images = this.element.getElements("img");
		this.triggers.each(function(trigger,i){
			trigger.getElement("a").addEvent("mouseover",this.showSection.bind(this,i));
			this.faders[i] = new Fx.Style(this.images[i], 'opacity', {wait:false,duration: 500}).set(0);
			this.images[i].setStyle("display","block");
		}.bind(this));
		this.showSection(0);
	},
	
	showSection : function(i){
		if (i != this.activeSection){
			if (this.activeSection>=0){
				this.faders[this.activeSection].start(0);
				this.triggers[this.activeSection].removeClass("active");
			}
			this.triggers[i].addClass("active");
			this.images[i].setStyle("z-index",this.z++);
			this.faders[i].start(1);
			this.activeSection = i;
		}
	}
});

HH.Calendar = {
	init: function(){
		this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		this.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		this.dayCells = [null];
		
		// set initial month and year
		var date = new Date();
		this.month = date.getMonth();
		this.year = date.getFullYear();
		this.monthIndex = 0;
		
		this.container = $("calendar");
		
		this.next = this.container.getElement(".next");
		this.previous = this.container.getElement(".previous");
		this.monthDisplay = this.container.getElement(".month th");
		this.calTableTbody = this.container.getElement("tbody");
		
		this.next.addEvent("click",this.nextMonth.bindAsEventListener(this));
		this.previous.addEvent("click",this.previousMonth.bindAsEventListener(this));
		this.previous.addClass("disabled");
		this.create();
		
	},
	
	create: function(){
		this.clear();
		this.fireEvent("onMonthChange",[this.monthNames[this.month],this.year]);
		
		/** create the date object */
		var date = new Date();
		date.setFullYear(this.year, this.month, 1);
		this.year % 4 == 0 ? this.daysInMonth[1] = 29 : this.daysInMonth[1] = 28;
		
		/** set the day to first of the month */
		var firstDay = 1 - date.getDay();
		
		/** create the day cells */
		var weeks = 0;
		while (firstDay <= this.daysInMonth[this.month]){
			calDayRow = new Element('tr');
			for (i = 0; i < 7; i++){
				if ((firstDay <= this.daysInMonth[this.month]) && (firstDay > 0)){
					calDayCell = new Element('td', {'id':'cal'+firstDay, 'axis':this.year + '|' + (parseInt(this.month) + 1) + '|' + firstDay}).appendText(firstDay).injectInside(calDayRow);
				} else {
					calDayCell = new Element('td',{'id':'cal'+firstDay}).appendText(' ').injectInside(calDayRow);
				}
				if (firstDay>0){
					this.dayCells[firstDay] = calDayCell;
				}
				firstDay++;
			}
			calDayRow.injectInside(this.calTableTbody);
			weeks++;
		}
		this.daysDisplayed = firstDay - 1;
		if (weeks>5){
			this.container.addClass("sixWeeks");
		} else {
			this.container.removeClass("sixWeeks");
		}
		this.monthDisplay.childNodes[1].nodeValue = this.monthNames[this.month] + " " + this.year;
	},
	
	nextMonth : function(event){
		if (event){
			var event = new Event(event);
			event.stop();
		}
		if (this.monthIndex<11){
			this.month++;
			this.monthIndex++;
			if (this.month>=12) {
				this.month = 0;
				this.year++;
			}
			this.create();
			this.previous.removeClass("disabled");
			if (this.monthIndex>=11){
				this.next.addClass("disabled");
			}
		}
	},
	
	previousMonth : function(event){
		if (event){
			var event = new Event(event);
			event.stop();
		}
		if (this.monthIndex>0){
			this.month--;
			this.monthIndex--;
			if (this.month<0) {
				this.month = 11;
				this.year--;
			}
			this.create();
			this.next.removeClass("disabled");
			if (this.monthIndex<=0){
				this.previous.addClass("disabled");
			}
		}
	},
	
	showRange : function(dates,className){
		if (className != "highlight"){
			this.clearCells(className);
		}
		if(!dates[1]){
			dates[1] = dates[0];
		}
		var endDate = (dates[1]<dates[0]) ? this.daysInMonth[this.month]+dates[1] : dates[1];
		if (endDate > this.daysDisplayed) {
			endDate = this.daysDisplayed;
		}
		for (var i = dates[0];i<=endDate;i++){
			this.dayCells[i].addClass(className);
		}
	},
	
	clearCells : function(className){
		this.dayCells.each(function(cell){
			if (cell){
				cell.removeClass(className);
			}
		});
	},
	
	clear: function(){
		this.calTableTbody.getElements("tr").each(function(node){
			node.remove();
		});
	}
};
$extend(HH.Calendar,new Events);
