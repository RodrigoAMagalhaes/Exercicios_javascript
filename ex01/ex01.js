function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var msg = document.getElementById('msg')

    if (fano.value.length == 0 || Number(fano.value) >= ano){
        window.alert('Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img') //Esse comando cria uma tag html
        img.setAttribute('id', 'foto') //para a minha tag criada eu seto alguns atributos

        if (fsex[0].checked) {
            genero = "Masculino"
           

            if (idade > 0 && idade <=10){
                // Criança homem 
                msg.innerHTML = `É uma criança do sexo ${genero} de ${idade} anos!`
                img.setAttribute('src', 'bebe_homem.jpg')
            }
            else if (idade > 10 && idade <= 21){
                // jovem homem
                msg.innerHTML = `É um jovem do sexo ${genero} de ${idade} anos!`
                img.setAttribute('src', 'jovem_homem.jpg')
            }
            else if (idade > 21 && idade < 50){
                // adulto homem
                msg.innerHTML = `É um adulto do sexo ${genero} de ${idade} anos!`
                img.setAttribute('src', 'adulto_homem.jpg')
            }
            else if (idade > 50){
                // idoso homem
                msg.innerHTML = `É um idoso do sexo ${genero} de ${idade} anos!`
                img.setAttribute('src', 'velho_homem.jpg')
            }
        }
        else if(fsex[1].checked) {
            genero = "Feminino"
            
            if (idade > 0 && idade <=10){
                // Criança mulher 
                msg.innerHTML = `É uma criança do sexo ${genero} de ${idade} anos!`
                img.setAttribute('src', 'bebe_mulher.jpg')
            }
            else if (idade > 10 && idade <= 21){
                // jovem mulher
                msg.innerHTML = `É um jovem do sexo ${genero} de ${idade} anos!`
                img.setAttribute('src', 'jovem_mulher.jpg')
            }
            else if (idade > 21 && idade < 50){
                // adulto mulher
                msg.innerHTML = `É um adulto do sexo ${genero} de ${idade} anos!`
                img.setAttribute('src', 'adulto_mulher.jpg')
            }
            else if (idade > 50){
                // idoso mulher
                msg.innerHTML = `É um idoso do sexo ${genero} de ${idade} anos!`
                img.setAttribute('src', 'velha_mulher.jpg')
            }
        }

        msg.appendChild(img)   /*Esse comando eu não entendi muito bem, mas me parece
                                que eu to incluindo um child no meu elemento msg da 
                                minha ávore DOM, tipo, pq ele não tá vinculado a nenhum objeto.
                                Pensa, se eu fosse criar ele no HTML básico eu criaria na 
                                tag div#msg, ele seria um child dessa tag. O que estou fazendo
                                é a mesma coisa, informando o JS para considerar esse elemento 
                                como um filho da tag div#msg*/
    }
               
}