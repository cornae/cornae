collectionBrowser = {
	z : 1,
	activeSection : null,
	initialize : function(elementId){
		this.element = $(elementId);
		this.dts = $A(this.element.getElementsByTagName("DT"));
		this.dts.each(function(dt){
			dt = $(dt);
			$(dt.getElementsByTagName('A')[0]).addEvent("mouseover",this.showSection.bindAsEventListener(this,dt));
			$(dt.getElementsByTagName('EM')[0]).addEvent("mouseover",function(evt){evt.stop()});

			var lnks = $A(dt.getNext().getElementsByTagName("A"));
			lnks.each(function(lnk){
				new Fx.Style(lnk, 'opacity', {duration: 1200, fps: 100}).set(0);
			});
		}.bind(this));
		this.showSection(null,this.dts[0])
	},
	
	showSection : function(evt,dt){
		
		//if (evt) evt.stopPropagation();
		var dd = dt.getNext();
		if (dd != this.activeSection){
			if (this.activeSection){
				this.activeSection.getPrevious().removeClass("active");
				var lnks = $A(this.activeSection.getElementsByTagName("A"));
				lnks.each(function(lnk){
					new Fx.Style(lnk, 'opacity', {duration: 800, fps: 100}).start(0);
				});
			}
			dt.addClass("active");
			dd.setStyle("z-index",this.z++);
			this.activeSection = dd;
			var lnks = $A(dd.getElementsByTagName("A"));
			lnks.each(function(lnk){
				new Fx.Style(lnk, 'opacity', {duration: 800, fps: 100, onComplete:function(){}}).start(1);
			}.bind(this));
		}
	
		//var opacity = new Fx.Style('', 'opacity', {duration: 1200, fps: 100}).start(0,1);
	}
	
}