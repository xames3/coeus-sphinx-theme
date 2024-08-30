/*! For license information please see theme.js.LICENSE.txt */
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

window.onload = function () {
    const wordsPerMinute = 225;
    const section = document.querySelector('section');

    if (!section) return;

    const paragraphs = section.querySelectorAll('p');
    const totalWordCount = Array.from(paragraphs).reduce((count, p) => {
        return count + p.textContent.trim().split(/\s+/).length;
    }, 0);

    if (totalWordCount > 0) {
        const value = Math.ceil(totalWordCount / wordsPerMinute);
        const result = `${value} minutes`;
        document.getElementById('readingTime').innerHTML = `<i class="fa-solid fa-clock" style="padding-right: 0.3rem;"></i>${result}`;
    }
};
