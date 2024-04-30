const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputNumero = document.getElementById('numero');

    // Função para formatar o número de telefone
    function formatarNumero(numero) {
        // Remove tudo que não é número
        let numeroLimpo = numero.replace(/\D/g, '');
        
        // Adiciona parênteses no DDD e o 9 obrigatório
        if (numeroLimpo.length === 11) {
            numeroLimpo = numeroLimpo.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        } else if (numeroLimpo.length === 10) {
            numeroLimpo = numeroLimpo.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
        }
        
        return numeroLimpo;
    }

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputEmail.value}</td>`
    linha += `<td>${formatarNumero(inputNumero.value)}</td>`
    linha += '</tr>'

    linhas += linha

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
    inputNome.value = '';
    inputEmail.value = '';
    inputNumero.value = '';

})
