const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContennt = document.querySelectorAll('.js-tabcontent section');

function activeTab(index) {
  tabContennt.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContennt[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
});