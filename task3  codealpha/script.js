function openModal(img, text) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalText = document.getElementById("modalText");
  modal.style.display = "flex";
  modalImg.src = img;
  modalText.innerText = text;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

const text = "Hi, I'm Rawan";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 120);
  }
}

typing();

document.getElementById("profilePic").onclick = function() {
  openModal("me.jpg", "This is Rawan - Frontend Developer & Graphic Designer");
};
function animateSkills() {
  const fills = document.querySelectorAll(".fill");
  fills.forEach(fill => {
    if (fill.classList.contains("java")) fill.style.width = "85%";
    if (fill.classList.contains("python")) fill.style.width = "80%";
    if (fill.classList.contains("html")) fill.style.width = "95%";
    if (fill.classList.contains("css")) fill.style.width = "90%";
    if (fill.classList.contains("js")) fill.style.width = "85%";
    if (fill.classList.contains("react")) fill.style.width = "75%";
    if (fill.classList.contains("bootstrap")) fill.style.width = "70%";
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    animateSkills();
  }
});
