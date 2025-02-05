function moveButton() {
    let noButton = document.getElementById("no");
    if (noButton) {
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 100);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }
}

function sayYes() {
    alert("Yay! Rak b na kub ❤️");

    // 🔥 ลบปุ่ม "Yes" และ "No" ออกจากหน้าเว็บ
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");

    if (yesButton) {
        yesButton.remove();
    }
    if (noButton) {
        noButton.remove();
    }

    // 🔥 แสดงเครื่องเล่น Spotify
    document.getElementById("spotify-player").classList.remove("hidden");

    // 🔥 แสดงภาพเซอร์ไพรส์
    document.getElementById("surprise").classList.remove("hidden");

    // 🔥 สร้างหัวใจลอยขึ้นมา
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = "50%";
        heart.style.animationDuration = (Math.random() * 2 + 1) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
