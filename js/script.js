import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const foodCards = document.querySelectorAll(".popular-foods__card");
const foodDetails = document.querySelector(".popular-foods__details");
const closeFoodDetails = document.querySelector(".popular-foods__details-close");
const detailsImage = document.querySelector(".popular-foods__details-image");
const detailsTitle = document.querySelector(".popular-foods__details-title");
const detailsDescription = document.querySelector(".popular-foods__details-description");
const detailsRating = document.querySelector(".popular-foods__details-rating");
const detailsPrice = document.querySelector(".popular-foods__details-price");
const foodFilters = document.querySelectorAll(".popular-foods__filter-btn");

const hideFoodDetails = () => {
  foodDetails.classList.remove("open");
  foodDetails.setAttribute("aria-hidden", "true");
};

const showFoodDetails = (card) => {
  detailsImage.src = card.dataset.foodImage;
  detailsImage.alt = card.dataset.foodName;
  detailsTitle.textContent = card.dataset.foodName;
  detailsDescription.textContent = card.dataset.foodDescription;
  detailsRating.textContent = `★ ${card.dataset.foodRating}`;
  detailsPrice.textContent = card.dataset.foodPrice;
  foodDetails.classList.add("open");
  foodDetails.setAttribute("aria-hidden", "false");
};

foodCards.forEach((card) => {
  card.addEventListener("click", () => showFoodDetails(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showFoodDetails(card);
    }
  });
});

foodFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    foodFilters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    const category = filter.dataset.category;
    foodCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

closeFoodDetails.addEventListener("click", hideFoodDetails);
foodDetails.addEventListener("click", (event) => {
  if (event.target === foodDetails) hideFoodDetails();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideFoodDetails();
});
