/// <reference path="../../definitions/handlebars/handlebars.d.ts" />
/// <reference path="../../definitions/jquery/jquery.d.ts" />
/// <reference path="../../definitions/greensock/greensock.d.ts" />
/// <reference path="./HandlebarsTemplates.ts" />
/// <reference path="./com/vw/VWMobileTouaregApp.ts" />

import VWMobileTouaregApp = com.vw.VWMobileTouaregApp;

$(function() {
	//you will see when text changed by template

    window["app"] = new VWMobileTouaregApp();
    window["app"].init();


});