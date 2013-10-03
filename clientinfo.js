// Project: [clientinfo.js]
// Description: A tiny script that returns all kinds of relevant data about the client device.
// Version: [0.1]
// Last change: [03-10-2013] [Implementing daypart detection]
// Developerd by: [Gerben van Dijk / Gport] [NL] [www.gport.nl] 

(function() {

	var av = navigator.userAgent.toLowerCase();
	
	var clientinfo = function () { 
	
		var browser = (function(){
		
			var N = navigator.appName, ua= navigator.userAgent, tem;
			var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
			if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
			M = M? [M[1].toLowerCase(), M[2].toLowerCase()]: [N, av,'-?'];
			
			return M;
		
		})();
		
		var os = (function(){
		
			if (av.match(/(win)/)) return 'windows';
			else if (av.match(/(iphone|ipod|ipad)/)) return 'ios';
			else if (av.match(/(mac)/)) return 'macos';
			else if (av.match(/(android)/)) return 'android';
			else if (av.match(/(X11)/)) return 'unix';
			else if (av.match(/(linux)/)) return 'linux';
			else return 'undetecable (not one of the big players)';
	
		})();
		
		var devicetype = function(){
			
			if (av.match(/(mobile|phone)/)) return 'mobile';
			else if (av.match(/(tablet|touch)/)) return 'tablet';
			else return 'desktop';
	
		}();
		
		var osv = function(){
		
			if(os == 'windows' && browser[0] == 'chrome') return /windows (.*?)\)/i.exec(av)[1]; // somehow firefox does get the correct os version (the regex works), but doesnt return the value here.
			if(os == 'windows') return /windows (.*?)\;/i.exec(av)[1]; // somehow firefox does get the correct os version (the regex works), but doesnt return the value here.
			else if(os == 'ios') return /os (.*?)like/i.exec(av)[1].replace(/_/g , ".");
			else if(os == 'macos') return /mac (.*?)\)/i.exec(av)[1].replace(/_/g , ".");
			else if(os == 'android') return /android (.*?);/i.exec(av)[1];
			// still need to test for unix and linux
			
		}();
		
		var aspect = (function(){
		
	        var gcd = function gcd (a, b) {
	            return (b == 0) ? a : gcd (b, a%b);
	        }
	        
	        var w = screen.width;
	        var h = screen.height;
	        var r = gcd (w, h);
	        	        
	        return w/r + ":" + h/r;
		
		})();
		
		var colord = window.screen.colorDepth + 'bit';
		
		var pixelr = window.devicePixelRatio;
		
		var retina = function() {
			
			return pixelr >= 2;
			
		}();
		
		var orie = function(){
					
			if(window.orientation === 90 || window.orientation === -90) return 'landscape';
			else if(window.orientation === 0 || window.orientation === -180) return 'portrait';
			else return 'landscape';
					
		}();
		
		var daypart = function(){
			
			var myDate = new Date();
			
			if (myDate.getHours() <= 8 && myDate.getHours() < 12) return 'early morning';
			else if (myDate.getHours() < 12) return 'morning';
			else if (myDate.getHours() >= 12 && myDate.getHours() <= 18)  return 'afternoon';
			else if (myDate.getHours() > 18) return 'evening';
			
		}();
											
		var browserlang = navigator.language || navigator.userLanguage; 
		
		return { 
		
			'browsername': browser[0], 
			'browserversion': browser[1], 
			'browserlang': browserlang, 
			'osname': os, 
			'osversion': osv, 
			'devicetype': devicetype, 
			'aspectratio': aspect,
			'colordepth': colord,
			'pixelratio': pixelr,
			'retina': retina,
			'orientation': orie,
			'daypart': daypart
		 
		}; 	
		
	}();
	
}).call(this);