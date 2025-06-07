// Garante que o DOM está carregado antes de rodar qualquer script
document.addEventListener('DOMContentLoaded', function () {

    // ==========================
    // Tabs
    // ==========================
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' de todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Adiciona 'active' ao botão clicado e conteúdo correspondente
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Ativa o primeiro tab automaticamente
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }

    // ==========================
    // FAQ - Accordion
    // ==========================
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Fecha todos
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Abre se não estava ativo
            if (!isActive) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ==========================
    // Formulário de Contato
    // ==========================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simula envio
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }

    // ==========================
    // Menu Hamburguer
    // ==========================
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');

    if (hamburger && mainNav) {
        // Abre/fecha menu ao clicar no ícone
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Fecha o menu ao clicar em qualquer link
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });

        // Fecha o menu ao clicar fora
        document.addEventListener('click', function (e) {
            if (!e.target.closest('#mainNav') && !e.target.closest('#hamburger')) {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    }

});
