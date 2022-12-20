// гамбургер шапки


let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
})


// переключатель по кнопкам

let tabsBtn = document.querySelectorAll('.tabs-btn');
let actives = document.getElementsByClassName('active');
for (i = 0; tabsBtn.length > i; i++) {
  tabsBtn[i].onclick = function () {
    let currentActive = actives[0];
    if (currentActive)
      currentActive.classList.remove("active");

    if (currentActive !== this)
      this.classList.add("active");
  };
}


// переключатель по картинам

const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");

let tabNo = 0;
let contentNo = 0;

tabs.forEach((tab) => {
  tab.dataset.id = tabNo;
  tabNo++;
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.classList.add("non-active");
    });
    this.classList.remove("non-active");
    this.classList.add("active");
    tabContent.forEach((content) => {
      content.classList.add("hidden");
      if (content.dataset.id === tab.dataset.id) {
          content.classList.remove("hidden");
      }
    });
  });
});

tabContent.forEach((content) => {
  content.dataset.id = contentNo;
  contentNo++;
});

let question = document.querySelectorAll('.faq-content__item');

    for (let i = 0; i < question.length; i++) {
      question[i].addEventListener('click', () => {
        question[i].classList.toggle('active');
      })
    }