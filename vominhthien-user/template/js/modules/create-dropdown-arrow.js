export default function createDropdownArrow() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.sidebar .dropdown').forEach(el => {
            const dropdown = el;
            const arrows = document.createElement("i");
            const back = el.querySelector('.title-sub-menu');
            arrows.classList.add('fa', 'fa-angle-right');
            dropdown.querySelector('a').appendChild(arrows);
            back.addEventListener('click', function () {
                dropdown.classList.remove('show-sub-menu');
            })
            arrows.addEventListener('click', e => {
                e.preventDefault();
                let text = el.querySelector('a').textContent;
                back.querySelector('.tt').textContent = text;
                dropdown.classList.toggle('show-sub-menu');
            });
        });
    });
}