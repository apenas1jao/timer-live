const params = new URLSearchParams(window.location.search);

// Data e hora em que a live termina.
// Se não passar pela URL, usa esta data como padrão.
const endParam = params.get("end") || "2026-07-22T10:00:00";

const fim = new Date(endParam);

function atualizar() {
    const agora = new Date();

    let segundos = Math.floor((fim - agora) / 1000);

    if (segundos < 0) {
        segundos = 0;
    }

    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const seg = segundos % 60;

    document.getElementById("timer").textContent =
        String(horas).padStart(3, "0") + ":" +
        String(minutos).padStart(2, "0") + ":" +
        String(seg).padStart(2, "0");
}

atualizar();
setInterval(atualizar, 1000);
