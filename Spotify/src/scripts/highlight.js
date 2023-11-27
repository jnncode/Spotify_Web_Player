// Element click behavior(s)
const homeText = document.getElementById('home-text');
const searchText = document.getElementById('search-text');

searchText.addEventListener('click', function() {
    homeText.style.color = '#c8c8c8';
    searchText.style.color = '#FFFFFF';
});

homeText.addEventListener('click', function() {
    searchText.style.color = '#c8c8c8';
    homeText.style.color = "#FFFFFF";
});
