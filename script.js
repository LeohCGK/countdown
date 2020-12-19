const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const AnoNovo = "1 Jan 2021";

function countDown(){
    const AnoNovoData = new Date(AnoNovo);
    const currentDate = new Date();

    const totalsegundos = (AnoNovoData - currentDate) / 1000;
    
    const dias = Math.floor(totalsegundos / 3600 / 24 ); 
    const horas = Math.floor(totalsegundos / 3600) % 24;
    const mins = Math.floor(totalsegundos / 60) % 60;
    const secs = Math.floor(totalsegundos) % 60;

    diasEl.innerHTML = formatacaoData(dias);
    horasEl.innerHTML = formatacaoData(horas);
    minsEl.innerHTML = formatacaoData(mins);
    secsEl.innerHTML = formatacaoData(secs);
 

}

function formatacaoData(time){
    return time < 10 ? `0${time}` : time;
}

//iniciando contagem
countDown();

setInterval(countDown, 1000);