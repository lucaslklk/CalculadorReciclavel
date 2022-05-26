let inputpapeis = document.getElementById("papeis")
let inputlatas = document.getElementById("latas")
let inputpapelao = document.getElementById("papelao")
let inputbonus = document.getElementsById("bonus")
let inputbonus1 = document.getElementsById("bonus1")




function calcular() {

    let papeis = inputpapeis.value;
    let latas = inputlatas.value;
    let papelao = inputpapelao.value;



    let total = (papeis * latas * papelao) / 4
    bonus.innerHTML = `<p> Você no momento possui ${Math.ceil(total)} bônus </p>`
    bonus1.innerHTML = `<p>Troque por algum premio!!</p>`
}
















