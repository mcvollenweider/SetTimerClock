const countdown = () => {
    const countDate = new Date("June 23, 2022 00:00:00").getTime();
    //console.log(countDate);
    const now = new Date().getTime();
    const gap = countDate - now;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    //console.log(textDay);
    const textHour = Math.floor((gap % day)/hour);
    //console.log(textHour);
    const textMinute = Math.floor((gap % hour)/minute);
    //console.log(textMinute);
    const textSecond = Math.floor((gap % minute)/second);
    //console.log(textSecond);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
};
//countdown();
setInterval(countdown, 1000);


