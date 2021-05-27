// Header
// const header = document.querySelector("header");

// Lang
// const lang = document.querySelector(".lang");
// const langCurrent = document.querySelector(".lang__current span");
// const langOption = document.querySelector(".lang__option");
// const langList = langOption.querySelectorAll("a");

// lang.addEventListener("click", (e) => {
//     e.stopPropagation();
//     langOption.classList.toggle("--active");
// });

// langList.forEach((item) => {
//     item.addEventListener("click", () => {
//         let text = item.textContent;
//         item.textContent = langCurrent.innerText;
//         langCurrent.innerText = text;
//     });
// });

// document.addEventListener("click", () => {
//     langOption.classList.remove("--active");
// });

// Menu
// const menuItems = document.querySelectorAll("header .menu a");
// const headerHeight = header.offsetHeight || 0;
// let sections = [];

// const removeMenuActive = () => {
//     menuItems.forEach((item) => {
//         item.classList.remove("--active");
//     });
// };

// menuItems.forEach((item) => {
//     const currentHref = item.getAttribute("href");
//     let className = currentHref.replace("#", "");
//     let section = document.querySelector(`.${className}`);
//     sections.push(section);

//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         window.scrollTo({
//             top: section.offsetTop - headerHeight,
//             behavior: "smooth",
//         });
//         /*--------------*/
//         removeMenuActive();
//         item.classList.add("--active");
//     });
// });

// Mobile navbar
// const hamBtn = document.querySelector("header .mobile-hambtn");
// const nav = document.querySelector("nav");

// hamBtn.addEventListener("click", () => {
//     hamBtn.classList.toggle("clicked");
//     nav.classList.toggle("--active");
// });

// window.addEventListener("resize", () => {
//     if (window.innerWidth > 990) {
//         hamBtn.classList.remove("clicked");
//         nav.classList.remove("--active");
//     }
// });

// Slider
// const sliderItemNodes = document.querySelectorAll(".slider__item");
// const nextBtnNode = document.querySelector(".slider__bottom-control #next");
// const prevBtnNode = document.querySelector(".slider__bottom-control #prev");
// const paginationNodes = document.querySelectorAll(".dots li");
// const numberNode = document.querySelector(".number span");
// let activeSliderIndex = 0;

// const goTo = (goIndex) => {
//     if (typeof goIndex === "number") {
//         sliderItemNodes.forEach((sliderItem) =>
//             sliderItem.classList.remove("--active")
//         );
//         sliderItemNodes[goIndex].classList.add("--active");
//         activeSliderIndex = goIndex;
//         updatePagiActive(paginationNodes[goIndex]);
//         updateNumber(goIndex + 1);
//     }
// };

// prevBtnNode.addEventListener("click", () => {
//     if (activeSliderIndex > 0) {
//         goTo(activeSliderIndex - 1);
//     } else {
//         goTo(sliderItemNodes.length - 1);
//     }
// });

// nextBtnNode.addEventListener("click", () => {
//     if (activeSliderIndex < sliderItemNodes.length - 1) {
//         goTo(activeSliderIndex + 1);
//     } else {
//         goTo(0);
//     }
// });

// paginationNodes.forEach((pagi, index) => {
//     pagi.addEventListener("click", () => {
//         // updatePagiActive(pagi)
//         goTo(index);
//     });
// });

// const updatePagiActive = (node) => {
//     paginationNodes.forEach((pagi) => {
//         pagi.classList.remove("--active");
//     });
//     node.classList.add("--active");
// };

// const updateNumber = (newNumber) => {
//     if (newNumber < 10) {
//         numberNode.textContent = newNumber.toString().padStart(2, "0");
//     } else {
//         numberNode.textContent = newNumber;
//     }
// };

// Quality
// const qualityVideoLinks = [
//     "https://www.youtube.com/embed/icAH8y_FEPc?autoplay=1&mute=1",
//     "https://www.youtube.com/embed/FjHGZj2IjBk?autoplay=1&mute=1",
//     "https://www.youtube.com/embed/IiE59rOD25E?autoplay=1&mute=1",
// ];

// const videoNodeList = document.querySelectorAll(
//     ".quality .quality__item-video"
// );
// const popupNode = document.querySelector(".popup");
// const popupContentNode = document.querySelector(".popup .popup__content");
// const closeNode = document.querySelector(".popup .popup__close");

