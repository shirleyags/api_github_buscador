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