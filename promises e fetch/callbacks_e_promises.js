const dosomething = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});

const dootherthing = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('second data');
    }, 1000);
});

dosomething
    .then(data => {
        console.log(data); return dootherthing
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error)); 