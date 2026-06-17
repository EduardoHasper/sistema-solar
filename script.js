// ==================== LÓGICA DO FILTRO ====================
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const cardsPlanetas = document.querySelectorAll('.card-planeta');

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // Altera classe ativa dos botões de filtro
        document.querySelector('.btn-filtro.ativo').classList.remove('ativo');
        botao.classList.add('ativo');

        const categoria = botao.getAttribute('data-filtro');

        // Mostra ou esconde os cards baseado no tipo de planeta
        cardsPlanetas.forEach(card => {
            if (categoria === 'todos' || card.getAttribute('data-tipo') === categoria) {
                card.classList.remove('escondido');
            } else {
                card.classList.add('escondido');
            }
        });
    });
});

// ==================== PAINEL DE DADOS ====================
const botoesDetalhes = document.querySelectorAll('.btn-detalhes');
const painelCentral = document.getElementById('painel-central');
const textoPainel = document.getElementById('texto-painel');
const btnFecharPainel = document.getElementById('fechar-painel');

botoesDetalhes.forEach(botao => {
    botao.addEventListener('click', () => {
        const dados = botao.getAttribute('data-info');
        textoPainel.innerHTML = dados.replaceAll(' | ', '<br><br>🔹 ');
        painelCentral.classList.remove('escondido');
        
        // Rola a página suavemente até o painel
        painelCentral.scrollIntoView({ behavior: 'smooth' });
    });
});

btnFecharPainel.addEventListener('click', () => {
    painelCentral.classList.add('escondido');
});

// ==================== SISTEMA DE QUIZ ====================
const botoesQuiz = document.querySelectorAll('.btn-quiz');
const resultadoQuiz = document.getElementById('resultado-quiz');

botoesQuiz.forEach(botao => {
    botao.addEventListener('click', () => {
        // Desabilita todos os botões após a resposta para o usuário não clicar de novo
        botoesQuiz.forEach(b => b.disabled = true);

        const eCorreta = botao.getAttribute('data-correta') === 'true';

        if (eCorreta) {
            botao.classList.add('correto');
            resultadoQuiz.textContent = "🎉 Resposta Correta! Vênus chega a temperaturas extremas devido ao seu forte efeito estufa.";
            resultadoQuiz.style.color = "#4ade80";
        } else {
            botao.classList.add('errado');
            resultadoQuiz.textContent = "❌ Resposta Incorreta. Tente lembrar qual planeta retém mais calor!";
            resultadoQuiz.style.color = "#f87171";
        }
        
        resultadoQuiz.classList.remove('escondido');
    });
});
