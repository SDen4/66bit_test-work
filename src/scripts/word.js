const wrapper = document.querySelector('.word__wrapper');

window.addEventListener("keydown", function (e) {

    //disable pushing any keys excluding letter
    if(!e.key.match(/[A-Za-zА-Яа-яёЁ]/) || 
        e.key.match(/F[1-9]/g) || 
        e.key.match(/[:cntrl:]/) || 
        e.key.match(/[:blank:]/)) 
    { return };

    //creation new element for each letter
    let elem = document.createElement('div');
    elem.className = "word__letter";
    elem.textContent = e.key;
    wrapper.append(elem);
});