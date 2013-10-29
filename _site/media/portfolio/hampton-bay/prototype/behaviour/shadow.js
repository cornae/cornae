Behaviour.register({
  '.dropshadow' : function(element) {
    var wrap1 = document.createElement("div");
    wrap1.className = "wrap1";
    wrap1.setAttribute("class", "wrap1");
    var wrap2 = document.createElement("div");
    wrap2.className = "wrap2";
    wrap2.setAttribute("class", "wrap2");
    var wrap3 = document.createElement("div");
    wrap3.className = "wrap3";
    wrap3.setAttribute("class", "wrap3");
    
    var outerNode = element.parentNode;
    outerNode.insertBefore(wrap1, element);
    wrap1.appendChild(wrap2);
    wrap2.appendChild(wrap3);
    outerNode.removeChild(element);
    wrap3.appendChild(element);
  }
});
