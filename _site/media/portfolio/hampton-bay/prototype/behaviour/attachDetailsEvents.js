
productSelector = {
	activeImage : null,
	activeDescription : null,
	initialize : function(){
		$$(".productImages a",".lifestyle a",".descriptions p").each(function(element){
			element.addEvent("mouseover",this.hoverLink.bindAsEventListener(this,element));
		}.bind(this));
	},
	
	hoverLink : function(evt,element){
		var curLetter = element.id.substring(element.id.length-1);
		var targetImage = $('catalogueImage-' + curLetter);
		var targetDescription = $('description-' + curLetter);
		if (element!=this.activeImage && element!=this.activeDescription){
			targetImage.addClass("productActive");
			targetDescription.addClass("productActive");
			if(this.activeImage) this.activeImage.removeClass("productActive");
			if(this.activeDescription) this.activeDescription.removeClass("productActive");
			this.activeImage = targetImage;
			this.activeDescription = targetDescription;
		}
	}
}

Window.onDomReady(productSelector.initialize.bind(productSelector));
