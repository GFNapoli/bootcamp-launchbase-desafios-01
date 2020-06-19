function tecnologiaEBusca(){
    const usuarios = [
        {
            nome: 'Gustavo',
            tecnologia: ['JS', 'CSS', 'HTML', 'NodeJS', 'ReactJS']
        },
        {
            nome: 'Thaynara',
            tecnologia: ['JAVA', 'SPRING', 'KOTLIN']
        },
        {
            nome: 'João Paulo',
            tecnologia: ['JAVA', 'SPRING', 'PYTHON']
        },
        {
            nome: 'Cassio',
            tecnologia: ['CSS', 'HTML', 'JS']
        }
    ];
    
    for(let i = 0; i < usuarios.length; i++){
        let tecno = '';
        for(let j = 0; j < usuarios[i].tecnologia.length; j++){
            if(j === 0){
                tecno += usuarios[i].tecnologia[j];
            }else{
                tecno += ', '+usuarios[i].tecnologia[j];
            }
        }
        console.log(`${usuarios[i].nome} trabalha com ${tecno}`);
    }
    
    function trabalhaComCss(usuario){
        for(let i = 0; i < usuario.tecnologia.length; i++){
            if(usuario.tecnologia[i] === 'CSS'){
                return true
            }
        }
        return false
    }
    
    for(let i = 0; i < usuarios.length; i++){
        const trabalhaCss = trabalhaComCss(usuarios[i]);
        if(trabalhaCss){
            console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`);
        }
    }    
}

function despesasEReceitas(){
    const usuarios = [
        {
          nome: "Salvio",
          receitas: [115.3, 48.7, 98.3, 14.5],
          despesas: [85.3, 13.5, 19.9]
        },
        {
          nome: "Marcio",
          receitas: [24.6, 214.3, 45.3],
          despesas: [185.3, 12.1, 120.0]
        },
        {
          nome: "Lucia",
          receitas: [9.8, 120.3, 340.2, 45.3],
          despesas: [450.2, 29.9]
        }
    ];

    function somaNumero(numeros){
        let soma = 0;
        for(let i = 0; i < numeros.length; i++){
            soma += numeros[i];
        }
        return soma
    }

    function calculaSaldo(receitas, despesas){
        let somaReceita = somaNumero(receitas);
        let somaDespesa = somaNumero(despesas);
        return somaReceita - somaDespesa
    }

    function exibeUsuario(){
        for(let i = 0; i <usuarios.length; i++){
            const saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);
            if(saldo > 0){
                console.log(`${usuarios[i].nome} possui o saldo POSITIVO de ${saldo}`);
            }else{
                console.log(`${usuarios[i].nome} possui o saldo NEGATIVO de ${saldo}`);
            }
        }
    }
    exibeUsuario();
}
tecnologiaEBusca();

despesasEReceitas();