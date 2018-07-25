(function() {
    function getFixSize(selector = '.shade', param = 'height') {
        var elems = document.querySelectorAll(selector);

        return function() {
            elems.forEach(e => e.style[param] = document.body['client' + capitalize(param)] + 'px');
        }
    }

    var fixSize = getFixSize();

    window.addEventListener('load', fixSize);
    window.addEventListener('resize', debounce(fixSize, 200));

    function capitalize(str) {
        return str.substr(0, 1).toUpperCase() + str.substr(1);
    }

    function debounce(fn, timeout, ctx = window) {
        var invoked = false;

        return function() {
            invoked || fn.apply(ctx, arguments);
            invoked = true;

            setTimeout(() => {
                invoked = false;
            }, timeout);
        }
    }
})();
