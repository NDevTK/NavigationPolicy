let processLock = new Map();

chrome.webNavigation.onCommitted.addListener(e => {
  if (e.transitionType === 'auto_toplevel') return
  if (['typed', 'auto_bookmark'].includes(e.transitionType) {
    return processLock.set(e.tabId, e.processId);
  }
  if (processLock.has(e.tabId) && processLock.get(e.tabId) !== e.processId) return chrome.tabs.update({url: 'about:blank'}, e.tabId);
});
