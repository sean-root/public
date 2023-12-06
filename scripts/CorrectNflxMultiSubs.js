// ==UserScript==
// @name        纠正 NflxMultiSubs 字幕重叠的问题
// @include     https://netflix.com/*
// @include     https://www.netflix.com/*
// @description 纠正 NflxMultiSubs 字幕重叠的问题
// @author      Sean

(function () {
    document.querySelectorAll('.nflxmultisubs-subtitle-wrapper').forEach(function(e) {
        e.style.height = '105%';
    });
})();
