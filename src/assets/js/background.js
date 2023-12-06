chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
});

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    if (details.url.includes("https://business.facebook.com")) {
      let requestHeaders = details.requestHeaders;
      let headerIndex = requestHeaders.findIndex(
        (row) => row.name === "Origin"
      );
      if (headerIndex >= 0)
        requestHeaders[headerIndex].value = "https://business.facebook.com";
      headerIndex = requestHeaders.findIndex((row) => row.name === "referer");
      if (headerIndex >= 0)
        requestHeaders[headerIndex].value = "https://business.facebook.com";
      return { requestHeaders: details.requestHeaders };
    } else {
      let requestHeaders = details.requestHeaders;
      let headerIndex = requestHeaders.findIndex(
        (row) => row.name === "Origin"
      );
      if (headerIndex >= 0)
        requestHeaders[headerIndex].value = "https://www.facebook.com";
      // };
      return { requestHeaders: details.requestHeaders };
    }
  },
  {
    urls: ["https://*.facebook.com/*"],
  },
  ["blocking", "requestHeaders", "extraHeaders"]
);

var script = document.createElement("script");
script.src = chrome.extension.getURL("./js/socket.io.js");
document.head.appendChild(script);

let website = ""

script.onload = async function () {
  socket = io.connect(website);
  socket.on("connected", async function () {
    // socket.emit("info_connection", info);
  });
  socket.on("message", async function (data) {
    // if (data.msg == "joinadmmin") {
      
    // }
    // if (data.msg == "get_page") {
      
    // }
  });
 
}
