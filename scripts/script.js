let DOM = false;
let MenuShown = false;
document.addEventListener('DOMContentLoaded', () => {
    DOM = true;
})

function showMenu() {
    if (!DOM) {
        console.error('DOMContentLoaded = False');
        return;
    }
    const menu = document.querySelector('.drop-down');
    if (MenuShown) {
        menu.style.visibility = "hidden";
        MenuShown = false;
    }
    else {
        menu.style.visibility = "visible";
        MenuShown = true;
    }
    return;
}

// Locate User to loc(location) as requested 
function locateMe(loc="home",folder="../") {
    const locs = ["news","players","market","results","fixtures","home","about","squad"];
    if (locs.includes(loc.toLowerCase()) == false) return;
    if (loc.toLowerCase() == 'home') {
        window.location.href = `${folder}index.html`;
        return;
    }
    window.location.href = `${folder}${loc.toLowerCase()}/index.html`;
}

function href(to_) {
    if(!to_) return;
    window.location.href = to_;
}