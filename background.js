// Listener for tab updates to adjust mute state.
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.storage.sync.get('mutedUrls', function(data) {
		const urls = data.mutedUrls || [];
		if (urls.length === 0) {
			chrome.tabs.update(tabId, { muted: false }); // Unmute if no URLs are stored.
		} else {
			const isMatch = urls.some(storedUrl => tab.url.includes(storedUrl.trim()));
			chrome.tabs.update(tabId, { muted: isMatch }); // Mute or unmute based on URL presence.
		}
	});
});

// Occurs when the user clicks on the extension icon of this extension.
chrome.action.onClicked.addListener(function(tab) {
	chrome.runtime.openOptionsPage();
});