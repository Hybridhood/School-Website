
document.addEventListener('DOMContentLoaded', (event) => {
    var menub = document.getElementById("menub");
    const searchbar = document.getElementById("search");
    menub.addEventListener('click', function() {
         document.body.classList.toggle("menu-open");     
    });

    searchbar.addEventListener('click', function() {
         document.body.classList.toggle("menu-down");     
    });

    



});

