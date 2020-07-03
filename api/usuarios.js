

const listarUsuario = usuario => {
     return fetch(`https://api.github.com/users/${usuario}/repos`)
    .then(resposta =>{
        return resposta.json()
    })
    .catch(erro => console.log(erro));
}



    

      