// videoNodeList.forEach((node, index) => {
//     node.addEventListener("click", () => {
//         popupContentNode
//             .querySelector("iframe")
//             .setAttribute("src", qualityVideoLinks[index]);
//         popupNode.classList.add("--show");
//     });
// });

// popupContentNode.addEventListener("click", (e) => {
//     e.stopPropagation();
// });
// popupNode.addEventListener("click", () => {
//     popupNode.classList.remove("--show");
//     popupContentNode.querySelector("iframe").setAttribute("src", "");
// });
// closeNode.addEventListener("click", () => {
//     popupNode.classList.remove("--show");
//     popupContentNode.querySelector("iframe").setAttribute("src", "");
// });

// News
// const tagNodes = document.querySelectorAll(".news__tag .btn");
// const articleNodes = document.querySelectorAll(".news .article");

// tagNodes.forEach((tag) => {
//     const tagType = `-${tag.textContent.toLowerCase()}`.replace(" ", "");
//     tag.addEventListener("click", () => {
//         let relatedArticle = document.querySelector(
//             `.news .article${tagType.toLowerCase()}`
//         );
//         /*--------------*/
//         articleNodes.forEach((article) => {
//             article.classList.remove("--active");
//         });
//         tagNodes.forEach((tag) => {
//             tag.classList.remove("--active");
//         });
//         /*--------------*/
//         relatedArticle.classList.add("--active");
//         tag.classList.add("--active");
//     });
// });

// FAQ
// const faq = document.querySelector(".faq");
// const accordionTitle = faq.querySelectorAll(".accordion__title");

// accordionTitle.forEach((title) => {
//     title.addEventListener("click", () => {
//         const activeTitle = faq.querySelector(".--active");
//         /*--------------*/
//         accordionToggle(title);
//         /*--------------*/
//         if (activeTitle && activeTitle !== title) {
//             accordionToggle(activeTitle);
//         }
//     });
// });

// const accordionToggle = (toggleNode) => {
//     let answer = toggleNode.nextElementSibling;
//     if (toggleNode.classList.contains("--active")) {
//         answer.removeAttribute("style");
//         toggleNode.classList.remove("--active");
//     } else {
//         answer.style.maxHeight = answer.scrollHeight + "px";
//         toggleNode.classList.add("--active");
//     }
// };
// Back-to-top
// const footer = document.querySelector("footer");
// const backToTopText = document.querySelector(
//     "footer .container .footer__to-top"
// );

// const backToTopBtn = document.querySelector(
//     "footer .container .footer__btn-to-top"
// );

// backToTopText.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// });

// backToTopBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// });

// Window scroll
// window.addEventListener("scroll", (e) => {
//     e.preventDefault();
//     let scrollPosition = window.pageYOffset;
/**
 * For Menu
 */
// sections.forEach((section, index) => {
//     if (scrollPosition > section.offsetTop - headerHeight - 10) {
//         removeMenuActive();
//         menuItems[index].classList.add("--active");
//     }
// });

/**
 * For Header
 */
// let homeHeight = sections[0].offsetHeight;
// if (scrollPosition >= homeHeight - 100) {
//     header.classList.add("--over");
// } else {
//     header.classList.remove("--over");
// }
/**
 * For back to top button
 */
// let footerHeight = footer.offsetHeight;
// let bodyHeight = document.body.offsetHeight;
// if (
//     window.innerHeight + window.pageYOffset <= bodyHeight - footerHeight &&
//     scrollPosition >= 1000
// ) {
//     backToTopBtn.classList.add("--show");
// } else {
//     backToTopBtn.classList.remove("--show");
// }
// });

// PhotoSwipe
var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute("data-size").split("x");
            item = {
                src: linkEl.getAttribute("href"),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute("src");
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return el.tagName && el.tagName.toUpperCase() === "FIGURE";
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split("&");
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split("=");
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (
        index,
        galleryElement,
        disableAnimation,
        fromURL
    ) {
        var pswpElement = document.querySelectorAll(".pswp")[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute("data-pswp-uid"),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
                    pageYScroll =
                        window.pageYOffset ||
                        document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width,
                };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(
            pswpElement,
            PhotoSwipeUI_Default,
            items,
            options
        );
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute("data-pswp-uid", i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(
            hashData.pid,
            galleryElements[hashData.gid - 1],
            true,
            true
        );
    }
};

window.addEventListener("load", function () {
    initPhotoSwipeFromDOM(".carousel-image");
});
