const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;
        
    console.log(e.target);

    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
        
    const full = src;

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();

}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});