

if (typeof browser == "undefined") {
  var browser = chrome
}

/**
 * use inject code to get background info.
 */
browser.runtime.onMessage.addListener(function (message) {
  if (message != null && message.GLOBAL_COUNT != null){
    var script = document.createElement("script");
    script.textContent = `window.COUNT_OF_NETWORK_ACTIVE = ${message.GLOBAL_COUNT}`;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
  }
})



