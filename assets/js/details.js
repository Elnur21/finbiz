let comments = document.querySelector(".comments");
let left_top_img = document.querySelector(".left-top-img");
let info = document.querySelector(".info");
let title = document.querySelector(".first-title");
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/blogs?page=1")
    .then((res) => res.json())
    .then((data) => {
      const { blogs } = data;
      let blog = blogs.filter(
        (blog) => blog.day == window.location.href.split("#")[1]
      )[0];
      left_top_img.innerHTML = `<img src="/assets/images/${blog.img}" class="main-img" alt="" />`;
      info.innerHTML = `
            <p>
              <i class="fa-regular fa-circle-user text-red"></i> by ${blog.name}
            </p>
            <p><i class="fa-regular fa-clock text-red"></i> by ${blog.name}</p>
            <p><i class="fa-solid fa-tags text-red"></i> by ${blog.name}</p>
      `;
      title.innerHTML = `${blog.title}`;
      let text = "";
      blog.comments.forEach((comment) => {
        text += `
            <div class="imgs">
                <div>
                  <img src="/assets/images/author.jpg" alt="comment" />
                </div>
                <div class="comment-info">
                  <p class="speciality">${comment.topic}</p>
                  <h2 class="name">${comment.fullName}</h2>
                  <p class="comment">
                    ${comment.description}
                  </p>
                </div>
            </div>
        `;
      });
      text += `<div class="imgs">
      <div>
        <img src="/assets/images/author.jpg" alt="comment" />
      </div>
      <div class="comment-info">
        <p class="speciality">Brand Designer</p>
        <h2 class="name">Angelina H. Dekato</h2>
        <p class="comment">
          Nullam varius luctus pharetra ultrices volpat facilisis
          donec tortor, nibhkisys habitant curabitur at nunc nisl
          magna ac rhoncus vehicula sociis tortor nist hendrerit
          molestie integer.
        </p>
      </div>
    </div>
    <div class="contact-form">
      <h4>Leave a Reply</h4>
      <form>
        <input type="text" id="name" placeholder="Your Name" required/>
        <input type="email" id="email" placeholder="Your Email" />
        <input type="text" id="subject" placeholder="Your Subject" required/>
        <textarea
            required
          name="text"
          id="textArea"
          rows="5"
          placeholder="Type Your Message"
        ></textarea>
        <div class="form-button">
          <button type="button" id="add">Submit Message</button>
        </div>
      </form>
    </div>`;
      comments.innerHTML = text;

      let add_comment = document.getElementsByClassName("form-button")[0];
      let name = document.getElementById("name");
      let subject = document.getElementById("subject");
      let textarea = document.getElementById("textArea");
      console.log(add_comment);
      add_comment.addEventListener("click", () => {
        let mydiv = document.createElement("div");
        mydiv.className = "imgs";
        mydiv.innerHTML += `
          <div>
            <img src="/assets/images/author.jpg" alt="comment" />
          </div>
          <div class="comment-info">
            <p class="speciality">${subject.value}</p>
            <h2 class="name">${name.value}</h2>
            <p class="comment">
              ${textarea.value}
            </p>
          </div>
        `;
        name.value = "";
        subject.value = "";
        textarea.value = "";
        comments.prepend(mydiv);
      });
    });
});
