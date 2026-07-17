/*
=========================================
FB PRO AI STUDIO V2.0
Powered by NPA Smart System VVIP
=========================================
*/

document.addEventListener("DOMContentLoaded", function () {
const btnScrollTop = document.getElementById("btnScrollTop");
    console.log("FB PRO AI STUDIO V2.0 Loaded");

    const loadingScreen = document.getElementById("loadingScreen");

    if (loadingScreen) {

        setTimeout(function () {

            loadingScreen.style.display = "none";

        }, 1800);

    }
/* ==============================
   Scroll To Top
================================ */

if (btnScrollTop) {

    btnScrollTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
});
