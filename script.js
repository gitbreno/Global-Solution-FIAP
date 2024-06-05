document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    
    searchButton.addEventListener('click', function () {
        const searchText = searchInput.value.toLowerCase();
        const menuItems = document.querySelectorAll('.menu li a');
        
        menuItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            const sectionId = item.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            
            if (itemText.includes(searchText)) {
                section.scrollIntoView({ behavior: 'smooth' });
                section.style.transition = 'background-color 1s ease';
                section.style.backgroundColor = 'blue'; // Highlight the section
                
                setTimeout(() => {
                    section.style.backgroundColor = ''; // Remove the highlight after some time
                }, 3000);
            }
        });
    });

    const menuLinks = document.querySelectorAll('.menu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
