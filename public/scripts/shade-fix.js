function sizeFix(selector = '.shade', paramBody = document.body.clientHeight, param = 'height') {
    const el = document.querySelector(selector);
    if (el.forEach)
        el.forEach(e => e.style[param] = paramBody + 'px')
    else 
        el.style[param] = paramBody + 'px';
}

window.onload = () => {
    sizeFix();
    // document.querySelector('.shade').style.height = document.body.clientHeight + 'px';
}

window.onresize = () => {
    sizeFix();
}