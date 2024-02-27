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

let accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // for (let i = 0; i < accordion.length; i++) {
    //   accordion[i].classList.remove("active");
    // }
    this.classList.toggle("active");
  });
}

// Sage Chat Section

const logPeople = [
  {
    name: "Mahmoud",
    userName: "mahmoud.mk507@gmail.com",
    password: "mody",
  },
  {
    userName: "ahmed.mk507@gmail.com",
    password: "mody",
  },
];

function getInfo() {
  const signEmail = document.querySelector(".sign-email").value;
  const signPassword = document.querySelector(".sign-password").value;
  let isEmailCorrect = false;
  let isPasswordCorrect = false;

  for (let i = 0; i < logPeople.length; i++) {
    if (
      signEmail === logPeople[i].userName &&
      signPassword === logPeople[i].password
    ) {
      localStorage.setItem("isLoggedIn", true); // Store login status
      window.location.href = "index.html"; // Redirect to index.html
      return;
    } else if (signEmail === logPeople[i].userName) {
      isEmailCorrect = true;
    } else if (signPassword === logPeople[i].password) {
      isPasswordCorrect = true;
    }
  }

  // After checking all users, if email is incorrect
  if (!isEmailCorrect) {
    const feedback = document.querySelector(".invalid-feedback.email");
    feedback.style.display = "block";
  }

  // After checking all users, if password is incorrect
  if (!isPasswordCorrect) {
    const feedback = document.querySelector(".invalid-feedback.password");
    feedback.style.display = "block";
  }

  localStorage.setItem("isLoggedIn", false); // Store login status
}

document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const sageDiv = document.querySelector(".sage");
  const sageInputs = document.querySelector(".sage-inputs");
  const welcomeName = document.querySelector(".welcome-name");
  const userWelcome = document.querySelector(".user-welcome");
  const userSigned = document.querySelector(".signed-user");
  const signBtn = document.querySelector(".sign-btn");
  const userInfo = document.querySelector(".user-info");
  const welName = document.querySelector(".wel-name");
  const userNick = document.querySelector(".user-nick");
  const userEmail = document.querySelector(".user-email");

  if (isLoggedIn) {
    signBtn.style.display = "none";
    sageDiv.classList.add("signed");
    userWelcome.classList.add("user-name");
    welcomeName.textContent = `Hello , ${logPeople[0].name}`;
    sageInputs.style.display = "none";
    userSigned.style.display = "block";
    userSigned.classList.remove("d-none");
    userInfo.classList.remove("d-none");
    welName.textContent = logPeople[0].name;
    userNick.textContent = logPeople[0].name;
    userEmail.textContent = logPeople[0].userName;
  }
});

function handelSignOut() {
  localStorage.removeItem("isLoggedIn");
  location.reload();
}
