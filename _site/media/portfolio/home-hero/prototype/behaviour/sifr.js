/*	sIFR 2.0.2
	Copyright 2004 - 2006 Mike Davidson, Shaun Inman, Tomas Jogin and Mark Wubben

	This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/

var hasFlash=function(){var a=6;if(navigator.appVersion.indexOf("MSIE")!=-1&&navigator.appVersion.indexOf("Windows")>-1){document.write('<script language="VBScript"\> \non error resume next \nhasFlash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & '+a+'))) \n</script\> \n');if(window.hasFlash!=null)return window.hasFlash}if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){var b=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description;return parseInt(b.charAt(b.indexOf(".")-1))>=a}return false}();String.prototype.normalize=function(){return this.replace(/\s+/g," ")};if(Array.prototype.push==null){Array.prototype.push=function(){var i=0,a=this.length,b=arguments.length;while(i<b){this[a++]=arguments[i++]}return this.length}}if(!Function.prototype.apply){Function.prototype.apply=function(a,b){var c=[];var d,e;if(!a)a=window;if(!b)b=[];for(var i=0;i<b.length;i++){c[i]="b["+i+"]"}e="a.__applyTemp__("+c.join(",")+");";a.__applyTemp__=this;d=eval(e);a.__applyTemp__=null;return d}}function named(a){return new named.Arguments(a)}named.Arguments=function(a){this.oArgs=a};named.Arguments.prototype.constructor=named.Arguments;named.extract=function(a,b){var c,d;var i=a.length;while(i--){d=a[i];if(d!=null&&d.constructor!=null&&d.constructor==named.Arguments){c=a[i].oArgs;break}}if(c==null)return;for(e in c)if(b[e]!=null)b[e](c[e]);return};var parseSelector=function(){var a=/^([^#.>`]*)(#|\.|\>|\`)(.+)$/;function r(s,t){var u=s.split(/\s*\,\s*/);var v=[];for(var i=0;i<u.length;i++)v=v.concat(b(u[i],t));return v}function b(c,d,e){c=c.normalize().replace(" ","`");var f=c.match(a);var g,h,i,j,k,n;var l=[];if(f==null)f=[c,c];if(f[1]=="")f[1]="*";if(e==null)e="`";if(d==null)d=document;switch(f[2]){case "#":k=f[3].match(a);if(k==null)k=[null,f[3]];g=document.getElementById(k[1]);if(g==null||(f[1]!="*"&&!o(g,f[1])))return l;if(k.length==2){l.push(g);return l}return b(k[3],g,k[2]);case ".":if(e!=">")h=m(d,f[1]);else h=d.childNodes;for(i=0,n=h.length;i<n;i++){g=h[i];if(g.nodeType!=1)continue;k=f[3].match(a);if(k!=null){if(g.className==null||g.className.match("(\\s|^)"+k[1]+"(\\s|$)")==null)continue;j=b(k[3],g,k[2]);l=l.concat(j)}else if(g.className!=null&&g.className.match("(\\s|^)"+f[3]+"(\\s|$)")!=null)l.push(g)}return l;case ">":if(e!=">")h=m(d,f[1]);else h=d.childNodes;for(i=0,n=h.length;i<n;i++){g=h[i];if(g.nodeType!=1)continue;if(!o(g,f[1]))continue;j=b(f[3],g,">");l=l.concat(j)}return l;case "`":h=m(d,f[1]);for(i=0,n=h.length;i<n;i++){g=h[i];j=b(f[3],g,"`");l=l.concat(j)}return l;default:if(e!=">")h=m(d,f[1]);else h=d.childNodes;for(i=0,n=h.length;i<n;i++){g=h[i];if(g.nodeType!=1)continue;if(!o(g,f[1]))continue;l.push(g)}return l}}function m(d,o){if(o=="*"&&d.all!=null)return d.all;return d.getElementsByTagName(o)}function o(p,q){return q=="*"?true:p.nodeName.toLowerCase().replace("html:", "")==q.toLowerCase()}return r}();var sIFR=function(){var a="http://www.w3.org/1999/xhtml";var b=false;var c=false;var d;var ah=[];var al=document;var ak=al.documentElement;var am=window;var au=al.addEventListener;var av=am.addEventListener;var f=function(){var g=navigator.userAgent.toLowerCase();var f={a:g.indexOf("applewebkit")>-1,b:g.indexOf("safari")>-1,c:navigator.product!=null&&navigator.product.toLowerCase().indexOf("konqueror")>-1,d:g.indexOf("opera")>-1,e:al.contentType!=null&&al.contentType.indexOf("xml")>-1,f:true,g:true,h:null,i:null,j:null,k:null};f.l=f.a||f.c;f.m=!f.a&&navigator.product!=null&&navigator.product.toLowerCase()=="gecko";if(f.m&&g.match(/.*gecko\/(\d{8}).*/))f.j=new Number(g.match(/.*gecko\/(\d{8}).*/)[1]);f.n=g.indexOf("msie")>-1&&!f.d&&!f.l&&!f.m;f.o=f.n&&g.match(/.*mac.*/)!=null;if(f.d&&g.match(/.*opera(\s|\/)(\d+\.\d+)/))f.i=new Number(g.match(/.*opera(\s|\/)(\d+\.\d+)/)[2]);if(f.n||(f.d&&f.i<7.6))f.g=false;if(f.a&&g.match(/.*applewebkit\/(\d+).*/))f.k=new Number(g.match(/.*applewebkit\/(\d+).*/)[1]);if(am.hasFlash&&(!f.n||f.o)){var aj=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description;f.h=parseInt(aj.charAt(aj.indexOf(".")-1))}if(g.match(/.*(windows|mac).*/)==null||f.o||f.c||(f.d&&(g.match(/.*mac.*/)!=null||f.i<7.6))||(f.b&&f.h<7)||(!f.b&&f.a&&f.k<312)||(f.m&&f.j<20020523))f.f=false;if(!f.o&&!f.m&&al.createElementNS)try{al.createElementNS(a,"i").innerHTML=""}catch(e){f.e=true}f.p=f.c||(f.a&&f.k<312);return f}();function at(){return{bIsWebKit:f.a,bIsSafari:f.b,bIsKonq:f.c,bIsOpera:f.d,bIsXML:f.e,bHasTransparencySupport:f.f,bUseDOM:f.g,nFlashVersion:f.h,nOperaVersion:f.i,nGeckoBuildDate:f.j,nWebKitVersion:f.k,bIsKHTML:f.l,bIsGecko:f.m,bIsIE:f.n,bIsIEMac:f.o,bUseInnerHTMLHack:f.p}}if(am.hasFlash==false||!al.getElementsByTagName||!al.getElementById||(f.e&&(f.p||f.n)))return{UA:at()};function af(e){if((!k.bAutoInit&&(am.event||e)!=null)||!l(e))return;b=true;for(var i=0,h=ah.length;i<h;i++)j.apply(null,ah[i]);ah=[]}var k=af;function l(e){if(c==false||k.bIsDisabled==true||((f.e&&f.m||f.l)&&e==null&&b==false)||(al.body==null||al.getElementsByTagName("body").length==0))return false;return true}function m(n){if(f.n)return n.replace(new RegExp("%\d{0}","g"),"%25");return n.replace(new RegExp("%(?!\d)","g"),"%25")}function as(p,q){return q=="*"?true:p.nodeName.toLowerCase().replace("html:", "")==q.toLowerCase()}function o(p,q,r,s,t){var u="";var v=p.firstChild;var w,x,y,z;if(s==null)s=0;if(t==null)t="";while(v){if(v.nodeType==3){z=v.nodeValue.replace("<","&lt;");switch(r){case "lower":u+=z.toLowerCase();break;case "upper":u+=z.toUpperCase();break;default:u+=z}}else if(v.nodeType==1){if(as(v,"a")&&!v.getAttribute("href")==false){if(v.getAttribute("target"))t+="&sifr_url_"+s+"_target="+v.getAttribute("target");t+="&sifr_url_"+s+"="+m(v.getAttribute("href")).replace(/&/g,"%26");u+='<a href="asfunction:_root.launchURL,'+s+'">';s++}else if(as(v,"br"))u+="<br/>";if(v.hasChildNodes()){y=o(v,null,r,s,t);u+=y.u;s=y.s;t=y.t}if(as(v,"a"))u+="</a>"}w=v;v=v.nextSibling;if(q!=null){x=w.parentNode.removeChild(w);q.appendChild(x)}}return{"u":u,"s":s,"t":t}}function A(B){if(al.createElementNS&&f.g)return al.createElementNS(a,B);return al.createElement(B)}function C(D,E,z){var p=A("param");p.setAttribute("name",E);p.setAttribute("value",z);D.appendChild(p)}function F(p,G){var H=p.className;if(H==null)H=G;else H=H.normalize()+(H==""?"":" ")+G;p.className=H}function aq(ar){var a=ak;if(k.bHideBrowserText==false)a=al.getElementsByTagName("body")[0];if((k.bHideBrowserText==false||ar)&&a)if(a.className==null||a.className.match(/\bsIFR\-hasFlash\b/)==null)F(a, "sIFR-hasFlash")}function j(I,J,K,L,M,N,O,P,Q,R,S,r,T){if(!l())return ah.push(arguments);aq();named.extract(arguments,{sSelector:function(ap){I=ap},sFlashSrc:function(ap){J=ap},sColor:function(ap){K=ap},sLinkColor:function(ap){L=ap},sHoverColor:function(ap){M=ap},sBgColor:function(ap){N=ap},nPaddingTop:function(ap){O=ap},nPaddingRight:function(ap){P=ap},nPaddingBottom:function(ap){Q=ap},nPaddingLeft:function(ap){R=ap},sFlashVars:function(ap){S=ap},sCase:function(ap){r=ap},sWmode:function(ap){T=ap}});var U=parseSelector(I);if(U.length==0)return false;if(S!=null)S="&"+S.normalize();else S="";if(K!=null)S+="&textcolor="+K;if(M!=null)S+="&hovercolor="+M;if(M!=null||L!=null)S+="&linkcolor="+(L||K);if(O==null)O=0;if(P==null)P=0;if(Q==null)Q=0;if(R==null)R=0;if(N==null)N="#FFFFFF";if(T=="transparent")if(!f.f)T="opaque";else N="transparent";if(T==null)T="";var p,V,W,X,Y,Z,aa,ab,ac;var ad=null;for(var i=0,h=U.length;i<h;i++){p=U[i];if(p.className!=null&&p.className.match(/\bsIFR\-replaced\b/)!=null)continue;V=p.offsetWidth-R-P;W=p.offsetHeight-O-Q;aa=A("span");aa.className="sIFR-alternate";ac=o(p,aa,r);Z="txt="+m(ac.u).replace(/\+/g,"%2B").replace(/&/g,"%26").replace(/\"/g, "%22").normalize() + S + "&w=" + V + "&h=" + W + ac.t;F(p,"sIFR-replaced");if(ad==null||!f.g){if(!f.g){if(!f.n)p.innerHTML=['<embed class="sIFR-flash" type="application/x-shockwave-flash" src="',J,'" quality="best" wmode="',T,'" bgcolor="',N,'" flashvars="',Z,'" width="',V,'" height="',W,'" sifr="true"></embed>'].join("");else p.innerHTML=['<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" sifr="true" width="',V,'" height="',W,'" class="sIFR-flash"><param name="movie" value="',J,"?",Z,'"></param><param name="quality" value="best"></param><param name="wmode" value="',T,'"></param><param name="bgcolor" value="',N,'"></param> </object>'].join('')}else{if(f.d){ab=A("object");ab.setAttribute("data",J);C(ab,"quality","best");C(ab,"wmode",T);C(ab,"bgcolor",N)}else{ab=A("embed");ab.setAttribute("src",J);ab.setAttribute("quality","best");ab.setAttribute("flashvars",Z);ab.setAttribute("wmode",T);ab.setAttribute("bgcolor",N)}ab.setAttribute("sifr","true");ab.setAttribute("type","application/x-shockwave-flash");ab.className="sIFR-flash";if(!f.l||!f.e)ad=ab.cloneNode(true)}}else ab=ad.cloneNode(true);if(f.g){if(f.d)C(ab,"flashvars",Z);else ab.setAttribute("flashvars",Z);ab.setAttribute("width",V);ab.setAttribute("height",W);ab.style.width=V+"px";ab.style.height=W+"px";p.appendChild(ab)}p.appendChild(aa);if(f.p)p.innerHTML+=""}if(f.n&&k.bFixFragIdBug)setTimeout(function(){al.title=d},0)}function ai(){d=al.title}function ae(){if(k.bIsDisabled==true)return;c=true;if(k.bHideBrowserText)aq(true);if(am.attachEvent)am.attachEvent("onload",af);else if(!f.c&&(al.addEventListener||am.addEventListener)){if(f.a&&f.k>=132&&am.addEventListener)am.addEventListener("load",function(){setTimeout("sIFR({})",1)},false);else{if(al.addEventListener)al.addEventListener("load",af,false);if(am.addEventListener)am.addEventListener("load",af,false)}}else if(typeof am.onload=="function"){var ag=am.onload;am.onload=function(){ag();af()}}else am.onload=af;if(!f.n||am.location.hash=="")k.bFixFragIdBug=false;else ai()}k.UA=at();k.bAutoInit=true;k.bFixFragIdBug=true;k.replaceElement=j;k.updateDocumentTitle=ai;k.appendToClassName=F;k.setup=ae;k.debug=function(){aq(true)};k.debug.replaceNow=function(){ae();k()};k.bIsDisabled=false;k.bHideBrowserText=true;return k}();

if(typeof sIFR == "function"){
	sIFR.setup();
};

if(typeof sIFR == "function"){

// This is the preferred "named argument" syntax
	sIFR.replaceElement(named({sSelector:"h2", sFlashSrc:"style/base/helveticaNeue-35thin.swf", sColor:"#000000", sLinkColor:"#000000", sWmode: "transparent", sHoverColor:"#CCCCCC", nPaddingTop:0, nPaddingBottom:0, sFlashVars:"textalign=left&offsettop=0"}));
	sIFR.replaceElement(named({sSelector:"h3.subHeader", sFlashSrc:"style/base/helveticaNeue-35thin.swf", sColor:"#CC0000", sLinkColor:"#000000", sWmode: "transparent", sHoverColor:"#CCCCCC", nPaddingTop:0, nPaddingBottom:0, sFlashVars:"textalign=left&offsettop=0"}));

};