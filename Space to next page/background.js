
chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.set({spToNxtState: true});
});

chrome.runtime.onStartup.addListener(function() {
	chrome.storage.local.get('spToNxtState', function(data) {
 	});
});
function enableDisableExt() {
	chrome.storage.local.get('spToNxtState', function(data) {
		var state = data.spToNxtState;
	
	
		chrome.browserAction.setIcon({path: state ? "disabled_icon.png" : "enabled_icon.png"});
		chrome.storage.local.set({spToNxtState: !state});
});
}

chrome.browserAction.onClicked.addListener(enableDisableExt);