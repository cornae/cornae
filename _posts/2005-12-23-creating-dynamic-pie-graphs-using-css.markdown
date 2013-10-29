---
layout: post
category: articles
title: Creating dynamic pie graphs using CSS
summary: OAfter all the positive responses to my article on creating dynamic column graphs using CSS, I decided to go one step further and publish a method to create dynamic 3-dimensional pie graphs, again based CSS and xHTML.
avatar: avatar-pie.png
---

### The graphics

The image below shows the desired end result. The pie is built up out of serveral layers of graphics on top of each other. Much like layers in Photoshop.

![Pie][1]

The plum colour is the bottom layer, on top of it apple, then grape, lime, banana, avocado, blueberry, cherry and chocolate. (anti-clockwise). The top layer covers all the other segments. It's a white square with a hole in it and it has the black ring on it.

![Pie in layers][2]

1.  The cover layer with it's cut out. The hole contains a half opaque, radial gradient, which causes the soft shadows on the segments underneath. 
2.  The stacked segments.

An image was created for each percentage of that layer. This makes a total of 100 images per colour. In order to view the graph in perspective, an oblong square was created in Photoshop, of which each side was divided into 25 segments. Added up, this makes 100 segments. Now it's easy to align the gap of the shape to each crossing point along the sides of the matrix.

![Slice][3]

### The markup

Each layer is in the markup represented by it's own `div`. To be able to generate the graph dynamically, an image will be assigned to each div by means of an inline style element. The first div is the bottom layer, the second div is the layer above it, etc. The last div has a class "pieGraph-super". This is the cover layer.

The file name of each used image, such as `pieGraph-plum-100p.png`, consists of a colour indication and a number. The number indicates how much of the pie will be occupied by that layer. So, `100p` for instance, stands for 100 percent. From now on we call this value, the 'p-value'. The p-value of the first layer (visually the bottom layer, but in the first layer mentioned in the markup) will always be set to a 100 percent. The p-value of each next layer will calculated like: p-value of previous layer, minus the desired 'real' value of that layer.

### The style sheet

The dimensions of the mother div, in this case 450 pixels times 170 pixels, is the first thing we add to the style sheet. Next we indicated that the division should act as a block level element.

    div#pieGraph {
      width: 420px;
      height: 170px;
      float: left;
      display: block;
      position: relative;
    }

It's important to give the division a relative position. With this division, all the layers for the pieces of the pie will be 'stacked'. We want the layers to end up on top of each other and not underneath each other. Therefor we write: `position: relative;`.

The behaviour for all div elements within `div#pieGraph` now may be stipulated under `div#pieGraph div` in the CSS file. Again, the dimensions of the layer will be fixed. This value is the same for all layers. The line `position: absolute` means that every layer with position itself at coordinate 0:0, as apposed to the next higher element with a relative, or absolute positioning. In this case: the mother division of the graph. This way, we can make sure that all layers will be stacked upon each other, rather than be rendered underneath each other in the browser.

    div#pieGraph div {
      width: 420px;
      height: 170px;
      display: block;
      position: absolute;
    }

We now get the following result:

![Between][4]

We neatly cover the layer with the top layer by simply adding `<div class="pieGraph-super"></div>` to the markup. Now the graph is finished. That is… almost.

#### The little 'M-problem'

The file format of choice for images of the pieces of the pie is the [**P**ortable **N**etwork **G**raphics format][5]. It's support for transparancy in different grades makes it ideal for stacking all the different graphics that contain lots of diagonal lines and curves. These lines and curves would look rather jagged if the GIF-format was used instead. Besides that, the subtle shadow that's genereated by the top layer, would not have been possible at all in this way. Although PNG has been a common standard since 1996, Microsoft will only start to fully support this open format in version 7 of their popular web browser Internet Explorer. For now, we'll have to offer Internet Explorer users an alternative in the form of a GIF alternative of the graph.

Every layer now needs to be added twice to the markup:

Now it's quite easy to hide All layers that contain PNG images in Internet Explorer and to hide all layers that contain a GIF image in other browsers, by means of a simple [ child selector hack][6].

    div.ifMSIE {
      visibility: visible;
    }
    
    html>body div.ifMSIE {
      visibility: hidden;
    }
    
    .ifOther {
      visibility: hidden;
    }
    
    html>body .ifOther {
      visibility: visible;
    }

The image below, shows the end result in both Internet Explorer 6.0 and an other grahpical browser. As you can see, the end result in Internet Explorer is not quite as stunning as in other browser, but it's still more than usable and just as clear as the render result in more modern browsers. See what the [ end result][7] looks like in your browser.

![Pie graph in Internet Explorer][8]

1.  **Left:** The render result in Internet Explorer 6.0.
2.  **Right:** The render result in modern browsers.


 [1]: {{ site.media }}/pie.png
 [2]: {{ site.media }}/pieGraphLayers.png
 [3]: {{ site.media }}/slice.png
 [4]: {{ site.media }}/between.png
 [5]: http://www.w3.org/Graphics/PNG/
 [6]: http://www.dithered.com/css_filters/css_only/child_selector.html
 [7]: {{ site.media }}/pieGraph/pieGraph.html
 [8]: {{ site.media }}/pieGraphIEvsOther.gif