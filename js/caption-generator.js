/*
=========================================
FB PRO AI STUDIO V2.0
Powered by NPA Smart System VVIP

caption-generator.js
Release 0.4
=========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    const btnGenerate = document.getElementById("btnGenerateAI");
    const output = document.getElementById("captionOutput");

    if (!btnGenerate || !output) return;

    btnGenerate.addEventListener("click", function () {

        const expression =
            document.getElementById("aiExpression")?.textContent || "";

        const mood =
            document.getElementById("aiMood")?.textContent || "";

        const color =
            document.getElementById("aiColor")?.textContent || "";

        const composition =
            document.getElementById("aiComposition")?.textContent || "";

        const ctr =
            document.getElementById("ctrPrediction")?.textContent || "";

        output.value =
`🔥 STOP SCROLL DULU!

Dari hasil AI Photo Analysis, foto ini memiliki ekspresi ${expression}, mood ${mood}, warna dominan ${color}, dengan komposisi ${composition}.

AI memprediksi potensi CTR sekitar ${ctr}.

Kalau dipadukan dengan copywriting yang tepat, konten seperti ini berpotensi memperoleh engagement yang lebih tinggi.

👇 Bagaimana menurut Anda? Tulis pendapat di kolom komentar.

#FacebookPro
#ContentCreator
#AISystem
#NPASmartSystemVVIP`;

    });

});
