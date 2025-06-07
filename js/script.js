// Função para ativar/desativar tabs
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove classe active de todos os botões e conteúdos
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Adiciona classe active ao botão clicado
        button.classList.add('active');
        
        // Mostra o conteúdo correspondente
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Fecha todos os itens
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Abre o item clicado se não estiver ativo
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
    });
}

// Ativar primeiro tab por padrão
document.querySelector('.tab-button').click();

// Menu Hamburguer
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mainNav.classList.toggle('active');
    
    // Atualiza o atributo ARIA para acessibilidade
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mainNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});