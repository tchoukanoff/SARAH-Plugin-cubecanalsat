 
exports.action = function(data, callback, config, SARAH) {
  
var exec = require('child_process').exec;
 
switch(data.val) {

	case "canal0":
	  var process = '%CD%/plugins/cubecanal/bin/canal0.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi la mosa ique";
	break;
	case "canal1":
	  var process = '%CD%/plugins/cubecanal/bin/canal1.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi T F 1";
	break;
	case "canal2":
	  var process = '%CD%/plugins/cubecanal/bin/canal2.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi france 2";	
	break;
	case "canal3":
	  var process = '%CD%/plugins/cubecanal/bin/canal3.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi france 3";	
	break;
	case "canal4":
	  var process = '%CD%/plugins/cubecanal/bin/canal4.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi canal +";
	break;
	case "canal5":
	  var process = '%CD%/plugins/cubecanal/bin/canal5.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi france 5";
	break;
	case "canal6":
	  var process = '%CD%/plugins/cubecanal/bin/canal6.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi M6";								
	break;
	case "canal7":
	  var process = '%CD%/plugins/cubecanal/bin/canal7.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi arté";								
	break;
	case "canal8":
	  var process = '%CD%/plugins/cubecanal/bin/canal8.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi la mosaic canal plus";								
	break;
	case "canal10":
	  var process = '%CD%/plugins/cubecanal/bin/canal10.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi canal plus cinema";								
	break;
	case "canal11":
	  var process = '%CD%/plugins/cubecanal/bin/canal11.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi canal plus sport";								
	break;
	case "canal12":
	  var process = '%CD%/plugins/cubecanal/bin/canal12.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi canal plus serie";								
	break;
	case "cana113":
	  var process = '%CD%/plugins/cubecanal/bin/canal13.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi canal plus family";								
	break;
	case "canal14":
	  var process = '%CD%/plugins/cubecanal/bin/canal14.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi canal plus décalé";								
	break;
	case "canal15":
	  var process = '%CD%/plugins/cubecanal/bin/canal15.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi canal plus a la demande";								
	break;
	case "canal16":
	  var process = '%CD%/plugins/cubecanal/bin/canal16.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi canal sat a la demande";								
	break;
	case "canal84":
	  var process = '%CD%/plugins/cubecanal/bin/canal84.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi discovery";
	break;
	case "canal85":
	  var process = '%CD%/plugins/cubecanal/bin/canal85.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai mi discovery science";
	break;
	case "volplus":
	  var process = '%CD%/plugins/cubecanal/bin/cvolumeup';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai montée le son";
	break;
	case "volmoins":
	  var process = '%CD%/plugins/cubecanal/bin/cvolumedo.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai baisser le son";
	break;
	case "volmuteon":
	  var process = '%CD%/plugins/cubecanal/bin/cvolmute.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai couper le son";
	break;
	case "volmuteoff":
	  var process = '%CD%/plugins/cubecanal/bin/cvolmute.bat';
	  var Txt = new Array; 
			Txt[0] = "voila. J'ai remis le son";
	break;  
	  
	case "play":
	  var process = '%CD%/plugins/cubecanal/bin/cplay.bat';
	  var Txt = new Array; 
			Txt[0] = "ok";
			Txt[1] = "lecture en cour";
			Txt[2] = "je m'en occupe";
			Txt[3] = "c'est fait"; 
	break;
	  
	case "pause":
	  var process = '%CD%/plugins/cubecanal/bin/cpause.bat';
	  var Txt = new Array; 
			Txt[0] = "je met en pause";
			Txt[1] = "je met le cube en pause";
			Txt[2] = "c'est fais";
			Txt[3] = "tout de suite";
			Txt[4] = "tout de suite monsieur";
			Txt[5] = "j'ai mi en pause";
	break;
	  
	case "pplus":
	  var process = '%CD%/plugins/cubecanal/bin/cpplus.bat';
	  var Txt = new Array; 
			Txt[0] = "ok";
			Txt[1] = "c'est fais";
			Txt[2] = "tout de suite";
	break;
	  
	case "pmoins":
	  var process = '%CD%/plugins/cubecanal/bin/cpmoins.bat';
	  var Txt = new Array; 
			Txt[0] = "c'est fait monsieur";
			Txt[1] = "ok";
			Txt[2] = "c'est fait";
	break;

  }    
  

  
 var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process);
   });
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});

 }
 