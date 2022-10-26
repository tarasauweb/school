document.addEventListener("DOMContentLoaded", function() {
    var script = document.getElementById('a23d6b0fe822db095965af87e3cd2fec028e6443');

	var par = script.parentNode;
	script.parentNode.style.overflow = 'hidden';

	var iframe = document.createElement('iframe');
	iframe.src = 'https://womango.getcourse.ru/pl/lite/widget/widget'
		+ "?" + window.location.search.substring(1)
		+ "&id=761170"
		+ "&ref=" + encodeURIComponent(document.referrer)
		+ "&loc=" + encodeURIComponent(document.location.href);
	iframe.style.width = '100%';
	iframe.style.height = '0px';
	iframe.style.border = 'none';
	iframe.style.overflow = 'hidden';
	iframe.setAttribute('allowfullscreen', 'allowfullscreen');
    iframe.className = '588';
	iframe.id = '2318a78073541f68a6d61b0c13b030819640c32c' + '_' + iframe.className;
	// name можно получить изнутри iframe
	iframe.name = iframe.className;

	var iframeId = iframe.id;

	var gcEmbedOnMessage = function(e) {
		var insertedIframe = document.getElementById(iframeId);
		if (!insertedIframe) {
			return;
		}

		if (e.data.uniqName == 'a23d6b0fe822db095965af87e3cd2fec028e6443') {
			if (e.data.height) {
			    if (e.data.iframeName) {
					if (e.data.iframeName == iframe.name) {
                        par.style.height = ( e.data.height ) + "px";
						insertedIframe.style.height = (e.data.height) + "px";
                    }
                } else {
                    par.style.height = ( e.data.height ) + "px";
					insertedIframe.style.height = (e.data.height) + "px";
                }
            }
		}
	};

	if (window.addEventListener) {
		window.addEventListener("message", gcEmbedOnMessage, false);
	}  else if (window.attachEvent) {
		window.attachEvent('onmessage', gcEmbedOnMessage)
	} else {
		window['onmessage'] = gcEmbedOnMessage
	}

	script.parentNode.insertBefore(iframe, script);
	par.removeChild( script )
});

var getLocation = function(href) {
	var l = document.createElement("a");
	l.href = href;
	return l;
};

var currentScript = document.currentScript || (function() {
	var scripts = document.getElementsByTagName('script');
	return scripts[scripts.length - 1];
})();

var domain = ( (getLocation( currentScript.src )).hostname );
