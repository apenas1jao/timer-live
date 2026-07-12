const params = new URLSearchParams(window.location.search);

// Se não passar ?start=..., usa este horário padrão.
const startParam = params.get("start") || "2026-07-12T15:00:00-03:00";

const inicio = new Date(startParam);

function atualizar(){

    const agora = new Date();

    let segundos = Math.floor((agora - inicio)/1000);

    if(segundos < 0){
        segundos = 0;
    }

    const horas = Math.floor(segundos/3600);
    const minutos = Math.floor((segundos%3600)/60);
    const seg = segundos%60;

    document.getElementById("timer").textContent =
        String(horas).padStart(3,"0")+":"+
        String(minutos).padStart(2,"0")+":"+
        String(seg).padStart(2,"0");
}

atualizar();
setInterval(atualizar,1000);
