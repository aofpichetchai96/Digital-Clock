const $ = (selector) => {
    return document.querySelector(selector);
}

showDot = true;

function update(){
    const hour = document.getElementById('hour');
    const dot = document.getElementById('dot');
    const dot2 = document.getElementById('dot2');
    const min = document.getElementById('min');
    const second = document.getElementById('second');
    const week = document.getElementById('week');

    showDot = !showDot;
    const now =  new Date();
    
    if(showDot){        
        dot.classList.add("invsible");
        dot2.classList.add("invsible");
    } else {
        dot.classList.remove('invsible');
        dot2.classList.remove('invsible');
    }

    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    second.textContent = String(now.getSeconds()).padStart(2, '0');


    Array
    .from(week.children)
    .forEach(
    (ele) => {
        ele.classList.remove('active');
    }
    );
    week.children[now.getDay()]
    .classList
    .add('active')
};

setInterval(update, 500)