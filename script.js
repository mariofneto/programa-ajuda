// saber quantos caminhões saiu, (preciso de um loop)
// saber quais os motoristas, em quais caminhões e em quais lugares.
// receber toda informação e criar um texto com ela.
// msg padrão : Boa Noite Claúdio, foram X caminhões!

let caminhão1 = document.querySelector("input#caminhão1")
let motorista1 = document.querySelector("input#motorista1")
let local1 = document.querySelector("input#local1")

let caminhão2 = document.querySelector("input#caminhão2")
let motorista2 = document.querySelector("input#motorista2")
let local2 = document.querySelector("input#local2")

let caminhão3 = document.querySelector("input#caminhão3")
let motorista3 = document.querySelector("input#motorista3")
let local3 = document.querySelector("input#local3")

let caminhão4 = document.querySelector("input#caminhão4")
let motorista4 = document.querySelector("input#motorista4")
let local4 = document.querySelector("input#local4")

let caminhão5 = document.querySelector("input#caminhão5")
let motorista5 = document.querySelector("input#motorista5")
let local5 = document.querySelector("input#local5")

let res = document.querySelector("div#res")


let viagem1 = {
  Caminhão: "",
  Motorista: "",
  Local:"",
}
let viagem2 = {
  Caminhão: "",
  Motorista: "",
  Local:"",
}
let viagem3 = {
  Caminhão: "",
  Motorista: "",
  Local:"",
}
let viagem4 = {
  Caminhão: "",
  Motorista: "",
  Local:"",
}
let viagem5 = {
  Caminhão: "",
  Motorista: "",
  Local:"",
}




function calcular() {

  let quantos = parseInt(prompt("Quantos caminhões?"))
  
  
    viagem1.Caminhão = caminhão1.value;
    viagem1.Local = local1.value;
    viagem1.Motorista = motorista1.value;

    viagem2.Caminhão = caminhão2.value;
    viagem2.Local = local2.value;
    viagem2.Motorista = motorista2.value;

    viagem3.Caminhão = caminhão3.value;
    viagem3.Local = local3.value;
    viagem3.Motorista = motorista3.value;
    
    viagem4.Caminhão = caminhão4.value;
    viagem4.Local = local4.value;
    viagem4.Motorista = motorista4.value;
    
    viagem5.Caminhão = caminhão5.value;
    viagem5.Local = local5.value;
    viagem5.Motorista = motorista5.value;


    if (quantos > 1){
    
    res.innerHTML = `Boa noite Cláudio, foram ${quantos} caminhões! <br><br>

    ${viagem1.Caminhão} - ${viagem1.Motorista} - ${viagem1.Local} <br>

    ${viagem2.Caminhão} - ${viagem2.Motorista} - ${viagem2.Local} <br>

    ${viagem3.Caminhão} - ${viagem3.Motorista} - ${viagem3.Local} <br>

    ${viagem4.Caminhão} - ${viagem4.Motorista} - ${viagem4.Local} <br>

    ${viagem5.Caminhão} - ${viagem5.Motorista} - ${viagem5.Local} <br>` 

    } else{
      res.innerHTML = `Boa noite Cláudio, foi 1 caminhão! <br><br>

      ${viagem1.Caminhão} - ${viagem1.Motorista} - ${viagem1.Local} <br></br> `
    }

  }
  


