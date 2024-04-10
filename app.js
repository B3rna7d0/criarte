// Efeito animação ao abrir o site
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// modal-window
const buttonMore = document.getElementById('btn-more');
const modal = document.querySelector('dialog');
const closeButton = document.querySelector('dialog button')

function openModal() {
    modal.showModal()
}

function closeModal() {
    modal.close()
}