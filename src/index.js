import "./index.html";
import "./index.scss";

// import html from "./index.html";
// import scss from "./index.scss";

// SPECIAC FUNCTION GETCLASS - START
const get = (a) => document.querySelector(a);

// SPECIAC FUNCTION GETCLASS - END

const navSidePanelMenuOpen = get(".nav__menu");
const navSidePanelCrossOut = get(".side-panel__cross");
const navSidePanel = get(".id-of-side-panel");
const main = get("main");
const header = get("header");

//  __BUTTON 'READ MORE' DOES NOT WORK
const showMoreText = document.querySelector(".main-text-img__text--text");
const showMoreButton = document.querySelector(".main-text-img__text--button");

//  __WHY DOES NOT WORK?
// const blur = document.getElementsByClassName("_blur");

navSidePanelMenuOpen.onclick = () => {
  navSidePanel.classList.add("_open");
  main.classList.add("_blur");
  header.classList.add("_blur");
};

navSidePanelCrossOut.onclick = () => {
  navSidePanel.classList.remove("_open");
  main.classList.remove("_blur");
  header.classList.remove("_blur");
};

//  __WHY DOES NOT WORK? ONLY CLICK TO 'MAIN' WORKS
main.onclick = () => {
  navSidePanel.classList.remove("_open");
  main.classList.remove("_blur");
  header.classList.remove("_blur");
};

blur.onclick = () => {
  navSidePanel.classList.remove("_open");
  main.classList.remove("_blur");
  header.classList.remove("_blur");
};

showMoreButton.onclick = () => {
  showMoreText.classList.toggle("_show-more");
};

// SWIPER MOBILE START
new Swiper(".swiper", {
  // пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1.2,

  spaceBetween: 16,
});
// SWIPER MOBILE END

// SWIPER  2 MOBILE START
new Swiper(".swiper--any-types", {
  // пагинация
  pagination: {
    el: ".swiper-pagination--any-types",
    clickable: true,
  },

  slidesPerView: 1.2,

  spaceBetween: 16,
});
// SWIPER 2 MOBILE END

// SWIPER  3 MOBILE START
new Swiper(".swiper--prices", {
  // пагинация
  pagination: {
    el: ".swiper-pagination--prices",
    clickable: true,
  },

  slidesPerView: 1.2,

  spaceBetween: 16,
});
// SWIPER 3 MOBILE END

// SWIPER TABLET START
const readMore = document.querySelector(".swiper--readmore--tablet");
const readMoreImg = readMore.querySelector(".img__read-more--tablet");
const readMoreText = readMore.querySelector(".read-more--text--tablet");
const readMoreTextNo = readMore.querySelector(".read-more--text--no--tablet");
const maxHeightOfFlex = document.querySelector(
  ".image-slider__wrapper--tablet"
);

readMore.onclick = () => {
  readMoreImg.classList.toggle("js-img__read-more--tablet");
  readMoreText.classList.toggle("js-read-more--text--tablet");
  readMoreTextNo.classList.toggle("js-read-more--text--no--tablet");
  maxHeightOfFlex.classList.toggle("js-image-slider__wrapper--tablet");
};
// SWIPER TABLET END

// SWIPER TABLET Repair Of Any Brands START
const readMoreAnyTypes = document.querySelector(
  ".swiper--readmore--tablet--any-types"
);
const readMoreImgAnyTypes = readMoreAnyTypes.querySelector(
  ".img__read-more--tablet--any-types"
);
const readMoreTextAnyTypes = readMoreAnyTypes.querySelector(
  ".read-more--text--tablet--any-types"
);
const readMoreTextNoAnyTypes = readMoreAnyTypes.querySelector(
  ".read-more--text--no--tablet--any-types"
);
const maxHeightOfFlexAnyTypes = document.querySelector(
  ".image-slider__wrapper--tablet--any-types"
);

readMoreAnyTypes.onclick = () => {
  readMoreImgAnyTypes.classList.toggle("js-img__read-more--tablet--any-types");
  readMoreTextAnyTypes.classList.toggle(
    "js-read-more--text--tablet--any-types"
  );
  readMoreTextNoAnyTypes.classList.toggle(
    "js-read-more--text--no--tablet--any-types"
  );
  maxHeightOfFlexAnyTypes.classList.toggle(
    "js-image-slider__wrapper--tablet--any-types"
  );
};
// SWIPER TABLET Repair Of Any Brands END

// SWIPER TABLET Prisec Brands START
const readMorePrices = get(".swiper--readmore--tablet--prices");
const readMoreImgPrices = get(".img__read-more--tablet--prices");
const readMoreTextPrices = get(".read-more--text--tablet--prices");
const readMoreTextNoPrices = get(".read-more--text--no--tablet--prices");
const maxHeightOfFlexPrices = get(".image-slider__wrapper--tablet--prices");

readMorePrices.onclick = () => {
  readMoreImgPrices.classList.toggle("js-img__read-more--tablet--prices");
  readMoreTextPrices.classList.toggle("js-read-more--text--tablet--prices");
  readMoreTextNoPrices.classList.toggle(
    "js-read-more--text--no--tablet--prices"
  );
  maxHeightOfFlexPrices.classList.toggle(
    "js-image-slider__wrapper--tablet--prices"
  );
};
// SWIPER TABLET Prisec Brands END
