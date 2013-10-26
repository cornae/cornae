---
layout: post
category: articles
title: The structure of xHTML
summary: A concise manual for building a basic xHMTL document for novice.
avatar: avatar-structure.png
---

### Tags

All content in HTML is placed in so called tags. De syntax of this paragraph is like this:

	<p>
	 All content in XHTML is placed in so called tags. De syntax of this paragraph is like this:
	</p>

To every kind of content belongs a certain tag. In the example above the content is a paragraph and paragraphs get a 'p-tag'. These tags are to be written in lowercase. Right next to the letter p there is a space and then a so called 'attribute'. An attribute is a piece of code which says something about the information, the content, of a tag. In this case we're looking at a lang attribute. This attribute states the language of the content within the tag. Other attributes may be used to influence the graphic representation of the content, or to add scripts to elements.

Another thing that catches the eye is that the piece of content is followed by `</p>`. This piece of code is the termination of the tag. It is an *unbreakable law* that every tag in XHTML must be terminated.

A few commonly used tags are: `<p>` (paragraph text), `<img>` (image), `<ul>` (unordered list), `<table>` (table), `<h1>` (high level header), `<h2>` (lower level header), `<div>` (division, rough segmentation of groups of content) and `<a>` (hyperlink).

### Head

The article [Anatomy of a (web) document][1] explained how an XHTML-documents are divided into a head section and a body section. The head section contains information which is not intended to be seen by the end user, but instead help a webbrowser to render a page in the right manner. Below, I will touch the most important and most commonly used parts of the head section.

#### Meta

One of the most important elements that we put inside the head section is the characterset declaration of the document's content. A [character set][2] is a table with codes and the matching letters or characters. Imagine that, for whatever reason, you would like to use a character set which contains exclusively contains (post) Latin characters, then this is the place to indicate this. Now, the browser also knows which character set to use and will so be able to render the text as intended.

There's a vast number of character sets for you to choose from. Each of them has it's own history. A few random examples of this are:

*   iso-8859-1 (Exclusively suitable for some western languages, including English)
*   iso-8859-5 (Cyrillic)
*   big5 (Chinese, traditional)
*   windows-950 (Chinese, traditional)
*   shift_jis (Japanse)
*   iso-8859-8 (Hebrew)
*   iso-8859-3 (Maltese)
*   iso-8859-6 (Arabic)
*   utf-8 (All sets)
*   utf-16 (All sets)
 

The above list is by far incomplete. Due to historic reasons do many alphabets and character systems have at least one dedicated code table. Some character sets, such as Arabic, have four or more, which actually all try to do the same job. For those who are interested, iana.org offers [a complete list][3] of all existing character sets.

It would be far beyond the extent of this writing to elaborate on the history and functioning of text encoding. Therefore *my dogma: use UTF-8 exclusively*. [UTF-8][4] is a code table from the so called [unicode familie][5]. Unicode offers a standard encoding which contains code tables for all character sets — including [Klingon][6] —, plus room for future character sets. This may sound ideal to you… and so it is. There's more to learn about text encoding in general and unicode in particular at [joelonsoftware.com][7].

The syntax for the character set declaration is as follows:

	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />

Where utf-8 indicates the character set. As you may have noticed, the character set declaration is applied as an attribute to the meta-tag.

An XHTML document is a full member of the XML-familie. Therefore, the two very first lines of each XHTML-document will look like this:

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 

At the first line, the used XML version is declared, as well as the character set in which the document itself is encoded. Also here, it's recommended to use UTF-8. At the second line there's indicated which XHTML version is used for the document. We call this the document type declaration and it's probably one of the most important lines of the HTML-document, as because of this line, the browser knows exactly in which way to interpret the document code. In this case the XHTML 1.0 Transitional standard is used.

The image below illustrates what the code of a simple XHTML page may look like. Click on the image to render the obtained page in your browser.

![xHTML][8]

It might have occurred to you that your browser automatically generates some space between two paragraphs of text. Besides that, the header of the page looks a little larger and bolded. This happens, because your browser will — even without adding any layout information — know what to do with things such as paragraphs and headers, but also lists, tables, etc.

The XHTML attribute on the html tag won't have escaped your attention either. This is a mandatory part of the XHTML-document and it is basically a link to a file on the internet which exactly describes which rules the code should meet.

Now your are capable of assembling an XHTML document, u are ready to embellish this page using Cascading Style Sheets, or just: 'CSS'.

* * *

 [1]: {{ site.media }}/anatomyOfDOM.html
 [2]: http://www.cornae.com/articles/%28http://www.w3.org/International/O-charset.html
 [3]: http://www.iana.org/assignments/character-sets
 [4]: http://www.cornae.com/articles/%28EmptyReference%21%29
 [5]: http://www.unicode.org
 [6]: http://www.kli.org/
 [7]: http://www.joelonsoftware.com/articles/Unicode.html
 [8]: {{ site.media }}/xHTML.png