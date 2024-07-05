// ==UserScript==
// @name         Youtube
// @namespace    https://github.com/Matthematic/userscripts
// @version      2024-06-30
// @description  Hides things on Youtube
// @author       Matthematic
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        .ytp-ce-element {
            display: none!important;
        }
    `;

    function injectCSS() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    injectCSS();
})();

