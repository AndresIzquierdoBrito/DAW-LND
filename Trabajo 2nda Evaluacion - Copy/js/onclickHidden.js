document.addEventListener('DOMContentLoaded', function() {
    
    const clickableTexts = document.querySelectorAll('.clickable-text');
    
    clickableTexts.forEach(clickableText => {
        const hiddenDiv = clickableText.nextElementSibling;
        
        clickableText.addEventListener('click', function() {
            hiddenDiv.classList.toggle('hidden');
        });
    });
});