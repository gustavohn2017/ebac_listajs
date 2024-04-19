const form = document.getElementById('form-contato');


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputNumero = document.getElementById('numero');

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputEmail.value}</td>`
    linha += `<td>${inputNumero.value}</td>`
    linha += '</tr>'

    linhas += linha

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
    inputNome.value = '';
    inputEmail.value = '';
    inputNumero.value = '';

})
    