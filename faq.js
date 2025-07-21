document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            
            item.classList.toggle('active');
        });
    });

    
    const searchInput = document.getElementById('faq-search');
    const searchButton = document.getElementById('faq-search-button');
    const faqList = document.querySelector('.faq-list');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const faqItems = faqList.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const questionText = item.querySelector('.faq-question h2').textContent.toLowerCase();
            const answerText = item.querySelector('.faq-answer p').textContent.toLowerCase();

            if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                item.style.display = ''; 
            } else {
                item.style.display = 'none'; 
            }
        });
    }
});