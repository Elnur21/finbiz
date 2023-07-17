let team = document.querySelector(".articles");
fetch("http://localhost:3000/blogs")
  .then((res) => res.json())
  .then((data) => {
    let text = "";
    data.forEach((blog) => {
      text += `
      <article>
      <div class="top">
        <a href="#"
          ><img src="/assets/images/${blog.img}" alt="blog"
        /></a>
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
      <div class="body">
        <a href="#">${blog.title}</a>
      </div>
    </article>
        `;
    });
    team.innerHTML += text;
  });