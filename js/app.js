// Alternar entre modo claro y oscuro
const toggleTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

// Inicializar el tema
const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
};

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    // Crear el botón para alternar temas
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Alternar Tema';
    themeToggleButton.style.position = 'fixed';
    themeToggleButton.style.bottom = '10px';
    themeToggleButton.style.right = '10px';
    themeToggleButton.style.padding = '10px';
    themeToggleButton.style.border = 'none';
    themeToggleButton.style.borderRadius = '5px';
    themeToggleButton.style.cursor = 'pointer';
    themeToggleButton.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggleButton);
});


document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease-in-out";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
