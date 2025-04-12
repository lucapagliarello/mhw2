/* funzione per il bottone iscriviti | accesso  */
function onButtonClick() {
  document.body.classList.add('no-scroll'); 
  modalView.classList.remove('hidden'); 
}

function onModalClick(event) {
  if (event.target === modalView) {
    closeModal();
  }
}

function closeModal() {
  document.body.classList.remove('no-scroll'); 
  modalView.classList.add('hidden'); 
}

function closeModalOnX() {
  closeModal();
}

const accesso = document.querySelector(".button-accesso");
const modalView = document.querySelector('#modal-view');
const closeButton = document.querySelector('#X');

accesso.addEventListener('click', onButtonClick);
modalView.addEventListener('click', onModalClick);
closeButton.addEventListener('click', closeModalOnX);

/* pulsante Mostra Altri articoli per aggiungere ulteriori articoli nella home */

function mostraAltro(event) {
  const extraContainer = document.querySelector('#flex-container-extra').parentElement;
  const bottone = event.currentTarget;
  const link = bottone.querySelector('a');

  const isHidden = extraContainer.classList.contains('hidden');

  if (isHidden) {
    extraContainer.classList.remove('hidden');
    link.textContent = 'Mostra meno articoli';
  } else {
    extraContainer.classList.add('hidden');
    link.textContent = 'Mostra altri articoli';
  }
}

const toggleButton = document.querySelector('#mostra-altro');
toggleButton.addEventListener('click', mostraAltro);

/* Funzione quando si passa con il mouse le varie categorie donna-uomo ecc. che si aprono le "sottocategorie" */

function showSubMenu(button) {
  const submenu = document.querySelectorAll('div[data-submenu]');
  for (let i = 0; i < submenu.length; i++) {
    const data = submenu[i].dataset.submenu;
    if (data === button) {
      submenu[i].classList.remove('hidden');
    } else {
      submenu[i].classList.add('hidden');
    }
  }
}

function hideSubMenu(button) {
  const submenu = document.querySelectorAll('div[data-submenu]');
  for (let i = 0; i < submenu.length; i++) {
    const data = submenu[i].dataset.submenu;
    if (data === button) {
      submenu[i].classList.add('hidden');
    }
  }
}

function mostraData(event) {
  const button = event.currentTarget.dataset.button;
  showSubMenu(button);
}

function nascondiData(event) {
  const button = event.currentTarget.dataset.button;
  hideSubMenu(button);
}

function nascondiSubMenu(event) {
  const submenu = event.currentTarget.parentElement;
  submenu.classList.add('hidden');
}

const linkSingolo = document.querySelectorAll('.link-singolo');

for (let i = 0; i < linkSingolo.length; i++) {
  linkSingolo[i].addEventListener("mouseover", mostraData);
}

const linkMobile = document.querySelectorAll('.link-mobile');

for(let i = 0; i < linkMobile.length; i++) {
  linkMobile[i].addEventListener("mouseover", mostraData);
}

const subMenu = document.querySelectorAll('.submenu');

for(let i=0; i < subMenu.length; i++){
  subMenu[i].addEventListener("mouseleave", nascondiSubMenu);
}

function showSubSubMenu(key) {
  const allRightSubmenus = document.querySelectorAll('[data-submenu-right]');
  for (let i = 0; i < allRightSubmenus.length; i++) {
    const submenuKey = allRightSubmenus[i].dataset.submenuRight;
    if (submenuKey === key) {
      allRightSubmenus[i].classList.remove('hidden');
    } else {
      allRightSubmenus[i].classList.add('hidden');
    }
  }
}

function hideSubSubMenuRight() {
  const allRightSubmenus = document.querySelectorAll('[data-submenu-right]');
  for (let i = 0; i < allRightSubmenus.length; i++) {
    allRightSubmenus[i].classList.add('hidden');
  }
}

function handleMouseOver(event) {
  const key = event.currentTarget.dataset.subsubmenu;
  showSubSubMenu(key);
}

function handleMouseLeave() {
  hideSubSubMenuRight();
}

const subsubmenuLinks = document.querySelectorAll('[data-subsubmenu]');
for (let i = 0; i < subsubmenuLinks.length; i++) {
  subsubmenuLinks[i].addEventListener('mouseover', handleMouseOver);
}

const submenuRight = document.querySelectorAll('.submenu-right');
for (let i = 0; i < submenuRight.length; i++) {
  submenuRight[i].addEventListener('mouseleave', handleMouseLeave);
}

/* Menu a tendina versione mobile */

function showMenuMobile(){
  mobileMenu.classList.toggle('hidden');
}

const menuIcon = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile-menu');

menuIcon.addEventListener('click', showMenuMobile);

/* Cambiamento immagine numero di like, quando clicco sull'immagine, modificando l'attributo src*/

function onLikeClick(event) {
  const likeButton = event.currentTarget;
  const heartImg = likeButton.querySelector('img');
  const likeCount = likeButton.querySelector('span');
  const initialLikes = parseInt(likeButton.dataset.likes);

  let liked = heartImg.src.includes('cuorepieno.png');

  if (liked) {
    liked = false;
    updateHeartImage(heartImg, liked);
    updateLikeCount(likeCount, liked, initialLikes, likeButton);
  } else {
    liked = true;
    updateHeartImage(heartImg, liked);
    updateLikeCount(likeCount, liked, initialLikes, likeButton);
  }
}

function updateHeartImage(heartImg, liked) {
  if (liked) {
    heartImg.src = 'cuorepieno.png';
  } else {
    heartImg.src = 'like.png';
  }
}

function updateLikeCount(likeCount, liked, initialLikes, likeButton) {
  let newLikeCount;
  if (liked) {
    newLikeCount = initialLikes + 1;
  } else {
    newLikeCount = initialLikes - 1;
  }

  likeCount.textContent = newLikeCount;

  likeButton.dataset.likes = newLikeCount;
}

const allLikes = document.querySelectorAll('.likes');
for (let i = 0; i < allLikes.length; i++) {
  allLikes[i].addEventListener('click', onLikeClick);
}