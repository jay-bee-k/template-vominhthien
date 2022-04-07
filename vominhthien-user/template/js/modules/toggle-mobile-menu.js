export default function toggleMobileMenu() {
    const body = document.getElementById('body');
    const mainMenuBtn = document.getElementById('header-menu-btn');
    const mainMenu = document.getElementById('sideBar');
    const mainMenuOverlay = document.getElementById('sidebarOverlay');
    if (mainMenu && mainMenuBtn) {
        mainMenuBtn.addEventListener('click', () => {
            body.classList.toggle('stop-scroll');
            mainMenuBtn.classList.toggle('active');
            mainMenu.classList.toggle('active');
        });
        if (mainMenuOverlay) {
            mainMenuOverlay.addEventListener('click', () => {
                mainMenuBtn.classList.remove('active');
                mainMenu.classList.remove('active');
                body.classList.toggle('stop-scroll');
            });
        }
    }
}