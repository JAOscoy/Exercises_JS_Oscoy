

/* I. ¿Es una cadena vacia?*/

function isEmpty(text) {
    if (text === ""){
        return true;
    } else {
        return false;
    }
}

/* II. ¿El n-ésimo número estrella?*/

function starNumber(level) {
    return (6 * level * (level - 1) + 1);
 }

/* III. Minimo y máximo de un arreglo*/

function minMax(a) {
    let r = {
        "Max": Math.max(...a),
        "Min": Math.min(...a)
    };
    return r;

/* Combinación más grande */

