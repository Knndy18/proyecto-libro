document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.style.transform = 'rotateY(0deg)';
            } else if (i < index) {
                page.style.transform = 'rotateY(-180deg)';
            } else {
                page.style.transform = 'rotateY(180deg)';
            }
        });
    }

    document.addEventListener('click', () => {
        currentPage = (currentPage + 1) % pages.length;
        showPage(currentPage);
    });

    showPage(currentPage);

});
