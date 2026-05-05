var allCards = document.querySelectorAll('.Left, .Right');

function getCollapsedHeight(el) {
    return el.classList.contains("Thin") ? 55 : 75;
}

function collapse(el) {
    // Pin current height as explicit px so CSS transition has a known start value
    el.style.height = el.offsetHeight + "px";
    el.getBoundingClientRect(); // force reflow

    el.removeAttribute('id');
    el.style.zIndex = "3";
    el.style.width = "45%";
    el.style.paddingBottom = "0px";
    el.style.height = getCollapsedHeight(el) + "px";

    // Restore OnTop icon once the height transition finishes
    var onTop = el.firstElementChild;
    el.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'height') {
            onTop.style.display = "";
            el.removeEventListener('transitionend', handler);
        }
    });
}

function expand(el) {
    // Pin current height so transition starts from a known px value
    el.style.height = el.offsetHeight + "px";

    el.firstElementChild.style.display = "none";
    el.setAttribute("id", "large");
    el.style.zIndex = "10";
    el.style.width = "100%";
    el.style.paddingBottom = "25px";

    // Force reflow with new width applied so scrollHeight is accurate
    el.getBoundingClientRect();
    el.style.height = el.scrollHeight + "px";
}

allCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
        var el = event.currentTarget;
        var prev = document.getElementById("large");

        if (el.id === "large") {
            collapse(el);
        } else {
            if (prev) collapse(prev);
            expand(el);
        }
    });
});
