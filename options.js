// Event listener for the save button.
document.getElementById('save').addEventListener('click', function() {
	const urls = document.getElementById('urls').value.split('\n').filter(Boolean); // Extract only non-empty lines from the input.
	chrome.storage.sync.set({ 'mutedUrls': urls }, function() {
		if (urls.length === 0) {
			unmuteAllTabs();
		} else {
			updateAllTabs();
		}
	});
	
	const date = new Date();
	document.getElementById('saveStatus').innerText = `Changes saved on: ${date.toLocaleString()}`;
});

// Loads stored URLs when the options page is loaded.
function loadOptions() {
	chrome.storage.sync.get('mutedUrls', function(data) {
		if (data.mutedUrls !== 'undefined') {
			document.getElementById('urls').value = data.mutedUrls.join('\n'); // Display stored URLs
		}
	});
}

// Load options when the document is fully loaded.
document.addEventListener('DOMContentLoaded', loadOptions);

// Updates muting for all tabs based on stored URLs.
function updateAllTabs() {
	chrome.storage.sync.get('mutedUrls', function(data) {
		const urls = data.mutedUrls || [];
		chrome.tabs.query({}, function(tabs) {
			tabs.forEach(tab => {
				const isMatch = urls.some(storedUrl => tab.url.includes(storedUrl.trim()));
				chrome.tabs.update(tab.id, { muted: isMatch }); // Mute or unmute the tab based on URL match
			});
		});
	});
}

// Unmutes all tabs.
function unmuteAllTabs() {
	chrome.tabs.query({}, function(tabs) {
		tabs.forEach(tab => {
			chrome.tabs.update(tab.id, { muted: false });
		});
	});
}

/**
 * Checks if the given URL is an internal Chrome URL.
 * @param {string} url - The URL to check.
 * @returns {boolean} True if the URL is internal, otherwise false.
 */
function isInternalURL(url) {
	return url.startsWith('chrome://') || url.startsWith('chrome-extension://');
}