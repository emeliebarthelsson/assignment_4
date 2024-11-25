const titleContainer = document.querySelectorAll(".accordion__title-container");
const contentContainer = document.querySelectorAll(".accordion__content-container");
const toggleIcon = document.querySelectorAll(".accordion__toggle-icon");

titleContainer.forEach((title, index) => {
  title.addEventListener("click", () => {
    contentContainer[index].classList.toggle(
      "accordion__content-container--active"
    );

    toggleIcon[index].classList.toggle("rotate-icon");
  });
});

const tabButtons = document.querySelectorAll(".tabs__list-item");
const tabContents = document.querySelectorAll(".component__content");

tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabContents.forEach((content) => content.classList.remove("component__content--active"));

    tabButtons.forEach((button) => button.classList.remove("tabs__list-item--active"));

    e.currentTarget.classList.add("tabs__list-item--active");
    tabContents[index].classList.add("component__content--active");
  });
});