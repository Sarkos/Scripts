// ==UserScript==
// @name           Fix spoiler tags on old reddit
// @description    Spoiler tags with spaces don't work on old reddit
// @include        *reddit.com/*
// @author         Sarkos
// @grant          none
// @version        1
// ==/UserScript==
const comments = document.querySelectorAll('div.md');

comments.forEach(replaceSpoilers);

function replaceSpoilers(node) {
	let html = node.innerHTML;
	if (html.indexOf('&gt;!') != -1) {
		node.innerHTML = html.replace(/&gt;!(.*?)!&lt;/g, '<span class="md-spoiler-text">$1</span>');
	}
}
