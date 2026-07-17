/*
=========================================
FB PRO AI STUDIO V2.0
Powered by NPA Smart System VVIP

upload.js
=========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    const photoUpload = document.getElementById("photoUpload");
    const previewImage = document.getElementById("previewImage");

    if (!photoUpload || !previewImage) return;

    photoUpload.addEventListener("change", function (event) {

        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            previewImage.src = e.target.result;

        };

        reader.readAsDataURL(file);

    });

});
