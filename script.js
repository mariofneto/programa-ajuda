quantos = parseInt(prompt("Quantos caminhões?"))
msg = document.getElementById("msg")
res = document.getElementById("res")

for (let i = 0; i < quantos; i++) {

    div = document.createElement("div")
    div.setAttribute('class', 'caminhoes')
    msg.appendChild(div)

    //criando input caminhao
    label = document.createElement("label")
    label.innerText = "Caminhão"
    div.appendChild(label)
    input = document.createElement("input")
    input.type = "text"
    div.appendChild(input)

    //criando input caminhoneiro
    label = document.createElement("label")
    label.innerText = "Caminhoneiro"
    div.appendChild(label)
    input = document.createElement("input")
    input.type = "text"
    div.appendChild(input)

    //criando input viagem
    label = document.createElement("label")
    label.innerText = "Viagem"
    div.appendChild(label)
    input = document.createElement("input")
    input.type = "text"
    div.appendChild(input)

}

function exibirResposta()
{
    p = document.createElement("p")
    if(quantos == 1)
    {
        p.innerHTML = "Boa noite! \nFoi "+ quantos + " caminhão.<br>" 
    }
    else
    {
        p.innerHTML = "Boa noite! \nForam "+ quantos + " caminhões.<br>" 
    }
    
    listaInputs = document.getElementsByClassName("caminhoes")
    for(i = 0; i <= listaInputs.length - 1; i++)
    {
        caminhao = listaInputs[i]
        
        p.innerHTML += "<br>"+caminhao.getElementsByTagName("input")[0].value + " - " + caminhao.getElementsByTagName("input")[1].value + " - " + caminhao.getElementsByTagName("input")[2].value +"\n"
        res.appendChild(p)
        
    }
}

