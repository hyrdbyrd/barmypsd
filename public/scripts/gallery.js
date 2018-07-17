window.onload = function () {
    const oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "images/slider/gallery.json", true);
    oReq.send();

    function reqListener(e) {
        let gallery = JSON.parse(this.responseText);
        const galleryList = document.querySelector('.gallery-list');
        gallery.forEach((src, index, link) => {
            const galleryItem = document.createElement('li');
            galleryItem.classList.add('gallery-item');
            galleryItem.setAttribute('img-id', index);
            index === 0 ? galleryItem.classList.add("active_slide") : null;

            const img = new Image();
            img.src = src;
            img.classList.add("gallery-item__img");

            galleryItem.appendChild(img);
            galleryList.appendChild(galleryItem);
            switchBg();
        });

        const items = document.querySelectorAll('.gallery-item');

        function switchState (items, item) {
            items.forEach(e => e.classList.remove('active_slide'));
            item.classList.add('active_slide');
            switchBg();
        }

        function switchBg () {
            document.querySelector('.gallery').style.background =
                `url(${document.querySelector('.active_slide').children[0].src}) no-repeat 0% 0%`;
            document.querySelector('.gallery').style.backgroundSize = '100% 100%';
        }

        const time = 4000;
        let id = 0;
        let mtm = setTimeout(function tt() {
            if (id == items.length)
                id = 0;
            switchState(items, document.querySelector(`.gallery-item[img-id="${id++}"]`));
            let tm = setTimeout(tt, time);
            document
                .querySelectorAll('.gallery-item')
                .forEach(e => 
                    e.addEventListener('click', () => clearTimeout(tm))
                );
        }, time);

        items.forEach(item => 
            item.addEventListener('click', e => {
                items.forEach(e => e.classList.remove('active_slide'));
                item.classList.add('active_slide');
                clearTimeout(mtm);
                switchBg();
            })
        );
    }
    /* 
    <li class="gallery-item">
        <img class="gallery-item__img" src="./images/slider/s1.png">
    </li>
    <li class="gallery-item">
        <img class="gallery-item__img" src="./images/slider/s2.png">
    </li>
    <li class="gallery-item">
        <img class="gallery-item__img" src="./images/slider/s3.png">
    </li>
    <li class="gallery-item active_slide">
        <img class="gallery-item__img" src="./images/slider/s4.png">
    </li> 
    */
}