

const listarUsuario = usuario => {
     return fetch('https://api.github.com/users/${usuario}/repos')
    .then(resposta =>{
        return resposta.json()
    })
    .then(json =>{
        return json
    })
}



    

      


