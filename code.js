// Accessible Modal Elements
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("accessibleModal");
const modalOverlay = document.getElementById("modalOverlay");



// Event for Accessible Modal
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }
});

// Dialog Modal 
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const dialog = document.getElementById("accessibleDialog");

// Modal open/close
function openModal() {
    modal.classList.add("active");
    modalOverlay.classList.add("active");
    closeModalBtn.focus();
}

function closeModal() {
    modal.classList.remove("active");
    modalOverlay.classList.remove("active");
    openModalBtn.focus();
}

// Dialog open/close
function openDialog() {
    dialog.showModal();
    closeDialogBtn.focus();
}

function closeDialog() {
    dialog.close();
    openDialogBtn.focus();
}


// Event for Dialog Modal
openDialogBtn.addEventListener("click", openDialog);
closeDialogBtn.addEventListener("click", closeDialog);

dialog.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeDialog();
    }
});

// ====== Menue ========

const menuButton = document.getElementById('menuButton');
const menuContent = document.getElementById('menuContent');

menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    menuContent.style.display = isExpanded ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!menuContent.contains(event.target) && event.target !== menuButton) {
    menuContent.style.display = 'none';
    menuButton.setAttribute('aria-expanded', 'false');
    }
});