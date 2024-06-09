# Auto Muter Chrome Extension

## Overview

Auto Muter is a Chrome extension designed to enhance your browsing experience by automatically muting tabs if a part of the URL matches with any of the URLs specified by the user in the options page. This is particularly useful for avoiding unwanted noise from specific websites.

## Features

- Automatically mutes tabs based on user-defined URL patterns.
- Easy-to-use options page for managing URL patterns.
- Seamlessly integrates with Chrome's tab management.

## Installation

### From the Chrome Web Store

1. Open Chrome and go to the Chrome Web Store.
2. Find this extension.
3. Click "Add to Chrome" to install the extension.
4. Confirm the installation by clicking "Add Extension" in the popup.

### Manual Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded or cloned this repository.
5. The AutoMute extension should now be visible in your extensions list.

### Enabling Auto Muter in Incognito Mode

1. Open Chrome and navigate to `chrome://extensions/`.
2. Find the Auto Muter extension in the list of installed extensions.
3. Click on the "Details" button for the Auto Muter extension.
4. Scroll down to the `Allow in incognito` section.
5. Toggle the switch to enable the extension in incognito mode.

This extension will now also function in incognito mode, muting tabs based on your specified URL patterns.

## Usage

1. Click on the icon of this extension in the Chrome toolbar to open the options page.
2. Enter the URLs or URL patterns that you want to mute (one per line).
4. Save your changes.
5. The extension will now automatically mute tabs that match any of the specified URL patterns.

## Options Page

The options page allows you to manage the list of URL patterns. Each pattern should be a part of the URL that you want to mute. For example, if you want to mute all tabs from `example.com`, you can simply add `example.com` to the list.

------

### Example URL Patterns

- `example.com` - Mutes all tabs with URLs containing `example.com`.
- `news` - Mutes all tabs with URLs containing `news`.
- `youtube` - Mutes all YouTube video tabs.

## Troubleshooting

If the extension is not working as expected, try the following steps:

1. Ensure that the extension is enabled in `chrome://extensions/`.
2. Verify that the URL patterns are correctly entered in the options page.
3. Reload the tabs that should be muted.
