
let tarjetas = document.getElementById('tarjeta1', 'tarjeta2', 'tarjeta3', 'tarjeta4');

let i = 0;

const show = () => {
    tarjetas = tarjetas(i);
    i = (i < tarjetas.length -1) ? i+1:0;
}

const interval = () => {
    setInterval(show,1000);
}