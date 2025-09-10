document.addEventListener('DOMContentLoaded', function() {
    const mediaItems = [
        { title: "Python", imageUrl: "img/Python-logo.png" },
        { title: "SQL", imageUrl: "img/sql-logo.png" },
        { title: "C++", imageUrl: "img/C++Logo.png" },
        { title: "Java", imageUrl: "img/java-logo.png"},
        {title: "HTML", imageUrl: "img/HTML-logo.png"},
        {title: "CSS", imageUrl: "img/css-logo.png"},
        {title: "JavaScript", imageUrl:  "img/JavaScript-Logo.png"}
    ];

    const mediaContainer = document.querySelector('.media');
    mediaContainer.innerHTML = '';

    mediaItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'media-card';

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;

        const title = document.createElement('h3');
        title.textContent = item.title;

        card.appendChild(img);
        // card.appendChild(title);
        mediaContainer.appendChild(card);

        // item.addEventListener('click', () =>{
        //
        // })
    });

    // Scroll functionality
    const scroller = document.querySelector('.media-scroller');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', () => {
        scroller.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        scroller.scrollBy({ left: 300, behavior: 'smooth' });
    });
});