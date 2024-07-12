document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.btn1');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
});
