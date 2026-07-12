// Data final da live
const fim = new Date("2026-07-19T15:00:00");

function atualizar() {
    const agora = new Date();

    let diferenca = fim - agora;

    if (diferenca < 0) {
        diferenca = 0;
    }

    const horas = Math.floor(diferenca / 1000 / 60 / 60);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("timer").textContent =
        `${String(horas).padStart(3, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

atualizar();
setInterval(atualizar, 1000);
