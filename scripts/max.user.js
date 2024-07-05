// ==UserScript==
// @name         max
// @namespace    https://github.com/Matthematic/userscripts
// @version      2024-06-30
// @description  Hides things on max
// @author       Matthematic
// @match        https://*.max.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=max.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        [class^="TopGradient"], [class^="BottomGradient"] {
            display: none;
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
