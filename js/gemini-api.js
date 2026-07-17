/*
========================================
FB PRO AI STUDIO V2.0
Gemini API Integration
Release 0.4
========================================
*/

// Simpan API Key
function saveGeminiKey() {

    const apiKey = document.getElementById("geminiApiKey").value.trim();

    if (!apiKey) {
        alert("Masukkan API Key Gemini terlebih dahulu.");
        return;
    }

    localStorage.setItem("gemini_api_key", apiKey);

    alert("API Key berhasil disimpan.");
}

// Ambil API Key
function getGeminiKey() {
    return localStorage.getItem("gemini_api_key") || "";
}

// Isi otomatis saat halaman dibuka
document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("geminiApiKey");

    if (input) {
        input.value = getGeminiKey();
    }

});
