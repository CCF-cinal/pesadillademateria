let sub_menus = document.getElementsByClassName("context-menu");
let menu_items = document.getElementsByClassName("menu-item");

let about_menu_item = document.getElementById("about");
let services_menu_item = document.getElementById("services");
let events_menu_item = document.getElementById("events");
let partnerships_menu_item = document.getElementById("partnerships");

about_menu_item.addEventListener("mouseenter", function (event) {
    hide_all_elements()
    let sub_menu = document.getElementById("sub-about");
    sub_menu.classList.remove("hidden");
});

services_menu_item.addEventListener("mouseenter", function (event) {
    hide_all_elements()
    let sub_menu = document.getElementById("sub-services");
    sub_menu.classList.remove("hidden");
});

events_menu_item.addEventListener("mouseenter", function (event) {
    hide_all_elements()
});

partnerships_menu_item.addEventListener("mouseenter", function (event) {
    hide_all_elements()
    let sub_menu = document.getElementById("sub-partnerships");
    sub_menu.classList.remove("hidden");
});

function hide_all_elements() {
    for (let i = 0; i < sub_menus.length; i++) {
        if (!sub_menus[i].classList.contains("hidden")) {
            sub_menus[i].classList.add("hidden");
        }
    }
}

for (let i = 0; i < menu_items.length; i++) {
    menu_items[i].addEventListener("mouseleave", (event) => {
        setTimeout(() => {
            let sub_menu = menu_items[i].getElementsByClassName("context-menu");
            if (!sub_menu[0].classList.contains("hidden")) {
                sub_menu[0].classList.add("hidden");
            }
        }, 500);
    });
}

document.getElementById("home").addEventListener("mouseenter", function(){
    hide_all_elements();
});

document.getElementById("contact").addEventListener("mouseenter", function(){
    hide_all_elements();
});