import "./index.html";
import "./index.scss";

// import html from "./index.html";
// import scss from "./index.scss";

// SPECIAC FUNCTION GETCLASS - START
const get = (a) => document.querySelector(a);

// SPECIAC FUNCTION GETCLASS - END

// SIDE PANNEL ANIMATION START
const navSidePanelMenuOpen = get(".nav__menu");
const navSidePanelCrossOut = get(".side-panel__cross");
const navSidePanel = get(".id-of-side-panel");
const main = get("main");
const header = get("header");

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
// SIDE PANNEL ANIMATION END

// BUTTON 'READ MORE' START
const showMoreText = get(".main-text-img__text--text");
const showMoreButton = get(".main-text-img__text--button");
const showMoreButtonText = get(".main-text-img__text--button--text");
const showMoreButtonTextNo = get(".main-text-img__text--button--text--no");
const showMoreButtonImg = get(".main-text-img__text--button--img");

showMoreButton.onclick = () => {
  showMoreText.classList.toggle("_show-more");
  showMoreButtonText.classList.toggle("js-main-text-img__text--button--text");
  showMoreButtonTextNo.classList.toggle(
    "js-main-text-img__text--button--text--no"
  );
  showMoreButtonImg.classList.toggle("js-main-text-img__text--button--img");
};
// BUTTON 'READ MORE' END

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
const readMore = get(".swiper--readmore--tablet");
const readMoreImg = get(".img__read-more--tablet");
const readMoreText = get(".read-more--text--tablet");
const readMoreTextNo = get(".read-more--text--no--tablet");
const maxHeightOfFlex = get(".image-slider__wrapper--tablet");

readMore.onclick = () => {
  readMoreImg.classList.toggle("js-img__read-more--tablet");
  readMoreText.classList.toggle("js-read-more--text--tablet");
  readMoreTextNo.classList.toggle("js-read-more--text--no--tablet");
  maxHeightOfFlex.classList.toggle("js-image-slider__wrapper--tablet");
};
// SWIPER TABLET END

// SWIPER TABLET Repair Of Any Brands START
const readMoreAnyTypes = get(".swiper--readmore--tablet--any-types");
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

// FEEDBACK ANIMATION START
const feedbackOpen = get(".nav__chat");
const feedbackOpenFromSidePanel = get(".side-panel__chat");
const feedbackOut = get(".feedback__element__cross");
const feedbackPannel = get(".feedback__container");

feedbackOpen.onclick = () => {
  feedbackPannel.classList.add("_feedback-open");
  // main.classList.add("_blur");
  // header.classList.add("_blur");
};

feedbackOpenFromSidePanel.onclick = () => {
  feedbackPannel.classList.add("_feedback-open");
  // main.classList.add("_blur");
  // header.classList.add("_blur");
};

feedbackOut.onclick = () => {
  feedbackPannel.classList.remove("_feedback-open");
  // main.classList.remove("_blur");
  // header.classList.remove("_blur");
};
// FEEDBACK ANIMATION END

// ORDER THE CALL ANIMATION START
const orderCallOpen = get(".nav_call");
const orderCallOpenFromSidePanel = get(".side-panel__call");
const orderCallOut = get(".order-the-call__element__cross");
const orderCallPannel = get(".order-the-call__container");

orderCallOpen.onclick = () => {
  orderCallPannel.classList.add("_order-the-call-open");
  // main.classList.add("_blur");
  // header.classList.add("_blur");
};

orderCallOpenFromSidePanel.onclick = () => {
  orderCallPannel.classList.add("_order-the-call-open");
  // main.classList.add("_blur");
  // header.classList.add("_blur");
};

orderCallOut.onclick = () => {
  orderCallPannel.classList.remove("_order-the-call-open");
  // main.classList.remove("_blur");
  // header.classList.remove("_blur");
};
// ORDER THE CALL ANIMATION END
