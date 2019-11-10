chrome.runtime.onMessage.addListener(function({ message, payload }) {
  if (message !== 'CHANGE_TAB') {
    return null;
  }
  chrome.windows.getCurrent({ populate: true }, window => {
    const totalTabsLength = window.tabs.length;
    const nextTabIndex =
      payload === "last" ? totalTabsLength - 1 : payload - 1;
    if (nextTabIndex > totalTabsLength - 1) {
      return null;
    }
    chrome.tabs.update(window.tabs[nextTabIndex].id, { active: true });
  });
});

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   chrome.tabs.create({ url: `http://google.com/${request.payload}` });
// });
