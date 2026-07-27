
// نمایش نرم کارتها هنگام اسکرول

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}
});
}, {
threshold: 0.2
});

cards.forEach((card) => {
card.style.opacity = "0";
card.style.transform = "translateY(50px)";
card.style.transition = "all .8s ease";

observer.observe(card);
});

// بزرگ شدن دکمهها هنگام قرار گرفتن ماوس

document.querySelectorAll(".btn").forEach(btn => {
btn.addEventListener("mouseenter", () => {
btn.style.transform = "scale(1.08)";
});

btn.addEventListener("mouseleave", () => {
btn.style.transform = "scale(1)";
});
});

// نمایش سال جاری در فوتر

const footer = document.querySelector("footer p");


footer.innerHTML =
© ${new Date().getFullYear()} تمامی حقوق این وبسایت متعلق به مهندس مجید وکیلی است.;
