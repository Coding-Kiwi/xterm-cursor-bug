// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const xterm = require('xterm').Terminal;

let term = new xterm({
    cursorBlink: true,
    rendererType: 'canvas',
    cursorStyle: "underline",
});

term.open(document.getElementById("term"));

window.addEventListener("focus", e => {
    console.log(e);

    term.focus();
}, false);