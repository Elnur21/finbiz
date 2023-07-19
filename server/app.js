const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const team = [
  { fullName: "John Doe", img: "team-member1.png", position: "Manager" },
  { fullName: "Jane Smith", img: "team-member2.png", position: "Developer" },
  { fullName: "Bob Johnson", img: "team-member3.png", position: "Designer" },
  { fullName: "Quick Silver", img: "team-member4.png", position: "Designer" },
];
const together = [
  {
    title: "John Doe",
    img: "businnes1.jpg",
    description: "The Mastermind Behind Our Success",
    type: "Financial",
  },
  {
    title: "Jane Smith",
    img: "businnes2.jpg",
    description: "The Coding Guru",
    type: "Financial",
  },
  {
    title: "Bob Johnson",
    img: "businnes3.jpg",
    description: "The Design Maestro",
    type: "Human",
  },
  {
    title: "Quick Silver",
    img: "businnes4.jpg",
    description: "The Creative Visionary",
    type: "Human",
  },
  {
    title: "Ruby Rose",
    img: "businnes1.jpg",
    description: "The Problem Solver Extraordinaire",
    type: "Financial",
  },
  {
    title: "Max Power",
    img: "businnes3.jpg",
    description: "The Innovator with a Spark",
    type: "Human",
  },
];
const latest = [
  {
    title: "DAVID DOLEAN",
    img: "post1.png",
    description: "The quick settle tips of the new ages exist",
    date: "25. 05. 2023",
  },
  {
    title: "JANE SMITH",
    img: "post2.png",
    description: "The Coding Guru lorem impusm",
    date: "12. 01. 2023",
  },
  {
    title: "BOB JOHNSON",
    img: "post3.png",
    description: "The Design lorem ipsum Maestro",
    date: "02. 04. 2022",
  },
];

const blogs = [
  {
    title: "Tbuilding smart business grow solution for you",
    name: "John",
    img: "blog1.jpg",
    day: 4,
    month: "Jan",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur elit.",
    name: "Alice",
    img: "blog2.jpg",
    day: 12,
    month: "Feb",
  },
  {
    title: "Commodi eum earum ab tenetur facere tempora",
    name: "David",
    img: "blog3.jpg",
    day: 19,
    month: "Mar",
  },
  {
    title: "Unde quas quis provident velit",
    name: "Sarah",
    img: "blog4.jpg",
    day: 27,
    month: "Apr",
  },
  {
    title: "Magni ipsam, commodi eum earum ab tenetur",
    name: "Michael",
    img: "blog5.jpg",
    day: 3,
    month: "May",
  },
  {
    title: "Tenetur facere tempora explicabo et cum",
    name: "Emily",
    img: "blog6.jpg",
    day: 10,
    month: "Jun",
  },
  {
    title: "The Design lorem ipsum Maestro",
    name: "Daniel",
    img: "blog7.jpg",
    day: 18,
    month: "Jul",
  },
  {
    title: "The lorem Design lorem ipsum Maestro",
    name: "Olivia",
    img: "blog8.jpg",
    day: 25,
    month: "Aug",
  },
  {
    title: "Lorem Design lorem ipsum Maestro",
    name: "William",
    img: "blog9.jpg",
    day: 1,
    month: "Sep",
  },
  {
    title: "Design my lorem ipsum Maestro",
    name: "Sophia",
    img: "blog10.jpg",
    day: 8,
    month: "Oct",
  },
  {
    title: "Different lorem ipsum dolor",
    name: "James",
    img: "blog6.jpg",
    day: 16,
    month: "Nov",
  },
  {
    title: "Last lorem impsum by me",
    name: "Emma",
    img: "blog4.jpg",
    day: 23,
    month: "Dec",
  },
];

app.get("/team", (req, res) => {
  res.status(200).json(team);
});
app.get("/together", (req, res) => {
  res.status(200).json(together);
});
app.get("/latest", (req, res) => {
  res.status(200).json(latest);
});
app.get("/blogs", (req, res) => {
  let page = req.query.page;
  const slicedBlogs = blogs.slice((page-1)*4, page*4);
  res.status(200).json({slicedBlogs,blogs});
});

app.listen(3000, () => {
  console.log("start my server");
});
