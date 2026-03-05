document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('#checkbox');
    const menuBtn = document.querySelector('.ri-menu-line');
    const closeBtn = document.querySelector('.ri-close-line');
    const menuOverlay = document.querySelector('#menuOverlay');

    // Troca de Tema
    if (checkbox) {
        checkbox.addEventListener('change', () => {
            document.body.classList.toggle('light-mode');
        });
    }

    // Abrir Menu
    const openMenu = () => {
        menuOverlay.classList.remove('hidden');
        menuBtn.classList.add('hidden');
        closeBtn.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    // Fechar Menu
    const closeMenu = () => {
        menuOverlay.classList.add('hidden');
        menuBtn.classList.remove('hidden');
        closeBtn.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    if (menuBtn) menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // FECHAR AO CLICAR FORA (No fundo do overlay)
    menuOverlay.addEventListener('click', (event) => {
        if (event.target === menuOverlay) {
            closeMenu();
        }
    });

    // Fechar ao clicar em links
    const links = menuOverlay.querySelectorAll('a');
    links.forEach(link => link.addEventListener('click', closeMenu));
});