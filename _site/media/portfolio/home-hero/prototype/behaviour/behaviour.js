/**
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
	HH.documentBody = $(document.body);
	
	if (HH.section=="home"){
		new ImageCrossFader("footer");
	}
	
	if (HH.section=="productInformation"){
		HH.WirelessIconFlasher.init();
	}
	
	if (HH.documentBody.hasClass("productDetails")){
		if ($("illustrationSection")){
			$("illustrationSection").setStyle("display","block");
			HH.DoorMat.addEvent("beforeOpen",HH.QuickTimeVR.hide);
			HH.DoorMat.addEvent("afterClose",HH.QuickTimeVR.show);
			HH.OutboundLinks.addEvent("beforeOpen",HH.QuickTimeVR.hide);
			HH.OutboundLinks.addEvent("afterClose",HH.QuickTimeVR.show);	
		}
	}
	
	if (HH.section=="fireSafetyTips"){
		HH.FireSafetyTips.init();
		new ImageCrossFader("footerSectionB");
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
	
	if (HH.section=="faq"){
		new SmoothScroll();
	}
	
	if (HH.section!="home"){
		HH.DoorMat.init();
	}
	
	HH.OutboundLinks.init();
});

window.addEvent('load',function() {
	HH.winLoaded = true;
	
	if (HH.section=="home"){
		HH.HomeIntro.init(5);
		HH.HomeIntro.addEvent("onFinishIntro",HH.HomeCarousel.init.bind(HH.HomeCarousel));
	}
	
	if (HH.section=="productDetails-fireExtinguisher"){
		HH.ProductDetails.loadQuicktimeVR("fireExtinguisher",360,480);
	}
	
	if (HH.section=="productDetails-smokeAlarm"){
		HH.ProductDetails.loadQuicktimeVR("smokeAlarm",360,270);
	}
	
	if (HH.section=="productAward"){
		HH.ProductAwardGallery.init();
	}
});

HH.QuickTimeVR = {
	show : function(){
		if (window.ie){
			$("illustrationSection").setStyle("display","block");
			if (HH.section=="productDetails-fireExtinguisher"){
				HH.ProductDetails.loadQuicktimeVR("fireExtinguisher",360,480);
			}
			if (HH.section=="productDetails-smokeAlarm"){
				HH.ProductDetails.loadQuicktimeVR("smokeAlarm",360,270);
			}
		} else {
			$("illustrationSection").setStyle("visibility","visible");
		}
	},
	
	hide : function(){
		if (window.ie){
			$("illustrationSection").setStyle("display","none");
		} else {
			$("illustrationSection").setStyle("visibility","hidden");
		}
	}
}

/* ------------------------------------------------------------------------------------------------
 * Outbound links
 * ------------------------------------------------------------------------------------------------
 */
HH.OutboundLinks = {
	dialogOpen : false,
	init : function(){
		this.initScope(document);
	},
	
	initScope : function(scope){
		var outBoundLinks = $(scope).getElements("a[rel=outbound]");
		if (outBoundLinks.length>0){
			outBoundLinks.each(function(a){
				a.addEvent("click",this.showWarning.bindAsEventListener(this,a))
			}.bind(this));
			if (!this.panel){
				this.createPanel();
			}
		}
	},
	
	createPanel : function(){
		this.panel = new Element('div').setProperties({"id":"outboundWarning","class":"panel"}).injectInside(document.body);
		if (window.ie && !window.ie7){
			this.panel.setStyle("position","absolute");
			this.scrollEffect = new Fx.Scroll(window);
		}
		this.panelEffect = new Fx.Style(this.panel,"top",{wait:false,onComplete:this.afterAnimation.bind(this)});
		this.panelEffect.set(-430);
		new Ajax("outboundWarning.html",{method: "get",update:this.panel,onComplete:function(){
			$("outboundCancel").addEvent("click",this.closePanel.bindAsEventListener(this));
			$("outboundContinue").addEvent("click",this.followLink.bindAsEventListener(this));
		}.bind(this)}).request();
	},
	
	afterAnimation : function(){
		if (this.dialogOpen){
			this.fireEvent("afterClose");
			this.dialogOpen = false;
		} else {
			this.dialogOpen = true;
		}
	},
	
	showWarning : function(evt,a){
		this.fireEvent("beforeOpen");
		var event = new Event(evt);
		event.stop();
		this.url = a.href;
		this.panelEffect.start(0);
		if (this.scrollEffect){
			this.scrollEffect.scrollTo(0,0);
		}
	},
	
	followLink : function(event){
		if (event){
			var event = new Event(event);
			event.stop();
		}
		if (this.url) {
			location.href = this.url;
		}
	},
	
	closePanel : function(event){
		if (event){
			var event = new Event(event);
			event.stop();
		}
		this.panelEffect.start(-430);
	}
}
$extend(HH.OutboundLinks,new Events);

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

