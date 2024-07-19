// Adiciona um ouvinte de eventos para o formulário que será ativado no envio
document.getElementById('formulario').addEventListener('submit', function(verificar) {
    verificar.preventDefault(); // Impede o envio do formulário para a página

    // Obtém os valores dos campos A e B e os converte para números de ponto flutuante
    let campoA = parseFloat(document.getElementById('numA').value);
    let campoB = parseFloat(document.getElementById('numB').value);
    
    // Obtém o elemento onde a mensagem será exibida
    let mensagem = document.getElementById('mensagem');

    // Verifica se o valor de B é maior que o valor de A
    if (campoB > campoA) {
        // Exibe mensagem positiva e define a cor do texto como verde
        mensagem.textContent = 'Formulário válido: Campo B é maior que Campo A.';
        mensagem.style.color = 'green';
    } else {
        // Exibe mensagem negativa e define a cor do texto como vermelha
        mensagem.textContent = 'Formulário inválido: Campo B deve ser maior que Campo A.';
        mensagem.style.color = 'red';
    }
    
    document.getElementById("numA").value = " "
    document.getElementById("numB").value = " "
});
