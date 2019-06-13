chrome.browserAction.onClicked.addListener(tab => {
	console.log(tab.url)
	console.log(tab)
	chrome.tabs.update(tab.id, {
		url: `https://archive.today/${new Date().getFullYear()}/${tab.url}`,
	})

	// chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
	// 	// currentUrl = tabs[0].url
	// 	console.log(tabs[0].url)
	// 	console.log(tabs)
	// })
})
