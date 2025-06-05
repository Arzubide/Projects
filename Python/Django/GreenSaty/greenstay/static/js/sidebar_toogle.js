document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const wrapper = document.getElementById('wrapper');
    if (sidebarToggle && wrapper) {
        sidebarToggle.addEventListener('click', () => {
            wrapper.classList.toggle('toggled');
        });
    }
});