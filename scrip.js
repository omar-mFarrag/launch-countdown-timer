const  countDown = () => {
    let theDate = new Date("1/25/2024").getTime() // MM/DD/YYY formating
    let now = new Date().getTime();
    // to get the diffrence between tow dates
    let diff = theDate - now;

    // to get time in days,hour,minutes and seconds
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    // to get time will be shouwn in webPage
    let timeDays = Math.floor(diff / days);
    let timeHours = Math.floor( (diff % days) / hours);
    let timeMinutes = Math.floor( (diff % hours) / minutes)
    let timeSeconds = Math.floor( (diff % minutes) / seconds)

    // to display time in web page
    // SECONDS
    document.getElementById('flip-sec').style.animation = 'flip infinite 1000ms';
    document.getElementById('main-sec').innerHTML = `${timeSeconds - 1}`;
    document.getElementById('back-up-sec').innerHTML = `${timeSeconds - 1}`;
    if(timeSeconds === 0){
        document.getElementById('main-sec').innerHTML = `${59}`;
        document.getElementById('back-up-sec').innerHTML = `${59}`;
    }
    document.getElementById('front-up-sec').innerHTML = `${timeSeconds}`;
    document.getElementById('low-sec').innerHTML = `${timeSeconds}`;
    if(timeSeconds < 11 && timeSeconds > 0){
        document.getElementById('main-sec').innerHTML = `0${timeSeconds - 1}`;
        document.getElementById('back-up-sec').innerHTML = `0${timeSeconds - 1}`;
    }
    if (timeSeconds < 10) {
        document.getElementById('front-up-sec').innerHTML = `0${timeSeconds}`;
        document.getElementById('low-sec').innerHTML = `0${timeSeconds}`;
    }

    // MINUTES
    if(timeSeconds === 0 ){
        document.getElementById('flip-min').style.animation = 'flip 1000ms';
    }else{
        document.getElementById('flip-min').style.animation = '';
    }
    document.getElementById('main-min').innerHTML = `${timeMinutes - 1}`;
    document.getElementById('back-up-min').innerHTML = `${timeMinutes - 1}`;
    if(timeMinutes === 0){
        document.getElementById('main-min').innerHTML = `${59}`;
        document.getElementById('back-up-min').innerHTML = `${59}`;
    }
    document.getElementById('front-up-min').innerHTML = `${timeMinutes}`;
    document.getElementById('low-min').innerHTML = `${timeMinutes}`;
    if(timeMinutes < 11 &&timeMinutes > 0){
        document.getElementById('main-min').innerHTML = `0${timeMinutes - 1}`;
        document.getElementById('back-up-min').innerHTML = `0${timeMinutes - 1}`;
    }
    if (timeMinutes < 10) {
        document.getElementById('front-up-min').innerHTML = `0${timeMinutes}`;
        document.getElementById('low-min').innerHTML = `0${timeMinutes}`;
    }

    // HOURS
    if(timeSeconds === 0 && timeMinutes === 0){
        document.getElementById('flip-hour').style.animation = 'flip 1000ms';
    }else{
        document.getElementById('flip-hour').style.animation = '';
    }
    document.getElementById('main-hour').innerHTML = `${timeHours - 1}`;
    document.getElementById('back-up-hour').innerHTML = `${timeHours - 1}`;
    if(timeHours === 0){
        document.getElementById('main-hour').innerHTML = `${23}`;
        document.getElementById('back-up-hour').innerHTML = `${23}`;
    }
    document.getElementById('front-up-hour').innerHTML = `${timeHours}`;
    document.getElementById('low-hour').innerHTML = `${timeHours}`;
    if(timeHours < 11 &&timeHours > 0){
        document.getElementById('main-hour').innerHTML = `0${timeHours - 1}`;
        document.getElementById('back-up-hour').innerHTML = `0${timeHours - 1}`;
    }
    if (timeHours < 10) {
        document.getElementById('front-up-hour').innerHTML = `0${timeHours}`;
        document.getElementById('low-hour').innerHTML = `0${timeHours}`;
    }

    // DAYS
    if(timeSeconds === 0 && timeMinutes === 0 && timeHours === 0){
        document.getElementById('flip-day').style.animation = 'flip 1000ms';
    }else{
        document.getElementById('flip-day').style.animation = '';
    }
    document.getElementById('main-day').innerHTML = `${timeDays - 1}`;
    document.getElementById('back-up-day').innerHTML = `${timeDays - 1}`;
    if(timeDays === 0){
        document.getElementById('main-day').innerHTML = `00`;
        document.getElementById('back-up-day').innerHTML = `00`;
    }
    document.getElementById('front-up-day').innerHTML = `${timeDays}`;
    document.getElementById('low-day').innerHTML = `${timeDays}`;
    if(timeDays < 11 &&timeDays > 0){
        document.getElementById('main-day').innerHTML = `0${timeDays - 1}`;
        document.getElementById('back-up-day').innerHTML = `0${timeDays - 1}`;
    }
    if (timeDays < 10) {
        document.getElementById('front-up-day').innerHTML = `0${timeDays}`;
        document.getElementById('low-day').innerHTML = `0${timeDays}`;
    }
}
setInterval( countDown , 1000);