/*Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
Deve mostrar no seu menu de opções, a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um novo imóvel.
O menu deve ter a opção de listar os imóveis salvos.
As informações a serem salvas do imóvel são: nome do proprietário, quantidade de quartos, quantidade de banheiros e se tem garagem.
Ao pedir as informações dos dados do imóvel, deve pedir se deseja salvar - utilize o método confirm().*/

let property = []
let option = ''

do {
    option = prompt(`
        imóveis: ${property.lenght}
        1 - Salvar novo imóvel.
        2- Listar os imóveis salvos.
        3 - Sair.
         `)
    }
    switch (option) {
        case '1':
            const saveproperty = prompt('qual o nome do proprietário?')
       property.push(saveproperty)
       break
       case '2':
        const listproperty = property.pop()  
        if (!listproperty) {
            alert('não há nenhum imóvel salvo.')
        } else {
            alert(`você listou ${listproperty}`)
        }
    }

