// Element click behavior(s)
const homeText = document.getElementById('home-text');
const searchText = document.getElementById('search-text');

homeText.addEventListener('click', function() {
    window.location.href = '../../index.html';
});
searchText.addEventListener('click', function() {
    window.location.href = 'src/pages/search.html';
});
