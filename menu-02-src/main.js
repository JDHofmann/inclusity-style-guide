
document.querySelectorAll("[data-toggle~=dropdown]").forEach(function (e) {

    e.setAttribute("aria-haspopup", "true"), 
    e.setAttribute("aria-expanded", "false");

    var t = document.querySelector(".dropdown-menu");

    t.setAttribute("aria-hidden", "true"),

    (e.onclick = function () {

    if ("true" === e.getAttribute("aria-expanded")) return e.setAttribute("aria-expanded", "false"), t.setAttribute("aria-hidden", "true"), void e.parentNode.classList.remove("dropdown-on");

    return e.setAttribute("aria-expanded", "true"),
     t.setAttribute("aria-hidden", "false"), e.parentNode.classList.add("dropdown-on"), void t.children[0].focus();

    });

});