(function() {
    function loadImages() {
        const SLIDE_INTERVAL = 4000;

        const gallery = document.querySelector('.gallery');

        // const galleryList = gallery.querySelector('.gallery-list');
        const galleryList = document.createElement('ul');
        galleryList.classList.add('gallery-list');

        function switchBg (item) {
            gallery.style.backgroundImage = `url(${item.querySelector('.gallery-item__img').src}`;
        }
        
        function switchActiveItem (item) {
            galleryList.querySelector('.gallery-item_active').classList.remove('gallery-item_active');
            item.classList.add('gallery-item_active');
            switchBg(item);
        }

        fetch('images/slider/gallery.json')
            .then(res => res.json())
            .then(gallery => {
                const items = gallery.map((src, index) => {
                    const galleryItem = document.createElement('li');
                    galleryItem.classList.add('gallery-item');
                    index || galleryItem.classList.add('gallery-item_active');
                    galleryItem.setAttribute('data-id', index);

                    const img = new Image();
                    img.src = src;
                    img.classList.add('gallery-item__img');

                    galleryItem.appendChild(img);
                    // TODO: не трогать DOM лишний раз
                    
                    // Сделал TODO - создал отдельный элемент,
                    // который только после работы, вхоидт в DOM
                    galleryList.appendChild(galleryItem);
                    return galleryItem;
                });

                switchActiveItem(items[0]);

                let index = 0;
                let slideInterval = setInterval(function () {
                    index === items.length && (index = 0);
                    switchActiveItem(items[index]);
                    index++;
                }, SLIDE_INTERVAL);

                galleryList.addEventListener('click', e => {
                    if (!e.target.classList.contains('gallery-item')) 
                        console.log('Heyo, tuta et, contains');
                    console.log('Clicked!');
                    switchActiveItem(e.target);
                    clearInterval(slideInterval);
                });
            })
            .then(() => gallery.children[0].appendChild(galleryList));
    }

    window.addEventListener('load', loadImages);
})();
