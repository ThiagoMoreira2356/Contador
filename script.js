//Variavél para o valor atual
let contagem =  0;

//Varavél selecionando o elemento de contagem do HTML
let contagemValor = document.querySelector('#contagem-valor');

//Variavél selecionando os todos botões do HTML
let btn = document.querySelectorAll('.btn')


//For each para aplicar as funções em todos os botões
btn.forEach(function(btn){
    btn.addEventListener('click', function(event){
        //Const que seleciona o botão de acordo com as classe
        const tipo = (event.currentTarget.classList);
        if(tipo.contains('Diminuir')) {
            --contagem;
            
        } else if (tipo.contains('Aumentar')) {
            ++contagem;
        }
        if(tipo.contains('Zerar')) {
            contagem = 0;
        }
        
        //Teste lógico para caso seja positivo ou negativo mudar a cor o valor na tela
        if(contagem > 0 ) {
            contagemValor.style.color = 'green'
        } else {
            contagemValor.style.color = 'red'
        }
        contagemValor.textContent = contagem;

    })  
})

