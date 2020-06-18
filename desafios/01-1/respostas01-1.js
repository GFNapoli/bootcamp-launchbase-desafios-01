function calculoImc(){
    const nome = 'Gustavo';
    const altura = 1.71;
    const peso = 87;

    const imc = peso/(altura * altura);

    if(imc >= 30){
        console.log(`${nome}, você está acima do peso;`);
    }else{
        console.log(`${nome}, você não está acima do peso;`);
    }
}

function calculoAposentadoria(){
    const nome = 'Gustavo';
    const sexo ='M'
    const idade = 25;
    const contribuicao = 5;

    const regraIdadeContri = idade + contribuicao;

    if(sexo == 'M'){
        if(contribuicao >=35 && regraIdadeContri >=95){
            console.log(`${nome}, você pode se aposentar!;`);
        }else{
            console.log(`${nome}, Você não pode se aposentar!;`);
        }
    }else{
        if(contribuicao >=30 && regraIdadeContri >=85){
            console.log(`${nome}, você pode se aposentar!;`);
        }else{
            console.log(`${nome}, Você não pode se aposentar!;`);
        }
    }

}
calculoImc()
calculoAposentadoria()