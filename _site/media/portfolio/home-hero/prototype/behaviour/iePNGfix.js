/**
 * Fixes for IE 6
 * dependcies:
 * mootools v1.11 (http://mootools.net)
 */

if (window.ie && !window.ie7){
	window.addEvent('domready',function() {
		var section = document.body.id;
		if (section=="home"){
			var span1 = new Element("span").setProperty("id","shadowTop").injectInside("logo");
		}
		var span2 = new Element("span").setProperty("id","shadowRight").injectInside("logo");
		
	});
	
	if (document.styleSheets[0]){
		document.styleSheets[0].addRule("#logo sub","filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/base/shadowUpperLeft.png', sizingMethod='crop')");
		document.styleSheets[0].addRule("#home #logo span#shadowTop","filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/base/shadowTop-ie6.png', sizingMethod='crop')");
		document.styleSheets[0].addRule("#logo span#shadowRight","filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/base/shadowUpperRight.png', sizingMethod='crop')");
		document.styleSheets[0].addRule("#mainMenu li a","background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/base/shadowTop.png', sizingMethod='crop')");
		document.styleSheets[0].addRule("#mainMenu li li a","filter:none");
		document.styleSheets[0].addRule("#mainMenu li ul","background-image:url(empty.gif)");
		document.styleSheets[0].addRule("#outboundWarning","background-image:none;position:absolute");
		document.styleSheets[0].addRule("#outboundWarning span","background-image:none;display:block;height:100%;width:100%;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/base/panelDisclaimer.png', sizingMethod='image')");
		document.styleSheets[0].addRule("#outboundWarning a", "position: relative;z-index: 1;");
		document.styleSheets[0].addRule("#panelGlobalNavigation","background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/base/globalNavigation-sub.png', sizingMethod='scale')");
		
	}
	if (document.styleSheets[1]){
		document.styleSheets[1].addRule("h3#titleTips", "background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/fireSafetyTips/fireSafetyTips-interiorShadow-lifestylePhoto1.png', sizingMethod='crop')");
		document.styleSheets[1].addRule("dl#tipsBrowserPrevention dt", "background-image:url(style/fireSafetyTips/empty.gif);filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/fireSafetyTips/drawer.png', sizingMethod='crop')");
		document.styleSheets[1].addRule("dl#tipsBrowserPrevention dd", "background-image:url(style/fireSafetyTips/empty.gif);filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/fireSafetyTips/drawerSmall-bottom-ie6.png', sizingMethod='crop')");
		document.styleSheets[1].addRule("dl#tipsBrowserResponsive dt", "background-image:url(style/fireSafetyTips/empty.gif);filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/fireSafetyTips/drawer.png', sizingMethod='crop')");
		document.styleSheets[1].addRule("dl#tipsBrowserResponsive dd", "background-image:url(style/fireSafetyTips/empty.gif);filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/fireSafetyTips/drawerLarge-bottom-ie6.png', sizingMethod='crop')");
		document.styleSheets[1].addRule("#footerSectionA h3.myHouse", "background-image:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/myHomeSafety/drum.png', sizingMethod='scale')");
		document.styleSheets[1].addRule("#productAward #selectView", "background-image:url(style/fireSafetyTips/empty.gif);filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/productInformation/productAward-heroPhotoShadow.png', sizingMethod='crop')");
		document.styleSheets[1].addRule("dl#tipsBrowserPrevention dt a", "position: relative");
		document.styleSheets[1].addRule("dl#tipsBrowserResponsive dt a", "position: relative");
		
	}
}