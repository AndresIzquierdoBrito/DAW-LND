document.addEventListener('DOMContentLoaded', function() {
    
    const clickableTexts = document.querySelectorAll('.clickable-text');
    
    clickableTexts.forEach(clickableText => {
        const hiddenDiv = clickableText.nextElementSibling;
        
        clickableText.addEventListener('click', function() {
            hiddenDiv.classList.toggle('hidden');
            
        });
    });
    
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const aside = document.querySelector('.aside');
    const article = document.querySelector('.articles');
    const originalWidth = article.offsetWidth + 'px';
    const pages = document.querySelector('.pages');
    
    hamburgerMenu.addEventListener('click', () => {        
        aside.classList.toggle('show');
        article.classList.toggle('article-active');
        
        if (article.style.width === '67%') {
            article.style.width = originalWidth;
        } else {
            article.style.width = '67%';
        }
        if (pages.style.width === '67%') {
            pages.style.width = originalWidth;
        } else {
            pages.style.width = '67%';
        }
    });});
    
    