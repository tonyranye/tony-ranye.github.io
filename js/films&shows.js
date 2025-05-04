document.addEventListener('DOMContentLoaded', function() {
    const mediaItems = [
        { title: "The Wire", imageUrl: "img/wire.jpg" },
        { title: "Princess Mononoke", imageUrl: "img/mono.jpg" },
        { title: "Mr. Robot", imageUrl: "img/robot.jpg" },
        { title: "The Bad Batch", imageUrl: "img/batch.png" },
        { title: "Andor", imageUrl: "img/andor.jpg"},
        {title: "Severance", imageUrl: "img/severance.jpg"}
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
        card.appendChild(title);
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