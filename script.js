const ColourDisplay = document.getElementById("color-chosen");

browser.runtime.onMessage.addListener((message) => {

    if (message.type === "colorUpdate") {
        ColourDisplay.textContent = `colour: ${message.color}`;
    }

})