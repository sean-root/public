// ==UserScript==
// @name                 纠正 NflxMultiSubs 字幕重叠的问题
// @name:zh-CN           纠正 NflxMultiSubs 字幕重叠的问题
// @namespace            http://tampermonkey.net/
// @version              1.0.0
// @description          Play Netflix UHD content on any screen resolution
// @description:zh-CN    纠正 NflxMultiSubs 字幕重叠的问题
// @author               TGSAN
// @match                https://www.netflix.com/*
// @icon                 https://www.google.com/s2/favicons?sz=64&domain=netflix.com
// @run-at               document-start
// @grant                unsafeWindow
// @grant                GM_registerMenuCommand
// @downloadURL https://github.com/sean-root/public/raw/main/scripts/CorrectNflxMultiSubs.js
// @updateURL https://github.com/sean-root/public/raw/main/scripts/CorrectNflxMultiSubs.js
// ==/UserScript==

(function () {
    document.querySelectorAll('.nflxmultisubs-subtitle-wrapper').forEach(function(e) {
        e.style.height = '105%';
    });
})();
