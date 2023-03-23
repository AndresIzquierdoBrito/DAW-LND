document.addEventListener('DOMContentLoaded', function() {
    
    const areas = document.querySelectorAll('area');
    const imageNextToMap = document.querySelector('.imageNextToMap');
    
    areas.forEach(area => {
        area.addEventListener('mouseover', () => {
            const imageSrc = area.dataset.image;
            imageNextToMap.src = imageSrc;
            imageNextToMap.alt = imageSrc;
            document.querySelector('.imageNextToMap').style.display = 'block';
        });
        
        area.addEventListener('mouseout', () => {
            document.querySelector('.imageNextToMap').style.display = 'none';
        });
    });
    
    const clickableTexts = document.querySelectorAll('.clickable-text');
    
    clickableTexts.forEach(clickableText => {
        const hiddenDiv = clickableText.nextElementSibling;
        
        clickableText.addEventListener('click', function() {
            hiddenDiv.classList.toggle('hidden');
            
        });
    });
    
    const icons = document.querySelectorAll('svg');
    icons.forEach(function(icon) {
        icon.addEventListener('click', function(event) {
            event.stopPropagation();
            event.preventDefault();
            icon.classList.toggle('checked');
        });
    });
    
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const aside = document.querySelector('.aside');
    const article = document.querySelector('.articles');
    const originalWidth = article.offsetWidth + 'px';
    const pages = document.querySelector('.pages');
    const minidata = document.querySelectorAll('.miniData');
    
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
        minidata.forEach(mini => {
            if (article.style.width === '67%') {
                mini.style.display = 'none';
            } else {
                mini.style.display = 'block';
            }
        });
        
        
    });
});