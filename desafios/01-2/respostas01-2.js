function dadosEmpresa(){
    const empresa = {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereco:{
            rua: 'Rua Guilherme Gembala',
            numero: 260
        }
    }
    console.log(`A empresa ${empresa.nome} esta localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);
}

function dadosProgramador(){
    const programador = {
        nome: 'Gustavo',
        idade: '25',
        tecnologias:[
            {
                nome: 'JavaScript',
                especialidade: 'Web/Mobile'
            },
            {
                nome: 'C',
                especialidade: 'Desktop'
            },
            {
                nome: 'Python',
                especialidade: 'Data Science'
            }
        ]
    }
    console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);
}
dadosEmpresa();
dadosProgramador();