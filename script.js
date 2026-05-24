
// SCROLL KE KONTAK SAAT DI KLIK

function hubungi() {
    document.getElementById("contact")
        .scrollIntoView(
            { behavior: "smooth" }
        );
}

/* Fungsi:
(Mengubah Tema Web menggunakan MODE)

Cara kerja:
mengganti warna body menjadi lebih terang*/

function gantiMode() {
    document.body.classList.toggle("light-mode");
}


//====== Memunculkan popup ====

function lihatProject(judulPopup, isiPopup, link) {

    document.getElementById('popup')
        .style.display = "flex";

    document.getElementById("judulPopup")
        .innerHTML = judulPopup;

    document.getElementById("isiPopup")
        .innerHTML = isiPopup;

    document.getElementById("linkProject")
        .href = link;
}

function tutupPopup() {
    document.getElementById("popup")
        .style.display = "none";
}

document.getElementById("popup").addEventListener("click", function (e) {
    if (e.target.id === "popup") {
        tutupPopup();
    }
});

//==== Memunculkan jam Digital & analog ====

function updateJamDinding() {

    let waktu = new Date();

    let jam = waktu.getHours() % 12;

    let menit = waktu.getMinutes();

    let detik = waktu.getSeconds();

    let derajatJam = (jam * 30) + (menit * 0.5);

    let derajatMenit = menit * 6;

    let derajatDetik = detik * 6;

    document.getElementById("jarumJam")
        .style.transform =
        `translateX(-50%) rotate(${derajatJam}deg)`;

    document.getElementById("jarumMenit")
        .style.transform =
        `translateX(-50%) rotate(${derajatMenit}deg)`;

    document.getElementById("jarumDetik")
        .style.transform =
        `translateX(-50%) rotate(${derajatDetik}deg)`;

}

updateJamDinding()
setInterval(updateJamDinding, 1000)

function upadateJam() {

    let waktu = new Date();

    let jam = String(waktu.getHours()).padStart(2, "0");

    let menit = String(waktu.getMinutes()).padStart(2, "0");

    let detik = String(waktu.getSeconds()).padStart(2, "0");

    document.getElementById("jam")
        .innerHTML = `${jam}:${menit}:${detik}`;
}

upadateJam()
setInterval(upadateJam, 1000)


//=== Salam Waktu Otomatis ===//

function salamWaktu() {

    let waktu = new Date();

    let jam = waktu.getHours();

    let salam = "";

    if (jam < 12) {
        salam = "Selamat Pagi";
    }

    else if (jam < 18) {
        salam = "Selamat Siang";
    }

    else {
        salam = "Selamat Malam";
    }

    document.getElementById("sapaan")
        .innerHTML = salam + ", Aku Aldo";
}

salamWaktu()

let materi = [
    "HTML",
    "CSS",
    "Java Script",
    "Python"

];

let index = 0

function nextBelajar() {

    console.log(index)

    index++;

    if (index >= materi.length) {
        index = 0
    }

    let status = document.getElementById("status");

    status.style.transform = "scale (0.9)";
    status.style.opacity = "0.5";

    setTimeout(function () {

        status.innerHTML = ("Saya sedang belajar " + materi[index]);

        status.style.transform = "scale(1)";
        status.style.opacity = "1";


    }, 200);
}

nextBelajar()

//=========== Membuat Bar Statistik Skill Card ==========
function animasiSkill() {

    setTimeout(function () {

        document.querySelector(".html-bar")
            .style.width = "90%";

        document.querySelector(".css-bar")
            .style.width = "75%";

        document.querySelector(".python-bar")
            .style.width = "65%";

        document.querySelector(".javascript-bar")
            .style.width = "45%";

    }, 100);

}

//============== Animasi Skill saat Scroll Otomatis (Bar muncul) ==========
let sudahJalan = false;

window.addEventListener("scroll", function () {
    let skillSection =
        document.querySelector(".skill-container")

    let posisi =
        skillSection.getBoundingClientRect().top;

    let tinggiLayar = window.innerHeight;

    if (posisi < tinggiLayar - 100 && !sudahJalan)


        animasiSkill();

    sudahJalan: true;
});

//============== Membuat Animasi Gerak Card Skill otomatis ==========
window.addEventListener("scroll", function () {

    let cardSection =
        document.querySelectorAll(".project-card")

    cardSection.forEach(function (card) {

        let posisi =
            card.getBoundingClientRect().top;

        let tinggiLayar =
            window.innerHeight;

        if (posisi < tinggiLayar - 100)

            card.classList.add("muncul");
    })
})

