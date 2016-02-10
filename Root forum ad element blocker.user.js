// ==UserScript==
// @name         Root forum ad element blocker
// @namespace    http://www.josefkuchar.cz/
// @version      2.0.0
// @description  Remove ad elements in Root.cz forum discussions
// @author       Josef Kuchař
// @match        http://forum.root.cz/*
// @grant        none
// ==/UserScript==
var element = $(".body_message--ad");
element.next().remove();
element.remove();
