function contador(){
    var msg = document.getElementById('msg')
    var inicio = document.getElementById('txt_inicio')
    var fim = document.getElementById('txt_fim')
    var passo = document.getElementById('txt_passo')
    var mao = "👉"
    var mulher = "🙅"

    msg.innerHTML = "Contando..."
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.lenght == 0 ){
        window.alert('[ERRO] Insira algum valor para continuar!')
    } else if(i < f){

        for(let c = i; c <= f; c = c + p){

            msg.innerHTML += `${c}`+ `${mao}`
        }

    } else if(i > f) {

        for(let c = i; c >= f; c -= p){

            msg.innerHTML += `${c}`+ `${mao}`
            
        }
    }
        
    msg.innerHTML += `${mulher} ${mulher} ${mulher}`
}
