console.log("Script berhasil dimuat");


// =========================================================
// TANGGAL PENUTUPAN PENDAFTARAN
// =========================================================

const targetDate = new Date(
    2026,
    9,
    25,
    23,
    59,
    59
);


// =========================================================
// COUNTDOWN
// =========================================================

function updateCountdown() {

    const now = new Date();

    let diff = targetDate - now;


    // Jika waktu sudah habis

    if (diff <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    // =====================================================
    // HARI
    // =====================================================

    const days = Math.floor(
        diff / 86400000
    );

    diff %= 86400000;


    // =====================================================
    // JAM
    // =====================================================

    const hours = Math.floor(
        diff / 3600000
    );

    diff %= 3600000;


    // =====================================================
    // MENIT
    // =====================================================

    const minutes = Math.floor(
        diff / 60000
    );

    diff %= 60000;


    // =====================================================
    // DETIK
    // =====================================================

    const seconds = Math.floor(
        diff / 1000
    );


    // =====================================================
    // TAMPILKAN HASIL
    // =====================================================

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


// Jalankan pertama kali

updateCountdown();


// Update setiap 1 detik

setInterval(
    updateCountdown,
    1000
);