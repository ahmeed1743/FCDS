/* Nav-Bar */
const dropdown_btns = document.querySelectorAll(".dropdown-btn");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    const navbar_content = document.querySelector(".navbar-content");
    burger.classList.toggle("active");

    navbar_content.classList.toggle("show");
});

dropdown_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    const dropdown = e.currentTarget.nextElementSibling;

    dropdown.classList.toggle("show");
    document.querySelectorAll(".dropdown-btn + .dropdown-list").forEach((dropdown) => {
        if (dropdown !== e.currentTarget.nextElementSibling) {
            dropdown.classList.remove("show");
        }
        });
    });
});

window.onclick = (e) => {
    if (!e.target.matches(".dropdown-btn")) {
    const dropdowns = document.querySelectorAll(".dropdown-list");
    dropdowns.forEach((drpodown) => {
        drpodown.classList.remove("show");
    });
    }
};


/* According */

const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");

acc_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    acc_contents.forEach((acc) => {
    if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
    ) {
        acc.classList.remove("active");
        acc_btns.forEach((btn) => btn.classList.remove("active"));
    }
});

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
});
});

window.onclick = (e) => {
    if (!e.target.matches(".accordion-header")) {
    acc_btns.forEach((btn) => btn.classList.remove("active"));
    acc_contents.forEach((acc) => acc.classList.remove("active"));
    }
};




/*
    Arrow
*/
const value = scrollY;
const arrow = document.querySelector('.arrow-box');

window.onscroll = function(){
    if ( scrollY >= 667 ){
        arrow.style.opacity = 1;
        console.log("shown")
    }
    else {
        arrow.style.opacity = 0;
        console.log("hidden")
    }
}




