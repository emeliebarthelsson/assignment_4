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
