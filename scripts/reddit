// ==UserScript==
// @name         reddit
// @namespace    https://github.com/Matthematic/userscripts
// @version      2024-06-30
// @description  Hides things on reddit
// @author       MAtthematic
// @match        https://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css  =`
  ::-webkit-scrollbar {
    width: 18px;
    height: 18px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: lightgray;
    background-clip: padding-box;
    border-color: transparent;
    border-style: solid;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: slategray;
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
