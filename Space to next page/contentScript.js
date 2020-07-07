chrome.storage.local.get('spToNxtState', function(data) {
		onOffSpaceToNxtPageListener(data.spToNxtState);
});

function checkScrollPosAndLoadNextPage(e) {
		if (e.code === "Space" && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			var activeFocusedElement = document.activeElement;
			if(activeFocusedElement.type != "text" && activeFocusedElement.getAttribute("role") != "textbox" 
												&& activeFocusedElement.tagName != "INPUT") {
													var urlToOpen = findNxtPageUrl();
													if (urlToOpen != null) {
														window.open(urlToOpen, "_self");
		  }
	  }
  }

}

function onOffSpaceToNxtPageListener(state) {
		switch(state) {
			case true: 
				document.addEventListener('keydown', checkScrollPosAndLoadNextPage);
				break;
			case false: 
				document.removeEventListener('keydown', checkScrollPosAndLoadNextPage);
	};

}

chrome.storage.onChanged.addListener(function(changes, namespace) {
	for(var key in changes) {
		if(key === "spToNxtState") {
			onOffSpaceToNxtPageListener(changes[key].newValue);
		}
	}
});



function findNxtPageUrl() {
	var nxtUrl = "";
	if((nxtUrl = document.querySelectorAll('[rel="next"]')[0]) != undefined) {
		nxtUrl = nxtUrl.href;
		}
		else if ((nxtUrl = document.getElementById("pnnext")) != null) {
			
	}
	return nxtUrl;

}
