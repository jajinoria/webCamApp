var idx = 0;
var filters = [
    'grayscale',
    'sepia',
    'blur',
    'brightness',
    'contrast',
    'hue-rotate',
    'hue-rotate2',
    'hue-rotate3',
    'saturate',
    'original',
    ''];

function changeFilter(el) {
    el.className = '';
    var effect = filters[idx++ % filters.length];
    if (effect) {
        el.classList.add(effect);
    }
}

function setDefaultFiler(el)
{
    el.className = '';
    var effect = filters[11];
    el.classList.add(effect);
}



