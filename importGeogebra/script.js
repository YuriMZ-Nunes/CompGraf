var xcoord;
var ycoord;
var tg;

var ggbApplet = document.querySelector("#ggbApplet");

function gbbOnInit(param){
    if (param == "gbbApplet") {
        ggbApplet.registerObjectUpdateListener("a", "abcListener");

        ggbApplet.registerObjectUpdateListener("D", "abcListener");
        ggbApplet.registerObjectUpdateListener("E", "abcListener");
        ggbApplet.registerObjectUpdateListener("F", "abcListener");
        ggbApplet.registerObjectUpdateListener("G", "abcListener");

        ggbApplet.registerObjectUpdateListener("D'", "abcListener");
        ggbApplet.registerObjectUpdateListener("E'", "abcListener");
        ggbApplet.registerObjectUpdateListener("F'", "abcListener");

        ggbApplet.registerObjectUpdateListener("D''", "abcListener");
        ggbApplet.registerObjectUpdateListener("E''", "abcListener");

        ggbApplet.registerObjectUpdateListener("D'''", "abcListener");

    }
}

var parameters = {
"id": "ggbApplet",
"prerelease":false,
"width":900,
"height":900,
"showToolBar":false,
"borderColor":null,
"showMenuBar":false,
"showAlgebraInput":false,
"showResetIcon":false,
"enableLabelDrags":false,
"enableShiftDragZoom":true,
"enableRightClick":false,
"capturingThreshold":null,
"showToolBarHelp":false,
"errorDialogsActive":true,
"useBrowserForJS":true,
"showLogging":"true",
"filename":"Curve.ggb",
"ggbBase64":"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",
};

parameters.appletOnLoad = function(api){
    var strLength = 150;
    var textarea2 = document.getElementsByName("textarea2")[0];

    function updateListener(objName) {
	    strVal = api.getValueString(objName);
        if(objName == "D'''"){
            xcoord = api.getXcoord(objName);
            ycoord = api.getYcoord(objName);
            console.log(xcoord);
            console.log(ycoord);
        }
        if(objName == "u"){
            tg = objName;
            console.log(strVal);
        }
    }

    function printConsole(){
        var objNumber = api.getObjectNumber();
        for(i = 0; i < objNumber; i++) {
            strName = api.getObjectName(i);
        }
    }

    api.registerUpdateListener(updateListener);
}

// is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
var views = {'is3D': 0,'AV': 1,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
var applet = new GGBApplet(parameters, '5.0', views);
window.onload = function() {applet.inject(ggbApplet)};
applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');


