window.addEventListener('scroll', function() {
    var header = document.querySelector('.fixed');

    if (window.scrollY > 1500) {
        header.style.visibility = 'visible';
    } else {
        header.style.visibility = 'hidden';
    }
});


function scrollToFilters() {
    const filtersElement = document.getElementById('prices');
    if (filtersElement) {
        filtersElement.scrollIntoView({ behavior: 'smooth' });
    }
}

let ids = ['general', 'repairs', 'windows', 'maintenance', 'laundery', 'kitchen', 'rooms', 'toilet'];

function setDisplay(value){
    for (let i = 0; i < ids.length; i++) {
        var currentDivs = document.querySelectorAll(`.${ids[i]}`);
        currentDivs.forEach(function(div) {
            div.style.cssText = value;
        });
    };
}

function checkRadio(elementId) {
    var radio = document.getElementById(elementId);

    if (elementId === 'all') {
        setDisplay('');
    } else {
        setDisplay('display:none');
    
        if (radio) {
            radio.checked = true;
            var currentDivs = document.querySelectorAll(`.${elementId}`);
            currentDivs.forEach(function(div) {
                div.style.cssText = '';
            });
        };
    }
    scrollToFilters();
}