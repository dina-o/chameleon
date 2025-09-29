const ColourDisplay = document.getElementById("color-chosen");
const divColorBlock = document.getElementById("color-block-chosen");
const toggle = document.querySelector(".switch input");

chrome.runtime.onMessage.addListener((message) => {

    if (message.type === "colorUpdate") {
        ColourDisplay.textContent = `${message.color}`;
        divColorBlock.style.backgroundColor = message.color;
    }

});

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("chameleonEnabled", (data) => {
        const enabled = data.chameleonEnabled ?? true;
        toggle.checked = enabled;
    });
});

toggle.addEventListener("change", () => {
    const enabled = toggle.checked;

    chrome.storage.local.set({ chameleonEnabled: enabled });
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            type: "toggleChameleon",
            enabled
        });
    });
});