HH.ProductDetails = {
	loadQuicktimeVR : function(name,width,height){
		var container = $("illustrationSection");
		var html = '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="'+width+'" height="'+height+'" id="illustration">';
		html += '<param name="src" value="media/'+name+'.mov" />';
		html += '<param name="controller" value="false" />';
		html += '<param name="autoplay" value="false" />';
		html += '<embed type="video/quicktime" src="media/'+name+'.mov" name="illustration" width="'+width+'" height="'+height+'" pluginspage="http://www.apple.com/quicktime/download/" controller="false" autoplay="false" enablejavascript="true" target="QuickTimePlayer" />';
		html += '<param name="autoplay" value="true" />';
		html += '<param name="controller" value="false" />';
		html += '</object>';
		container.innerHTML = html;
	}
}

HH.ProductAwardGallery = {
	images : [],
	activeIndex : 0,
	loaded : null,
	
	init : function(){
		this.thumbnails = $$("#viewBrowser a");
		this.thumbnails.each(function(thumb,i){
			this.images[i] = thumb.href;
			thumb.addEvent("mouseover",this.show.bind(this,i));
			thumb.addEvent("click",function(evt){
				var event = new Event(evt);
				event.stop();
			});
		},this);
		new Asset.images(this.images, {
    		onComplete: this.start.bind(this)
    	});
		this.image = $("gallery");
		this.fade = new Fx.Style(this.image,"opacity",{wait:false,duration:100});
	},
	
	start : function(){
		this.loaded = 1;
	},
	
	show : function(i){
		if (i!=this.activeIndex && this.loaded){
			this.fade.start(0).chain(function(){
				this.image.src = this.images[i];
				this.fade.start(1);
				this.activeIndex = i;
			}.bind(this));
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
	activeNum : 0,
	init : function(){
		this.tipsBrowsers = {
			"preventionFirst" : new FingerBrowser("tipsBrowserPrevention",{closeMargin:-270,firstOpen:-1}),
			"responsiveAction" : new FingerBrowser("tipsBrowserResponsive",{closeMargin:-270,openMargin:-100})
		}
		this.triggers = $$("#tipsBrowserMenu a");
		this.triggers[0].href = "#preventionFirst";
		this.triggers[1].href = "#responsiveAction";
		this.triggers.each(function(a,i){
			a.addEvent("click",this.showBrowser.bind(this,i));
		}.bind(this));
		
		var initialBrowser = null;
		if (location.hash && location.hash != ""){
			initialBrowser = location.hash.substring(1);
		}
		if (initialBrowser){
			if (initialBrowser == "responsiveAction"){
				this.activeBrowser = "preventionFirst";
				this.activeNum = 1;
			} else if (initialBrowser == "preventionFirst"){
				this.activeBrowser = "responsiveAction";
				this.activeNum = 0;
			}
		}
		if (this.activeNum>=0){
			this.showBrowser(this.activeNum);
		}
		if (!HH.DoorMat.loaded){
			HH.DoorMat.addEvent("load",this.initMainMenu.bind(this));
		} else {
			this.initMainMenu();
		}
	},
	
	initMainMenu : function(){
		this.doormatLnks = $$("#menuFireSafetyTips ul a");
		if (this.doormatLnks[0]){
			this.doormatLnks[0].addEvent("click",function(){
				this.showBrowser(0);
				HH.DoorMat.makeOtherActive(this.doormatLnks[0]);
			}.bind(this));
		}
		if (this.doormatLnks[1]){
			this.doormatLnks[1].addEvent("click",function(){
				this.showBrowser(1);
				HH.DoorMat.makeOtherActive(this.doormatLnks[1]);
			}.bind(this));
		}
		if (this.activeNum>=0){
			HH.DoorMat.makeOtherActive(this.doormatLnks[this.activeNum]);
		}
	},
	
	showBrowser : function(i){
		var a = this.triggers[i];
		var browser = a.href.split("#")[1];
		if (this.activeBrowser){
			this.tipsBrowsers[this.activeBrowser].hide();
		}
		if (this.activeLink){
			this.activeLink.getParent().removeClass("active")
		}
		a.getParent().addClass("active")
		this.tipsBrowsers[browser].show();
		this.tipsBrowsers["preventionFirst"].options.firstOpen = 0;
		this.activeBrowser = browser;
		this.activeLink = a;
		if (this.doormatLnks && this.doormatLnks[i]){
			HH.DoorMat.makeOtherActive(this.doormatLnks[i]);
		}
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
 * 
 * 20/07/2007:some features temporary disabled until full calendar goes live
 * ------------------------------------------------------------------------------------------------
 */
HH.EventsCalendar = {
	activeEvent : null,
	month : null,
	year : null,
	event : null,
	init : function(){
		//this.checkDirectLink();
		this.container = $("footerSectionA");
		/*this.detailsContainer = $("eventDescription");
		this.monthImage = $E("#eventIllustration img");
		this.eventsLoader = new Ajax('', {
			method : 'get',
			update : "footerSectionA",
			autoCancel : true,
			onComplete : this.showMonth.bind(this),
			onFailure : this.onFailure.bind(this)
		});*/
		
		this.calendar = HH.Calendar;
		//this.calendar.addEvent("onMonthChange",this.getMonth.bind(this))
		this.calendar.init({month:this.month,year:this.year});
	},
	
	checkDirectLink : function(){
		var qs = location.search;
		if (qs && qs!=""){
			qs = qs.replace(/^\?/,"");
			var parts = qs.split("/");
			this.month = parts[0] || null;
			this.year = parts[1] || null;
			this.event = parts[2] || null;
		}
	},
	
	getMonth : function(month, year){
		var url = month.toLowerCase() + year + ".html";
		this.month = month;
		this.eventsLoader.url = url;
		this.eventsLoader.request();
		var newSrc = 'media/upComingEvents-'+month.toLowerCase()+'-'+year+'.jpg';
		var newImage = new Asset.image(newSrc, {width:504,height:286,onload: function(){
			this.monthImage.src = newSrc;
		}.bind(this)});
	},
	
	showMonth : function(responseText,responseXML){
		HH.OutboundLinks.initScope("footerSectionA");
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
		var eventIndex = 0;
		if (this.event){
			eventIndex = this.getEventIndex();
			this.event = null;
		}
		this.showEvent(null,eventIndex);
	},
	
	hoverEvent : function(evt,i){
		if (i || i==0){
			this.calendar.showRange(this.events[i].dates,"hover");
		} else {
			this.calendar.clearCells("hover");
		}
	},
	
	getEventIndex : function(){
		var eventIds = this.eventDescriptions.map(function(event){
			return (event.id || "");
		});
		var eventId = eventIds.indexOf(this.event);
		return (eventId >= 0) ? eventId : 0;
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
		HH.OutboundLinks.initScope(this.detailsContainer);
	},
	
	onFailure : function(){
		$("footerSectionA").innerHTML = "<p>No events found in " + this.month + "</p>";
	}
}

/* ------------------------------------------------------------------------------------------------
 * DoorMat Navigation
 * 
 * 20/07/2007:some features temporary disabled until full calendar goes live
 * ------------------------------------------------------------------------------------------------
 */
HH.DoorMat = {
	open : false,
	menuFaders : [],
	offset : -296,
	maxMenuHeight : 0,
	delay : [],
	loaded : false,
	activeLink : null,
	
	init : function(){
		this.element = $("mainMenu");
		this.menuBackground = $("panelGlobalNavigation");
		if (!this.element){return;}
		if (!this.menuBackground){return;}
		this.mainItems = this.element.getElements("li");
		new Ajax('mainMenu.html', {
			method : 'get',
			onComplete : this.injectMenu.bind(this)
		}).request();
	},
	
	injectMenu : function(responseText,responseXML){
		var tempMenu = new Element("div");
		tempMenu.innerHTML = responseText;
		var ul = tempMenu.getElement("ul");
		var children = ul.childNodes;
		var mainItems = [];
		for (var i = 0; i < children.length; ++i) {
			mainItems[i] = children[i];
		}
		var mainItems = $$(mainItems);
		mainItems.each(function(mainItem,i){
			var subMenu = mainItem.getElement("ul");
			/*if (i == (mainItems.length - 1)){
				subMenu = new Element("ul");
				subMenu.innerHTML = this.getMonthList();
			}*/
			if (!subMenu){
				subMenu = new Element("ul");
			}
			subMenu.injectInside(this.mainItems[i]);
		}.bind(this));
		tempMenu = null;
		this.showActive();
		this.startMenu();
		this.loaded = true;
		this.fireEvent("load");
	},
	
	startMenu : function(){
		if (!this.beautiful){this.shadowHeight = -1;}
		this.element.addEvents({
			"mouseenter" : this.delayAction.bind(this,"show"),
			"mouseleave": this.delayAction.bind(this,"hide")
		});
		this.subMenus = this.element.getElements("ul");
		this.subMenus.each(function(menu,i){
			this.menuFaders[i] = new Fx.Style(menu, 'opacity', {wait:false,duration: 500}).set(0);
			menu.setStyle("display","block");
			var li = menu.getParent();
			li.addEvents({
				"mouseenter" : (function(){li.addClass("hover");}),
				"mouseleave": (function(){li.removeClass("hover");})
			});
			var ulHeight = menu.getSize().size.y;
			if (ulHeight>this.maxMenuHeight){
				this.maxMenuHeight = ulHeight;
			}
			menu.setStyle("display","none");
		}.bind(this));
		this.subMenus.each(function(menu,i){
			menu.setStyle("height",(this.maxMenuHeight - 24) + "px");
		}.bind(this));
		this.slideDown = new Fx.Style(this.menuBackground,"top",{wait:false,onComplete:this.showSubMenus.bind(this)});
	},
	
	delayAction : function(fn){
		$clear(this.delay["hide"]);
		$clear(this.delay["show"]);
		this.delay[fn] = this[fn].delay(500,this);
	},
	
	show : function(){
		this.fireEvent("beforeOpen");
		this.open = true;
		this.slideDown.start(this.offset + this.maxMenuHeight);
		this.subMenus.each(function(menu,i){
			menu.setStyle("display","block");
		}.bind(this));
	},
	
	hide : function(){
		this.open = false;
		this.hideSubMenus();
		this.slideDown.start(this.offset);
	},
	
	showSubMenus : function(){
		if (this.open){
			this.subMenus.each(function(menu,i){
				var opacity = window.webkit419 ? .99 : 1;
				this.menuFaders[i].start(opacity);
			}.bind(this));
		} else {
			this.fireEvent("afterClose");
		}
	},
	
	hideSubMenus : function(){
		this.subMenus.each(function(menu,i){
			this.menuFaders[i].stop();
			this.menuFaders[i].set(0);
			menu.setStyle("display","none");
		}.bind(this));
	},
	
	showActive : function(){
		var url = location.href;
		this.element.getElements("a").each(function(lnk){
			if (lnk.href == url){
				lnk.getParent().addClass("current");
				this.activeLink = lnk;
			}
		});
	},
	
	makeOtherActive : function(lnk){
		if (this.activeLink){
			this.activeLink.getParent().removeClass("current");
		}
		lnk.getParent().addClass("current");
		this.activeLink = lnk;
	},
	
	getMonthList : function(){
		var pageUrl = "upcomingEvents.html";
		var months = HH.Calendar.monthNames;
		var date = HH.Calendar.getCurrentDate();
		var html = "";
		for (var i=0;i<5;i++){
			if (date[0] >= 12){
				date[0] = 0;
				date[1]++;
			}
			html += '<li><a href="upcomingEvents.html?' + months[date[0]] + '/' + date[1] + '">' + months[date[0]].capitalize() + ' ' + date[1] + '</a></li>';
			date[0] ++;
		}
		return html;
	}
}
$extend(HH.DoorMat,new Events);

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
		if (this.options.firstOpen == -1){
			this.options.firstOpen = 0;
		}
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


/* ------------------------------------------------------------------------------------------------
 * Calendar object
 * 
 * 20/07/2007:some features temporary disabled until full calendar goes live
 * ------------------------------------------------------------------------------------------------
 */
HH.Calendar = {
	monthNames : ['january', 'february', 'march', 'april', 'may', 'June', 'july', 'august', 'september', 'october', 'november', 'december'],
	daysInMonth : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	dayNames : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	init: function(options){
		var options = options || {};
		this.dayCells = [null];
		
		// set initial month and year
		var date = this.getCurrentDate();
		this.currentMonth = date[0];
		this.currentYear = date[1];
		this.monthIndex = 0;
		
		this.month = options.month ? this.monthNames.indexOf(options.month.toLowerCase()) : this.currentMonth;
		this.year = options.year ? parseInt(options.year) : this.currentYear;
		this.monthIndex = this.month - this.currentMonth;
		
		this.container = $("calendar");
		
		//this.next = this.container.getElement(".next");
		//this.previous = this.container.getElement(".previous");
		this.monthDisplay = this.container.getElement(".month th");
		this.calTableTbody = this.container.getElement("tbody");
		
		/*this.next.addEvent("click",this.nextMonth.bindAsEventListener(this));
		this.previous.addEvent("click",this.previousMonth.bindAsEventListener(this));
		if (this.monthIndex <= 0){
			this.previous.addClass("disabled");
		}*/
		this.create();
		
	},
	
	getCurrentDate : function(){
		var date = new Date();
		return [date.getMonth(),date.getFullYear()];
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
		//this.monthDisplay.childNodes[1].nodeValue = this.monthNames[this.month].capitalize() + " " + this.year;
		this.monthDisplay.innerHTML = this.monthNames[this.month].capitalize() + " " + this.year;
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

