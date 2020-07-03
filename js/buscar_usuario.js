const formCadastrosUsuario = document.querySelector('[data-form]')


formCadastrosUsuario.addEventListener('submit', event =>{
    event.preventDefault()

    const usuario = event.target.querySelector('[data-usuario]')

    listarUsuario(usuario.value)
})