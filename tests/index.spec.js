const { JSDOM } = require("jsdom");

const dom = new JSDOM();
const document = dom.window.document;

document.body.innerHTML = `
  <button id="scroll">Scroll To Top</button>
  <div class="btns-header">
    <button class="icon-btn-light"></button>
  </div>
  <div class="sidebar"></div>
  <div class="left-sidebar"></div>
  <button class="close"></button>
`;
const {
  showScrollToTopButton,
  updateScrollProgress,
  close,
} = require("../assets/js/index.js");
const scrollToMock = jest.fn();

document.querySelector = jest.fn((selector) => {
  switch (selector) {
    case "#scroll":
      return { addEventListener: jest.fn() };
    case ".btns-header .icon-btn-light":
      return { dispatchEvent: jest.fn() };
    case ".sidebar":
      return { addEventListener: jest.fn() };
    case ".left-sidebar":
      return { addEventListener: jest.fn() };
    case ".close":
      return {
        addEventListener: jest.fn((event, handler) => {
          if (event === "click") {
            close();
          }
        }),
      };
    default:
      return null;
  }
});

window.document.getElementById = jest.fn((id) => {
  if (id === "scroll") {
    return {
      addEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  }
  return null;
});

describe("index.js tests:", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.scrollTo = jest.fn().mockClear();
  });

  test("showScrollToTopButton should display or hide the scroll button based on scroll position", () => {
    setTimeout(() => {
      showScrollToTopButton();

      expect(scrollToMock).not.toHaveBeenCalled();

      const scrollToTopBtn = document.getElementById("scroll");
      if (window.scrollY > 20) {
        expect(scrollToTopBtn.style.display).toBe("flex");
      } else {
        expect(scrollToTopBtn.style.display).toBe("none");
      }
    }, 500);
  });

  test("updateScrollProgress should update the scroll progress bar", () => {
    setTimeout(() => {
      updateScrollProgress();

      expect(scrollToMock).not.toHaveBeenCalled();

      const scrollProgress = document.getElementById("scroll");
      const scrollTop = 30;
      const scrollHeight = 1000 - window.innerHeight;
      const scrolled = scrollTop / scrollHeight;
      expect(scrollProgress.style.background).toBe(
        `conic-gradient(red ${scrolled * 100}%, white ${scrolled * 100}%)`
      );
    }, 0);
  });

  test("clicking the scroll button should scroll to the top", () => {
    window.scrollTo = jest.fn();

    document.getElementById("scroll").dispatchEvent(new Event("click"));

    setTimeout(() => {
      expect(window.scrollTo).toBe({ top: 0, behavior: "smooth" });
    }, 200);
  });

  test("clicking the hamburger button should show the sidebar", () => {
    document
      .querySelector(".btns-header .icon-btn-light")
      .dispatchEvent(new Event("click"));

    const sidebar = document.querySelector(".sidebar");
    const leftSidebar = document.querySelector(".left-sidebar");
    setTimeout(() => {
      expect(sidebar.style.transform).toBe("translateX(0%)");
      expect(leftSidebar.style.display).toBe("block");
    }, 600);
  });

  test("clicking the close button should close the sidebar", () => {
    document.querySelector(".close").addEventListener(new Event("click"));

    const sidebar = document.querySelector(".sidebar");
    const leftSidebar = document.querySelector(".left-sidebar");
    setTimeout(() => {
      expect(sidebar.style.transform).toBe("translateX(100%)");
      expect(leftSidebar.style.display).toBe("none");
    }, 600);
  });
});
