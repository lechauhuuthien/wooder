// Lang
$(".lang").on("click", (e) => {
    e.stopPropagation();
    $(".lang__option").toggleClass("--active");
});

$(".lang__option .lang__item").on("click", function (e) {
    e.preventDefault();
    let temp = $(this).text();
    $(this).text($(".lang__current span").text());
    $(".lang__current span").text(temp);
});

$(document).on("click", () => {
    $(".lang__option").removeClass("--active");
});

// Menu
let header = $("header");
let menuItems = $("header .menu a");
let sections = [];
menuItems.each(function () {
    const href = $(this).attr("href");
    let className = href.replace("#", "");
    sections.push($(`.${className}`));
    $(this).on("click", function (e) {
        e.preventDefault();
        $("html, body").scrollTop(
            $(`.${className}`).offset().top - $(header).outerHeight()
        );
        window.location.hash = href;
        menuItems.removeClass("--active");
        $(this).addClass("--active");
    });
});

$(window).on("scroll", function () {
    let scrollPosition = $(window).scrollTop();
    if (sections.length > 0) {
        sections.forEach(function (section, index) {
            if (
                scrollPosition >
                section.offset().top - $(header).outerHeight() - 10
            ) {
                menuItems.removeClass("--active");
                menuItems.eq(index).addClass("--active");
            }
        });
    }
    /*--------------*/
    let homeHeight = sections[0].outerHeight();
    if (scrollPosition >= homeHeight - 100) {
        header.addClass("--over");
    } else {
        header.removeClass("--over");
    }
});

// Mobile Navbar
let hamBtn = $("header .mobile-hambtn");
let nav = $("nav");

hamBtn.on("click", function () {
    hamBtn.toggleClass("clicked");
    nav.toggleClass("--active");
});

$(window).on("resize", function () {
    if ($(window).innerWidth() > 990) {
        hamBtn.removeClass("clicked");
        nav.removeClass("--active");
    }
});

// Quality
const videoNodeList = $(".quality .quality__item-video");
const popupNode = $(".popup");
const popupContentNode = $(".popup .popup__content iframe");
const closeNode = $(".popup .popup__close");

videoNodeList.on("click", function () {
    let videoID = $(this).data("video-id");
    popupContentNode.attr(
        "src",
        `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`
    );
    popupNode.addClass("--show");
});

popupContentNode.on("click", function (e) {
    e.stopPropagation();
});

popupNode.on("click", function () {
    popupNode.removeClass("--show");
    popupContentNode.attr("src", "");
});

closeNode.on("click", function () {
    popupNode.removeClass("--show");
    popupContentNode.attr("src", "");
});

// News
const tagNodes = $(".news__tag .btn");
const articleNodes = $(".news .article");

tagNodes.on("click", function () {
    const tagID = `-${$(this).data("tag-id")}`;
    if (tagID) {
        const relatedArticle = $(`.news .article${tagID.toLowerCase()}`);
        if (relatedArticle) {
            articleNodes.removeClass("--active");
            tagNodes.removeClass("--active");
            relatedArticle.addClass("--active");
            $(this).addClass("--active");
        }
    }
});

// FAQ
const accordionTitle = $(".accordion .accordion__title");
const accordionItem = $(".accordion .accordion__item");
accordionTitle.on("click", function () {
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass("--active");
    $(this).parent().siblings().removeClass("--active");
    $(this).parent().siblings().children(".accordion__answer").slideUp();
});

// Back-to-top
const footer = $("footer");
const backToTopText = $("footer .container .footer__to-top");
const backToTopBtn = $("footer .container .footer__btn-to-top");

backToTopText.on("click", (e) => {
    e.preventDefault();
    $("html, body").scrollTop(0);
});

backToTopBtn.on("click", (e) => {
    e.preventDefault();
    $("html, body").scrollTop(0);
});

let footerHeight = footer.outerHeight();
let bodyHeight = $("body").outerHeight();
$(window).on("scroll", function () {
    let scrollPosition = $(window).scrollTop();
    if (
        $(window).innerHeight() + $(window).scrollTop() <=
            bodyHeight - footerHeight &&
        scrollPosition >= 1000
    ) {
        backToTopBtn.addClass("--show");
    } else {
        backToTopBtn.removeClass("--show");
    }
});

// Slider control
let carousel = $(".slider__item-wrap");
let dots = $(".slider__bottom-paging .dots li");
carousel.flickity({
    // option
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    on: {
        change: (index) => {
            /*--------------*/
            let number = $(".number span");
            number.text((index + 1).toString().padStart(2, 0));
            /*--------------*/
            dots.removeClass("--active");
            dots.eq(index).addClass("--active");
        },
    },
});

// flickity control
$(".slider__bottom-control #prev").on("click", () => {
    carousel.flickity("previous");
});
$(".slider__bottom-control #next").on("click", () => {
    carousel.flickity("next");
});
$(".slider__bottom-paging .dots").on("click", "li", function () {
    let clickedIndex = $(this).index();

    carousel.flickity("select", clickedIndex);
});

// Bottom slider control

let bottom_carousel = $(".bottom-slider");
bottom_carousel.flickity({
    // option
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    freeScroll: true,
});

// Tags
$(document).on("keypress", 'input[name="tags"]', function (e) {
    if (e.keyCode == 13) {
        let value = $(this).val();
        let textTag = `<div class="tag">${value}<span class="remove">x</span></div>`;
        $(".tags__wrap").append(textTag);
        $(this).val("");
    }
});

$(document).on("click", ".tags__list .tags__wrap span", function () {
    $(this).parent().remove();
});
