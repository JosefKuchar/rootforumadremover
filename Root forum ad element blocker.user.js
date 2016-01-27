// ==UserScript==
// @name         Root forum ad element blocker
// @namespace    http://www.josefkuchar.cz/
// @version      1.0.0
// @description  Remove ad elements in Root.cz forum discussions
// @author       Josef Kuchař
// @match        http://forum.root.cz/*
// @grant        none
// ==/UserScript==
$(".windowbg2 .poster a[href='http://www.root.cz/']").parent().parent().parent().remove();