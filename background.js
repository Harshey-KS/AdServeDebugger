chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      console.log("Captured request:", details.url);
      // You can add filtering logic here
    },
    { urls: ["<all_urls>"] },
    ["requestBody"]
  );
  