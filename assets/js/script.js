// Constantes // 
const PIEDRA = 0;
const PAPEL = 1;
const TIJERAS = 2;

const GANA_HUMANO = "¡¡¡ WENA !!! Eres el mas PRO del cachipun en la galaxia :)";
const GANA_MAQUINA = "¡¡¡ CHUUTAA!!! La máquina te ha vencido al cachipún. Terrible pnk! uwu.";
const EMPATE = "¡¡¡ EMPATE !!! No hay primera sin Segunda, Sigue intentando campeón.:) ";

// Constantes para maquina, juegos y humano // 
var juegos = 0; 
var jugada_humano = 0; 
var jugada_maquina = 0; 

// Pedimos la cantidad de juegos mayor que 0 para enfrentar a la máquina.
while (true) {
    juegos = parseInt(prompt('¿Cuantas veces quieres jugar al cachipun?:'));
    if ((juegos != NaN) && (juegos > 0)) {
        break;
    }
    else {
        alert('Ingresa la cantidad necesaria');
    }
}


// Jugabilidad // 

while (juegos > 0) {
    jugada_humano = juega_humano();
    jugada_maquina = juega_maquina();

    if (jugada_humano != jugada_maquina) {
        switch (jugada_humano) {
            case PIEDRA:
                if (jugada_maquina == PAPEL) {
                    alert(GANA_MAQUINA);
                } else {
                    alert(GANA_HUMANO);
                }
                break;
            case PAPEL:
                if (jugada_maquina == TIJERAS) {
                    alert(GANA_MAQUINA);
                } else {
                    alert(GANA_HUMANO);
                }
                break;
            case TIJERAS:
                if (jugada_maquina == PIEDRA) {
                    alert(GANA_MAQUINA);
                } else {
                    alert(GANA_HUMANO);
                }
                break;
        }
    }
    else {
        alert(EMPATE);
    }

    juegos--; 
}


function juega_humano() {
    var jugada = 666; 
    while (true) {
        jugada = parseInt(prompt('Ingresa tu jugada queridisimo!! (0, 1 ó 2):\n0 para PIEDRA\n1 para PAPEL\n2 para TIJERAS'));
        if ((jugada != NaN) && (jugada > -1) && (jugada < 3)) {
            break;
        }
        else {
            alert('Ingresa una jugada VALIDA!!!');
        }
    }
    return jugada;
}

function juega_maquina() {
    return Math.floor(Math.random() * 3);
}