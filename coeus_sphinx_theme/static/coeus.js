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

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#content .fade-image');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});

document.querySelectorAll('details.sd-dropdown').forEach((dropdown) => {
    const summary = dropdown.querySelector('summary');
    const content = dropdown.querySelector('.sd-summary-content');
    content.style.transition = 'max-height 0.5s ease-in-out';
    content.style.overflow = 'hidden';
    content.style.maxHeight = '0';
    summary.addEventListener('click', (event) => {
        event.preventDefault();
        const isOpen = dropdown.hasAttribute('open');
        if (isOpen) {
            content.style.maxHeight = '0';
            setTimeout(() => dropdown.removeAttribute('open'), 500);
        } else {
            dropdown.setAttribute('open', true);
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
