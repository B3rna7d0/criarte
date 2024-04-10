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
// Modal window
function openModal() {
    const modal = document.getElementById('window-modal')
    modal.classList.add('opener')
    
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'close-button' || e.target.id == 'window-modal'){
            modal.classList.remove('opener')
        }
    })
}