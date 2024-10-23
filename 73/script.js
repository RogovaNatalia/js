'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecord => {
    console.log(MutationRecord);
});

observer.observe(box, {
    childList: true
});

observer.disconnect();
