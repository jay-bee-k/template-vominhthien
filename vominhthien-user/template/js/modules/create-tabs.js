export default function createTabs() {
    const tabsMoveTo = target => {
        const tabLink = target;
        const tabLinkSiblings = tabLink.parentElement.children;
        const tabContent = document.querySelector(tabLink.getAttribute('data-tab'));
        if (!tabContent) {
            console.warn('tabContent not found!');
            return;
        }
        const tabContentSiblings = tabContent.parentElement.children;
        for (const tabLinkSibling of tabLinkSiblings) {
            if (tabLinkSibling.classList.contains('active')) {
                tabLinkSibling.classList.remove('active');
            }
        }
        tabLink.classList.add('active');
        for (const tabContentSibling of tabContentSiblings) {
            if (tabContentSibling.classList.contains('active')) {
                tabContentSibling.classList.remove('active');
            }
        }
        tabContent.classList.add('active');
        if (tabContent.querySelector('.swiper-container')) {
            window.dispatchEvent(new Event('resize'));
        }
    };
    document.addEventListener('click', e => {
        e.target.closest('.tab-link') && tabsMoveTo(e.target.closest('.tab-link'));
    });
    document.querySelectorAll('.tab-link.active').forEach(el => tabsMoveTo(el));
}