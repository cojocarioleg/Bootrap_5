window.addEventListener('scroll', function () {
    document.getElementById('header-nav').classList.toggle('header-nav-scroll', window.scrollY > 135);
});