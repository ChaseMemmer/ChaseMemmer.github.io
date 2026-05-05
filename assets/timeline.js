//Get timeline elements
var TimelineElementsLeft = document.querySelectorAll('.Left');
var TimelineElementsRight = document.querySelectorAll('.Right');

//Listen for clicks
for (var i = 0; i < TimelineElementsLeft.length; i++) {
    TimelineElementsLeft[i].addEventListener('click', function(event) {
        if(event.currentTarget.id == "large") {
            event.currentTarget.removeAttribute('id');
            event.currentTarget.zIndex = "3";
            event.currentTarget.overflow = "hidden"
            event.currentTarget.style.width = "45%";
            event.currentTarget.style.paddingBottom = "0px"
            event.currentTarget.firstElementChild.style.display = "inherit";
            if(event.currentTarget.classList.contains("Thin")) {
                event.currentTarget.style.height = "60px";
            } else {
                event.currentTarget.style.height = "inherit";
            }
        } else {
            if(document.getElementById("large") != null) {
            var temp = document.getElementById("large");
                temp.removeAttribute('id');
                temp.zIndex = "3";
                event.currentTarget.overflow = "hidden"
                temp.style.width = "45%";
                temp.style.paddingBottom = "0px"
                temp.firstElementChild.style.display = "inherit";
                if(temp.classList.contains("Thin")) {
                    temp.style.height = "60px";
                } else {
                    temp.style.height = "inherit";
                }
            }
            event.currentTarget.setAttribute("id","large");
            event.currentTarget.zIndex = "10";
            event.currentTarget.overflow = "visible"
            event.currentTarget.style.height = "auto";
            event.currentTarget.style.width = "100%";
            event.currentTarget.style.paddingBottom = "25px"
            event.currentTarget.firstElementChild.style.display = "none";
        }
    });
}

for (var i = 0; i < TimelineElementsRight.length; i++) {
    TimelineElementsRight[i].addEventListener('click', function(event) {
        if(event.currentTarget.id == "large") {
            event.currentTarget.removeAttribute('id');
            event.currentTarget.zIndex = "3";
            event.currentTarget.overflow = "hidden"
            event.currentTarget.style.width = "45%";
            event.currentTarget.style.paddingBottom = "0px"
            event.currentTarget.firstElementChild.style.display = "inherit";
            if(event.currentTarget.classList.contains("Thin")) {
                event.currentTarget.style.height = "60px";
            } else {
                event.currentTarget.style.height = "inherit";
            }
        } else {
            if(document.getElementById("large") != null) {
            var temp = document.getElementById("large");
                temp.removeAttribute('id');
                temp.zIndex = "3";
                event.currentTarget.overflow = "hidden"
                temp.style.width = "45%";
                temp.style.paddingBottom = "0px"
                temp.firstElementChild.style.display = "inherit";
                if(temp.classList.contains("Thin")) {
                    temp.style.height = "60px";
                } else {
                    temp.style.height = "inherit";
                }
            }
            event.currentTarget.setAttribute("id","large");
            event.currentTarget.zIndex = "10";
            event.currentTarget.overflow = "visible"
            event.currentTarget.style.height = "auto";
            event.currentTarget.style.width = "100%";
            event.currentTarget.style.paddingBottom = "25px"
            event.currentTarget.firstElementChild.style.display = "none";
        }
    });
}


/*
function changeSize() {
    var el = document.getElementById("test");
    el.style.height = "200px";
    el.style.width = "200px";
}

*/
