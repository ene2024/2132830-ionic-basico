var articulo = document.getElementById("articulo");
var monto = document.getElementById("monto");
var agregar = document.getElementById("agregar");

var articuloV = '';
var montoV = 0;
var total = 0;

const divTicket = document.getElementById("ticket_comp");
const totalP = document.getElementById("total");

function Agregar () {
    var articuloV = articulo.value;
    var montoV = parseInt(monto.value);

    total = total + montoV;
    
    totalP.innerHTML = 'Total ............. $' + total;
    let elementoTicket = document.createElement("p");
    elementoTicket.innerHTML =  articuloV + '.............' + '$' + montoV;

    divTicket.appendChild(elementoTicket);

}
