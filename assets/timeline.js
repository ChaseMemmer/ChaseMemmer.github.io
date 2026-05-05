var allCards = document.querySelectorAll('.Left, .Right');

function getCollapsedHeight(el) {
    return el.classList.contains("Thin") ? 55 : 75;
}

function collapse(el) {
    el.removeAttribute('id');
    el.style.zIndex = "3";

    // Pin current height without transition, then animate to collapsed target
    el.style.transition = "none";
    el.style.height = el.offsetHeight + "px";
    el.getBoundingClientRect(); // commit the pinned height
    el.style.transition = "";

    el.style.width = "45%";
    el.style.paddingBottom = "0px";
    el.style.height = getCollapsedHeight(el) + "px";

    // Restore OnTop icon after the height finishes animating
    var onTop = el.firstElementChild;
    el.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'height') {
            onTop.style.display = "";
            el.removeEventListener('transitionend', handler);
        }
    });
}

function expand(el) {
    var startH = el.offsetHeight; // 75px or 55px

    // Step 1: silently apply expanded state to measure target height
    el.style.transition = "none";
    el.firstElementChild.style.display = "none";
    el.setAttribute("id", "large");
    el.style.zIndex = "10";
    el.style.width = "100%";
    el.style.paddingBottom = "25px";
    el.getBoundingClientRect(); // flush so scrollHeight is at 100% width
    var targetH = el.scrollHeight;

    // Step 2: snap back to collapsed (still no transition)
    el.style.width = "45%";
    el.style.paddingBottom = "0px";
    el.style.height = startH + "px";
    el.getBoundingClientRect(); // commit collapsed state to the browser

    // Step 3: re-enable transitions and set targets — both axes animate
    el.style.transition = "";
    el.style.width = "100%";
    el.style.paddingBottom = "25px";
    el.style.height = targetH + "px";
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
