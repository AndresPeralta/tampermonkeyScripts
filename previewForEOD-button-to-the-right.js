// ==UserScript==
// @name       Open preview for EOD
// @namespace  devops
// @version    0.1
// @description  Opens preview for EOD
// @match      https://dev.azure.com/azurecom/*/_workitems/edit/*
// @copyright  andres peralta
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function(){
    'use strict'
    setTimeout(function(){
        var segments = window.location.pathname.split("/");
        var id = segments[segments.length-1];

        $('.work-item-form-header-controls-container')
            .append('<button>preview For EOD</button>')
            .click(function () { window.open("https://sw-eod-generator3.azurewebsites.net/preview/" + id); });
    }, 2000);
}())
