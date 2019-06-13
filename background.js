chrome.browserAction.onClicked.addListener(tab => {
	console.log(tab.url)
	console.log(tab)
	if (tab.url.substring(0, 16) !== `https://archive.`) {
		chrome.tabs.update(tab.id, {
			url: `https://archive.today/${new Date().getFullYear()}/${tab.url}`,
		})
	} else {
		chrome.tabs.goBack(tab.id)
	}
})
