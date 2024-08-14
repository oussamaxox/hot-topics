document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('nav a');

    const loadContent = async (page) => {
        try {
            const response = await fetch(`partials/${page}.html`);
            const content = await response.text();
            mainContent.innerHTML = content;
        } catch (error) {
            console.error('Error loading content:', error);
            mainContent.innerHTML = '<p>Error loading content. Please try again.</p>';
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadContent(page);
        });
    });

    // Load home page by default
    loadContent('home');
});