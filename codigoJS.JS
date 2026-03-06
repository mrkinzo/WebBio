const btn = document.getElementById('revelarBtn');
const foto = document.querySelector('.imagem img');
const mensagem = document.getElementById('mensagemTexto'); // Seleciona o novo H2

btn.onclick = function () {
    foto.classList.toggle('revelada');

    if (foto.classList.contains('revelada')) {
        btn.textContent = "Esconder Imagem";
        
        // Espera 6 segundos (6000ms) para escrever no site
        setTimeout(() => { 
            // Só mostra o texto se a foto ainda estiver visível
            if (foto.classList.contains('revelada')) {
                mensagem.textContent = "DAMN"; 
            }
        }, 6000); 

    } else {
        btn.textContent = "Revelar Imagem";
        mensagem.textContent = ""; // Limpa o texto ao esconder a imagem
    }
}