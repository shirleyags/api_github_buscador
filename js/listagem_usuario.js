const corpoTabela = document.querySelector("[data-conteudo-tabela]")

const exibeUsuario = (name, stargazers_count, open_issues, forks) => {
    const linha = document.createElement('tr') 
    const conteudoLinha = `    
        <td>${name}</td>
        <td>${stargazers_count}</td>
        <td>${open_issues}</td>
        <td>${forks}</td>
        `

    linha.innerHTML = conteudoLinha
    return linha
}


listarUsuario().then(exibe => {
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.name, indice.stargazers_count, indice.open_issues, indice.forks))

    })
}
)