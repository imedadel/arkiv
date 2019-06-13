chrome.browserAction.onClicked.addListener(tab => {
	console.log(tab.url)
	console.log(tab)
	chrome.tabs.update(tab.id, {
		url: `https://archive.today/${new Date().getFullYear()}/${tab.url}`,
	})
})
