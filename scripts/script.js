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


document.querySelectorAll('.clientForm').forEach( (e) => {
    document.getElementById('submit').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        if (name.trim() === '') {
            document.getElementById('name').style.border = '2px solid red'
            return;
        }
        if (phone.trim() === '') {
            document.getElementById('phone').style.border = '2px solid red'
            return;
        }
        else {
            const dataToSend = {
                name: name,
                phone: phone
            }
            send(dataToSend)
        };
    })
})

document.getElementById('again').addEventListener('click', function() {
    document.getElementById('name').disabled = false;
    document.getElementById('phone').disabled = false;
    document.getElementById('hide-after-success').style.display = 'block';
    document.getElementById('success').style.display = 'none';
})

function showSuccess(){
    document.getElementById('name').disabled = true;
    document.getElementById('phone').disabled = true;
    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    
    document.getElementById('hide-after-success').style.display = 'none';
    document.getElementById('success').style.display = 'block';
}

function send(dataToSend){
    const mailPath = '../sender.php'
            let request = new XMLHttpRequest();
            var params = JSON.stringify(dataToSend);

            request.open('POST', mailPath, true)
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(params);
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    showSuccess();
                }
            }
}