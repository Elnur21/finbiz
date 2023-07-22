const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

test("index.html renders correctly", () => {
  const indexHTMLPath = path.join(__dirname, "../pages/index.html");
  const indexHTML = fs.readFileSync(indexHTMLPath, "utf-8");
  const dom = new JSDOM(indexHTML);
  const document = dom.window.document;

  const business_progress_head = document.querySelector(
    ".business-progress .part-1 h2"
  );
  expect(business_progress_head).not.toBeNull();

  const talk_head = document.querySelector(".talk h2")
  expect(talk_head.textContent).toBe("Let’s discuss about how we can help make your insurance better");

  const footer = document.querySelector(".copyright")
  expect(footer.textContent).toBe("FINBIZ - Copyright 2022. All rights reserved.");

});


test("blogs.html renders correctly", () => {
    const indexHTMLPath = path.join(__dirname, "../pages/blogs.html");
    const indexHTML = fs.readFileSync(indexHTMLPath, "utf-8");
    const dom = new JSDOM(indexHTML);
    const document = dom.window.document;
  
    const head = document.querySelector(
      ".directory h2"
    );
    expect(head.textContent).not.toBe("Contacts");
  
    const footer = document.querySelector(".copyright")
    expect(footer.textContent).toBe("FINBIZ - Copyright 2022. All rights reserved.");
  
  });


  test("contacts.html renders correctly", () => {
    const indexHTMLPath = path.join(__dirname, "../pages/contacts.html");
    const indexHTML = fs.readFileSync(indexHTMLPath, "utf-8");
    const dom = new JSDOM(indexHTML);
    const document = dom.window.document;
  
    const head = document.querySelector(
      ".directory h2"
    );
    expect(head.textContent).not.toBe("Contacts");
    expect(head.textContent).toBe("Contact Us");
  
    const footer = document.querySelector(".copyright")
    expect(footer.textContent).toBe("FINBIZ - Copyright 2022. All rights reserved.");
  
  });