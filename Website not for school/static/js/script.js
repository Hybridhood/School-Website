
document.addEventListener('DOMContentLoaded', (event) => {
    const inputBox = document.getElementById('search');
    const spaces = document.getElementById('spaces');


    inputBox.addEventListener('mouseenter', function() {
        const spaces = document.getElementById('spaces');
        spaces.style.display = 'flex'; 
    });
    spaces.addEventListener('mouseenter', function() {
        
        spaces.style.display = 'flex'; 
    });

    spaces.addEventListener('mouseleave', function() {
        
        spaces.style.display = 'none'; 
    });
 
    inputBox.addEventListener('mouseleave', function() {
        const spaces = document.getElementById('spaces');
        spaces.style.display = 'none'; 
    });
});

function wow(){
    alert("Yikes")



}