if (typeof browser == "undefined") {
  var browser = chrome
}

var GLOBAL_COUNT = 0;

/**
 * add
 * @param details
 * @return {*}
 */
function addCount(details) {
  GLOBAL_COUNT++;
  return details
}

/**
 *  delete
 * @param details
 * @return {*}
 */
function minsCount(details) {
  GLOBAL_COUNT--;
  browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
    if (tabs != null && tabs.length != null && tabs.length > 0) {
      browser.tabs.sendMessage(tabs[0].id, {GLOBAL_COUNT});
    }
  });
  return details
}

/**
 * work for fetch and ajax
 */
browser.webRequest.onBeforeRequest.addListener(addCount, {urls: ["<all_urls>"]});

browser.webRequest.onCompleted.addListener(minsCount, {urls: ["<all_urls>"]});

browser.webRequest.onErrorOccurred.addListener(minsCount, {urls: ["<all_urls>"]});

