function atividade(){
    var num1 = Number(prompt("digite o primeiro valor"));
    var num2 = Number(prompt("digite o segundo valor"));

        //igualdade

        igual = num1 == num2;

        //condição são ou não iguais

        if (num1 == num2){
            ns = "são";

        }else {
            ns = "não";
        }
    
        //achar o resultado da soma

        resultado = num1 + num2;
    
        //verificação para ver se é maior ou menor
        if(resultado > 10){
            maior = "maior que";
            
        }else{
            maior = "menor que"
        }

        if(resultado < 20){
            menor = "menor que";
        }else{
            menor = "maior que";

    }
            //mensagem para o usuário 
            
    alert(`Os numeros ${num1} e ${num2} ${ns} iguais.Sua soma é ${resultado}, que é ${maior} 10 e ${menor} 20.`);

}
//chamado da função
atividade();