var TimelineElements = document.querySelectorAll('.Left, .Right');

function getCollapsedHeight(el) {
    return el.classList.contains('Thin') ? 55 : 75;
}

function collapseCard(el) {
    el.style.height = el.offsetHeight + 'px';
    el.removeAttribute('id');
    el.offsetHeight; // force reflow

    // Reset any paragraph styles applied during expand
    var paragraphs = el.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.opacity = '';
        paragraphs[i].style.transition = '';
    }

    el.style.overflow = 'hidden';
    el.style.zIndex = '3';
    el.style.transition = 'width 0.5s ease-in-out, height 0.5s ease-in-out';
    el.style.width = '45%';
    el.style.height = getCollapsedHeight(el) + 'px';
    el.style.paddingBottom = '0px';
    el.firstElementChild.style.display = '';

    el.addEventListener('transitionend', function cleanup(e) {
        if (e.propertyName === 'width') {
            el.style.height = '';
            el.style.transition = '';
            el.removeEventListener('transitionend', cleanup);
        }
    });
}

function expandCard(el) {
    // Measure the card's final height at full width before animating.
    // id="large" is already set by the caller so CSS shows the paragraph text,
    // ensuring the measurement includes the full content height.
    el.style.transition = 'none';
    el.style.overflow = 'hidden';
    el.style.width = '100%';
    el.style.height = 'auto';
    el.style.paddingBottom = '25px';
    el.firstElementChild.style.display = 'none';
    var finalHeight = el.offsetHeight; // force reflow + capture

    // Keep paragraphs invisible during width animation to prevent text reflow
    var paragraphs = el.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.transition = 'none';
        paragraphs[i].style.opacity = '0';
    }

    // Reset to collapsed width with height already at its final value
    el.style.height = finalHeight + 'px';
    el.style.width = '45%';
    el.offsetHeight; // force reflow

    // Animate width only — height stays fixed so the card expands as a solid block
    el.style.zIndex = '10';
    el.style.transition = 'width 0.5s ease-in-out';
    el.style.width = '100%';

    el.addEventListener('transitionend', function cleanup(e) {
        if (e.propertyName === 'width') {
            el.style.height = 'auto';
            el.style.overflow = 'visible';
            el.style.transition = '';
            el.removeEventListener('transitionend', cleanup);
            // Fade in paragraphs after the card has fully expanded
            for (var j = 0; j < paragraphs.length; j++) {
                paragraphs[j].style.transition = 'opacity 0.4s ease';
                paragraphs[j].style.opacity = '1';
            }
        }
    });
}

for (var i = 0; i < TimelineElements.length; i++) {
    TimelineElements[i].addEventListener('click', function(event) {
        var el = event.currentTarget;
        if (el.id === 'large') {
            collapseCard(el);
        } else {
            var current = document.getElementById('large');
            if (current !== null) {
                collapseCard(current);
            }
            el.setAttribute('id', 'large');
            expandCard(el);
        }
    });
}
