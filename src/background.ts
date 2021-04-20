chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
      id: 'foo',
      title: 'bar',
      contexts: ['selection']
    }
  );

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.tabs.sendMessage(tab.id, "hello");
  });
});
