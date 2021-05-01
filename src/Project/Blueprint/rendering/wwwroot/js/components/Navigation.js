var navigationButtons = document.getElementsByClassName('navigation__subnav__subnavbtn');
Array.prototype.forEach.call(navigationButtons, function (el) {
    el.addEventListener("click", function (event) {
        var targetElementToShow = event.target.nextElementSibling;
        if (targetElementToShow) {
            if (targetElementToShow.style.display === "block") {
                targetElementToShow.style.display = "none";
            } else {
                targetElementToShow.style.display = "block";
            }

        }

    });
});

document.addEventListener('mouseup', function (e) {
    var subNavigations = document.getElementsByClassName('navigation__subnav__content');
    Array.prototype.forEach.call(subNavigations, function (el) {
        var previousElement = el.previousElementSibling;
        if (!el.contains(e.target) && !previousElement.contains(e.target)) {
            el.style.display = 'none';
        }
    });
});