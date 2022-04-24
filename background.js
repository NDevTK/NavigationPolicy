let processLock = new Map();

chrome.webNavigation.onCommitted.addListener(e => {
  if (processLock.has(e.tabId) && processLock.get(e.tabId) !== e.processId) return
  if (e.transitionType.typed || e.transitionType.auto_toplevel || e.transitionType.auto_bookmark) {
    return processLock.set(e.tabId, e.processId);
  }
  chrome.tabs.update({url: 'about:blank'}, e.tabId);
});
