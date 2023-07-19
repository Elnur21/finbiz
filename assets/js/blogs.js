import { default as changeActive } from "./index.js";

let posts = document.querySelector(".articles");
let paginations = document.querySelector(".paginations");

fetch("http://localhost:3000/blogs?page=1")
  .then((res) => res.json())
  .then((data) => {
    const { slicedBlogs, blogs } = data;
    let text = "";
    getBlogs(slicedBlogs);
    for (let index = 1; index <= blogs.length / 4; index++) {
      if (index === 1) {
        text += `
          <a class="pagination active" href="#${index}">${index}</a>
        `;
      } else {
        text += `
          <a class="pagination" href="#${index}">${index}</a>
        `;
      }
    }
    text += `<a href="#skip"><i class="fa-solid fa-angles-right"></i></a>`;
    paginations.innerHTML = text;
    addPaginationListeners();
  });

function addPaginationListeners() {
  let links = document.getElementsByClassName("pagination");
  [...links].forEach((link) => {
    link.addEventListener("click", function (event) {
      changeActive(this, [...links]);
      event.preventDefault();
      let pageNumber = link.getAttribute("href").substring(1);
      fetch(`http://localhost:3000/blogs?page=${pageNumber}`)
        .then((res) => res.json())
        .then((data) => {
          const { slicedBlogs } = data;
          posts.innerHTML = "";
          getBlogs(slicedBlogs);
        });
    });
  });
}

function getBlogs(slicedBlogs) {
  let text = "";
  slicedBlogs.forEach((blog) => {
    text += `
      <article class="post-article">
        <div class="top">
          <a href="details.html#${blog.day}" class="post-article-img">
            <img src="/assets/images/${blog.img}" alt="blog" />
          </a>
          <div class="info">
            <span>
              <i class="fa-regular fa-circle-user"></i> by ${blog.name}
            </span>
            <span> <i class="fa-solid fa-tags"></i> Business </span>
          </div>
          <div class="date">
            <span>${blog.day}</span> <br />
            ${blog.month}
          </div>
        </div>
        <div class="body" class="post-article-title">
          <a href="details.html#${blog.day}">${blog.title}</a>
        </div>
      </article>
    `;
  });
  posts.innerHTML = text;
}

let searc_inp = document.querySelector(".search-inp");
let searc_form = document.querySelector(".search");
searc_form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/blogs?page=1")
    .then((res) => res.json())
    .then((data) => {
      const { blogs } = data;
      getBlogs(blogs.filter((blog) => blog.title.includes(searc_inp.value)));
      searc_inp.value = "";
    });
});
