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
        ggbApplet.registerObjectUpdateListener("u", "abcListener");

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
"showAlgebraInput":true,
"showResetIcon":true,
"enableLabelDrags":true,
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

var startEndPoint = new Array();
var fourPoints = new Array();


parameters.appletOnLoad = function(api){

    function updateListener(objName) {
	    strVal = api.getValueString(objName);
        if(objName == "D" || objName == "E" || objName == "F" || objName == "G" ){
            fourPoints.push(new Point(api.getXcoord(objName), api.getYcoord(objName)));
        }
    }

    api.registerUpdateListener(updateListener);
}


// is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
var views = {'is3D': 0,'AV': 1,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
var applet = new GGBApplet(parameters, '5.0', views);
window.onload = function() {applet.inject(ggbApplet)};
applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
