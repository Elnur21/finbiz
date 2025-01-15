let team = document.querySelector(".team .body");
fetch("http://localhost:3000/team")
  .then((res) => res.json())
  .then((data) => {
    let text = "";
    data.forEach((member) => {
      text += `
        <article>
              <div class="icons">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
              </div>
              <figure><img src="/assets/images/${member.img}" /></figure>
              <div class="content">
                <h3>${member.fullName}</h3>
                <p>${member.position}</p>
              </div>
            </article>
        `;
    });
    team.innerHTML += text;
  });

let together = document.querySelector(".business-progress-2 .body");
fetch("http://localhost:3000/together")
  .then((res) => res.json())
  .then((data) => {
    let text = "";
    data.forEach((t) => {
      text += `
      <article class="tab-content" data-content=${t.type}>
      <a href="index.html">
        <img src="/assets/images/${t.img}" alt="" />
        <div class="content">
          <h5><a href="#">${t.title}</a></h5>
          <p>${t.description}</p>
        </div>
      </a>
    </article>
        `;
    });
    together.innerHTML += text;
  });

let latest = document.querySelector(".latest .body");
fetch("http://localhost:3000/latest")
  .then((res) => res.json())
  .then((data) => {
    let text = "";
    data.forEach((t) => {
      text += `
        <article>
            <div class="card-head">
              <img src="/assets/images/${t.img}" alt="" />
              <div class="date">${t.date}</div>
            </div>
            <div class="card-body">
              <p>
                BUSINESS SOLUTION <span class="byUser">/ BY ${t.title}</span>
              </p>
              <h3>
                <a href="#">${t.description}</a>
              </h3>
              <a href="#" class="read-more">
                <span class="icon-btn-red">
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
                Read More
              </a>
            </div>
          </article>
          `;
    });
    latest.innerHTML += text;
  });

let watch_btn = document.querySelector(".watch-btn");
let watch_modal = document.querySelector(".watch-modal");
let watch = document.querySelector(".watch");
let underlay = document.querySelector(".underlay");

watch_btn.addEventListener("click", () => {
  watch_modal.style.display = "block";
  watch.style.zIndex = "100";
});
underlay.addEventListener("click", () => {
  watch_modal.style.display = "none";
  watch.style.zIndex = "90";
});
