window.onload = function () {
    var menuStyle = getComputedStyle(menu);
    openMenu.onclick = function () {
        if (menuStyle.display == "none") {
            menu.classList.add("active");
            openMenu.classList.add("active")
        } else {
            menu.classList.remove("active");
        }
    }
}