document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".percent, .percent1"); // Ambil semua elemen yang punya class "percent"
    
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target"); // Ambil nilai target
        let count = 0; // Mulai dari 0
        const speed = target / 100; // Atur kecepatan animasi

        const animate = setInterval(() => {
            if (count < target) {
                count += 1; // Tambah angka
                counter.innerText = count; // Update angka di HTML
            } else {
                clearInterval(animate); // Hentikan animasi saat target tercapai
            }
        }, 60); // Setiap 20ms naik 1 angka
    });
});
