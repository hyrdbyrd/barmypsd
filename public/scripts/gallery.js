(function() {
    function loadImages() {
        const SLIDE_INTERVAL = 4000;

        const gallery = document.querySelector('.gallery');
        const galleryList = gallery.querySelector('.gallery-list');

        function switchBg (item) {
            gallery.style.backgroundImage = `url(${item.querySelector('.gallery-item__img').src}`;
        }

        fetch('images/slider/gallery.json')
            .then(res => res.json())
            .then(gallery => {
                const items = gallery.map((src, index) => {
                    const galleryItem = document.createElement('li');
                    galleryItem.classList.add('gallery-item');
                    index || galleryItem.classList.add('gallery-item_active');

                    const img = new Image();
                    img.src = src;
                    img.classList.add('gallery-item__img');

                    galleryItem.appendChild(img);
                    // TODO: не трогать DOM лишний раз
                    galleryList.appendChild(galleryItem);

                    return galleryItem;
                });

                switchBg(items[0]);

                let index = 0;
                let slideInterval = setInterval(function () {
                    index === items.length && (index = 0);

                    galleryList.querySelector('.gallery-item_active').classList.remove('gallery-item_active');
                    items[index].classList.add('gallery-item_active');
                    switchBg(items[index]);

                    index++;
                }, SLIDE_INTERVAL);

                galleryList.addEventListener('click', e => {
                    if (!e.target.classList.contains('gallery-item')) return;

                    clearInterval(slideInterval);
                });
            });
    }

    window.addEventListener('load', loadImages);
})();
