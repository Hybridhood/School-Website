
document.addEventListener('DOMContentLoaded', (event) => {
    const inputBox = document.getElementById('csearch');


    inputBox.addEventListener('focus', function() {
        const spaces = document.getElementById('spaces');
        spaces.style.display = 'flex'; 
    });

 
    inputBox.addEventListener('blur', function() {
        const spaces = document.getElementById('spaces');
        spaces.style.display = 'none'; 
    });
});
