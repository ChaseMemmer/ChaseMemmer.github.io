var fadeElements = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    fadeElements.forEach(function(el) {
        observer.observe(el);
    });
} else {
    fadeElements.forEach(function(el) {
        el.classList.add('visible');
    });
}
