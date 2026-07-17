/*
=========================================
FB PRO AI STUDIO V2.0
Powered by NPA Smart System VVIP

photo-analysis.js
=========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    const photoUpload = document.getElementById("photoUpload");

    if (!photoUpload) return;

    photoUpload.addEventListener("change", function () {

        // Tampilkan loading sebentar
        document.getElementById("aiExpression").textContent = "Menganalisa...";
        document.getElementById("aiColor").textContent = "Menganalisa...";
        document.getElementById("aiMood").textContent = "Menganalisa...";
        document.getElementById("aiComposition").textContent = "Menganalisa...";
        document.getElementById("ctrPrediction").textContent = "...";

        setTimeout(function () {

            // Demo AI Analysis
            document.getElementById("aiExpression").textContent = "😊 Ramah";

            document.getElementById("aiColor").textContent = "🟢 Hijau & Biru";

            document.getElementById("aiMood").textContent = "🔥 Positif";

            document.getElementById("aiComposition").textContent = "📸 Close Up";

            document.getElementById("ctrPrediction").textContent = "92%";

        }, 1500);

    });

});
