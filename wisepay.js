// Power Section
let urlImagesBg = [
  "./Images/Encrypted.png",
  "./Images/Personalized.png",
  "./Images/Universal.png",
];
let powerParagraphs = [
  "Experience peace of mind with AI platform, offering top-tier encryption and security functionality that safeguard your data at every step.",
  "Our platform delivers personalized recommendations and insights based on your unique financial situation and goals.",
  "Our platform is designed to support all major credit cards, making it easy for you to manage all your cards in one place.",
];

const powerImg = document.querySelector(".power-image img");
const powerP = document.querySelector(".power-image p");
const powerLis = document.querySelectorAll(".power-ul li");

powerLis.forEach((li, index) => {
  li.addEventListener("click", function (e) {
    powerLis.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    powerImg.src = urlImagesBg[index];
    powerP.textContent = powerParagraphs[index];
  });
});

// Blogs Section => Go to blog page
let openBlogs = document.querySelectorAll(".open-blog");

// Declare blog page elements

const blogNameAddress = document.querySelector(".blog-page .blogNameAddress");
const blogTitle = document.querySelector(".blog-page .blog-title");
const blogDate = document.querySelector(".blog-page .blog-date");
const blogImage = document.querySelector(".blog-page .blog-img");
const blogText = document.querySelector(".blog-page .blog-text");

openBlogs.forEach((open) => {
  open.addEventListener("click", function (e) {
    const parent = e.currentTarget.parentNode.parentNode;
    const title = parent.querySelector(".card-title").textContent;
    const date = parent.querySelector(".blog-date").textContent;
    const image = parent.querySelector(".blog-img").src;
    const pText = parent.querySelector(".blog-text").textContent;

    // Construct the URL with query parameters
    const url = new URL("blog.html", window.location.href);
    url.searchParams.append("blogAddress", title);
    url.searchParams.append("date", date);
    url.searchParams.append("image", image);
    url.searchParams.append("text", pText);

    // Redirect to the new URL
    window.location.href = url.href;
  });
});

// Update content based on query parameters when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const blogAddress = params.get("blogAddress");
  const date = params.get("date");
  const image = params.get("image");
  const pText = params.get("text");

  blogNameAddress.textContent = blogAddress;
  blogTitle.textContent = blogAddress;
  blogDate.textContent = date;
  blogImage.src = image;
  blogText.textContent = pText;
});
