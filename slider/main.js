const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

console.log(tabs)
console.log(panes)

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

console.log(tabActive)
console.log(line)

// let i = 0;
function moveNextTab(i) {
    if(i!==3 && tabs[i].classList.contains('active')) {
        tabs[i].classList.remove('active');
        panes[i].classList.remove('active');
        i++;
        tabs[i].classList.add('active');
        panes[i].classList.add('active');
        line.style.left = tabs[i].offsetLeft + 'px';
        line.style.width = tabs[i].offsetWidth + 'px';
    } else {
        tabs[i].classList.remove('active');
        panes[i].classList.remove('active');
        tabs[0].classList.add('active');
        panes[0].classList.add('active');
        line.style.left = tabs[0].offsetLeft + 'px';
        line.style.width = tabs[0].offsetWidth + 'px';
    }
}

for(let i=0; i<4; i++){
    setTimeout(moveNextTab, 1000+i*1000, i);
}

setInterval(() => {
    for(let i=0; i<4; i++){
        setTimeout(moveNextTab, 1000+i*1000, i);
    }
},4000);
