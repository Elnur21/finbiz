const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

test("index.html style renders correctly", () => {
  const indexHTMLPath = path.join(__dirname, "../pages/index.html");
  const css = path.join(__dirname, "../css/main.css");
  const indexHTML = fs.readFileSync(indexHTMLPath, "utf-8");
  const dom = new JSDOM(indexHTML);
  const document = dom.window.document;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
  const watch_head = document.querySelector(".watching h2");
  const watch_style = dom.window.getComputedStyle(watch_head);
  expect(watch_style.fontSize).toBe("1.5em");
});
