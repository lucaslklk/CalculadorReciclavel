let inputpapeis = document.getElementById("papeis")
let inputlatas = document.getElementById("latas")
let inputpapelao = document.getElementById("papelao")
let inputgarvidro = document.getElementById("garvidro")
let inputplastico = document.getElementById("plastico")
let inputbonus = document.getElementsById("bonus")
let inputbonus1 = document.getElementsById("bonus1")





function calcular() {

    let papeis = inputpapeis.value;
    let latas = inputlatas.value;
    let papelao = inputpapelao.value;
    let garvidro = inputgarvidro.value;
    let plastico = inputplastico.value;



    let total = (papeis * latas * papelao * garvidro * plastico) / 6
    
    bonus.innerHTML = `<p> Você no momento possui ${Math.ceil(total)} bônus </p>`
    bonus1.innerHTML = `<p>Troque por algum premio!!</p>`
}




