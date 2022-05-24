let inputpapeis = document.getElementById("papeis")
let inputlatas = document.getElementById("latas")
let inputmoedas = document.getElementById("moedas")




function calcular() {

    let papeis = inputpapeis.value;
    let latas = inputlatas.value;




    let total = (papeisPP(papeis) * latasPP(latas)) / 4;



    moedas.innerHTML = `<p> ${Math.ceil(total)} ganhou</p>`

}

function papeisPP(papeis) {

    if (papeis >= 2) {
        return 5;

    } else {
        return "perdeu";
    }


}

function latasPP(latas) {
    if (latas >= 2) {
        return 5;

    } else {
        return "perdeu";
    }

}



















