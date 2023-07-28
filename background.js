chrome.tabs.onActivated.addListener(async () => {
  const activeTab = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (activeTab[0].url.includes("github")) {
    chrome.scripting.executeScript({
      target: { tabId: activeTab[0].id },
      func: () => {
        // const divs = document.querySelectorAll("div");
        // divs.forEach((div) => {
        //   div.style.backgroundColor = "red";
        // });
      },
    });
  }
});
