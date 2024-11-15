function startTimer(button) {
    button.disabled = true;
    button.innerText = "Menunggu... (10 detik)";
    let countdown = 10;

    const timer = setInterval(() => {
        countdown--;
        button.innerText = `Menunggu... (${countdown} detik)`;

        if (countdown === 0) {
            clearInterval(timer);
            document.getElementById("message").innerText = "Berhasil!";
            document.getElementById("message").style.visibility = "visible";
            button.style.display = "none";
        }
    }, 1000);
}
