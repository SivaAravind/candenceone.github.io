const time = () => {
    let displayTime = new Date().toISOString();

    let time = displayTime.split('T');

    let date = time[0];
    let hms = time[1].split('.')[0];


    document.getElementById('currentTime').innerText = hms;
}

setInterval(() => {
    time();
}, 1000);