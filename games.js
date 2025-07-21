document.addEventListener('DOMContentLoaded', () => {

    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gameLinks = document.querySelectorAll('.box-container a.box[data-category]'); 

    
    function filterSelection(selectedCategory) {
       
       
        const categoryToFilter = selectedCategory.toLowerCase().trim();

        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === categoryToFilter) {
                btn.classList.add('active');
            }
        });

        gameLinks.forEach(item => {
            const gameCategoriesString = item.getAttribute('data-category'); 
            
            if (!gameCategoriesString) { 
                if (categoryToFilter === 'all') {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
                return; 
            }

            const gameCategories = gameCategoriesString.split(',').map(cat => cat.trim().toLowerCase());
            const isMatch = gameCategories.includes(categoryToFilter);

            if (categoryToFilter === 'all' || isMatch) {
                item.classList.remove('hidden'); 
            } else {
                item.classList.add('hidden'); 
            }
        });
    }

    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const categoryToFilter = button.getAttribute('data-category');
            filterSelection(categoryToFilter); 
        });
    });

   
    const allButton = document.querySelector('.filter-btn[data-category="all"]');
    if (allButton) {
        allButton.click(); 
    }

    
});