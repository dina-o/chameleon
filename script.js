const ColourDisplay = document.getElementById("color-chosen");
const divColorBlock = document.getElementById("color-block-chosen");

chrome.runtime.onMessage.addListener((message) => {

    if (message.type === "colorUpdate") {
        ColourDisplay.textContent = `${message.color}`;
        divColorBlock.style.backgroundColor = message.color;
    }

})