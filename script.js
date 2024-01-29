const $ = (selector) => {
    return document.querySelector(selector);
}

showDot = true;
function update(){
    
    const hour = document.getElementById('hour');
    const dot = document.getElementById('dot');
    const min = document.getElementById('min');
    const week = document.getElementById('week');

    showDot = !showDot;
    const now =  new Date();

    if(showDot){        
        dot.classList.add("invsible");
    } else {
        dot.classList.remove('invsible');
    }

    hour.textContent = String(now.getHours());
    min.textContent = String(now.getMinutes());

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