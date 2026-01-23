document.addEventListener('DOMContentLoaded', (event) => {
    const cont = document.getElementById("cont");
    const cch = cont.children
    

    cch[0].addEventListener('mouseenter', function(event) {
        let x = event.clientX, y = event.clientY;
        selected = document.elementFromPoint(x, y);
        if (selected == cont) {return;}
        selected.style.width = "50%";
    });
    cch[0].addEventListener('mouseleave', function() {
        if (selected == cont) {
            return;
        }
        selected.style.width = "25%";
    });
    cch[1].addEventListener('mouseenter', function(event) {
        let x = event.clientX, y = event.clientY;
        selected = document.elementFromPoint(x, y);
        if (selected == cont) {return;}
        selected.style.width = "50%";
    });
    cch[1].addEventListener('mouseleave', function() {
        if (selected == cont) {
            return;
        }
        selected.style.width = "25%";
    });
    cch[2].addEventListener('mouseenter', function(event) {
        let x = event.clientX, y = event.clientY;
        selected = document.elementFromPoint(x, y);
        if (selected == cont) {return;}
        selected.style.width = "50%";
    });
    cch[2].addEventListener('mouseleave', function() {
        if (selected == cont) {
            return;
        }
        selected.style.width = "25%";
    });
    cch[3].addEventListener('mouseenter', function(event) {
        let x = event.clientX, y = event.clientY;
        selected = document.elementFromPoint(x, y);
        if (selected == cont) {return;}
        selected.style.width = "50%";
    });
    cch[3].addEventListener('mouseleave', function() {
        if (selected == cont) {
            return;
        }
        selected.style.width = "25%";
    });
});