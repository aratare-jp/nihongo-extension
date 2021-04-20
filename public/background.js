chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: 'foo',
        title: 'bar',
        contexts: ['selection']
    });
    chrome.contextMenus.onClicked.addListener(function (info, tab) {
        chrome.tabs.sendMessage(tab.id, "hello");
    });
});
