// ==UserScript==
// @name         netflix
// @namespace    https://github.com/Matthematic/userscripts
// @version      2024-06-30
// @description  Hides things on netflix
// @author       Matthematic
// @match        https://*.netflix.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=netflix.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        [data-list-context="popularGames"] {
            display: none!important;
        }
    `;

    function injectCSS() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    function findParent(selector, num) {
      const element = document.querySelector(selector);
      if (element) {
        let parent = element;
        for (let i = 0; i < num; i++) {
          if (parent.parentElement) {
            parent = parent.parentElement;
          } else {
            return null; // If there are not enough parent elements
          }
        }
        return parent
      }
      return null;
    }

    const mediaToHide = ['Young Sheldon'];

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                mediaToHide.forEach((label) => {
                    const parentDiv = findParent(`[aria-label="${label}"]`, 4);
                    if (parentDiv) {
                        parentDiv.style.display = 'none'
                    }
                });
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });


    injectCSS();
})();
