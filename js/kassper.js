let btn = document.querySelector('button.btn');

window.onscroll = function () {
    if (window.scrollY >= 300) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none'
    }
};
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    })
}

