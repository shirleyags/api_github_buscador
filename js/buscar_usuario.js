const formCadastrosUsuario = document.querySelector('[data-form]')


const testear = formCadastrosUsuario.addEventListener('submit', event =>{
    event.preventDefault()

    const usuario = event.target.querySelector('[data-usuario]')

    const corpoTabela = document.querySelector("[data-conteudo-tabela]")

    listarUsuario(usuario.value).then(exibe => 
        {
        exibe.forEach(indice => {
            corpoTabela.appendChild(exibeUsuario
                (indice.name, indice.language, indice.open_issues, indice.forks))
                
        })
    }
    )

})


