window.addEventListener("load",Countdown);

function Countdown() {
    let d = new Date();
    let year = d.getFullYear();
    var day = d.getDate();
    let fullday = 0;
    let colectday = 0;
    let months;
    let hour = d.getHours();
    let fullhour = 23;
    let minute = d.getMinutes();
    let fullminute = 59;
    let second = d.getSeconds();
    let fullsecond = 59;
    let rotate = 12.20338983050847 * second;

    let second_bar = second*(100/fullsecond);
    let minute_bar = minute*(100/fullminute);
    let hour_bar = hour*(100/fullhour);

    if(year%4) {
        months = [31,28,31,30,31,30,31,31,30,31,30,31];
    }
    else {
        months = [31,29,31,30,31,30,31,31,30,31,30,31];
    }

    for(let i=0;i < d.getMonth();i++) {
        colectday += months[i];
    }

    colectday += day;

    for(let i=0;i < months.length;i++) {
        fullday += months[i];
    }

    day = fullday - colectday;

    let day_bar = colectday*(100/fullday);

    if (day < 10) {
        day = "00"+day;
    } else if (day < 100) {
        day = "0"+day;
    } else {
        day
    }

    hour = fullhour - hour;
    hour = hour < 10 ? "0"+hour : hour;

    minute = fullminute - minute;
    minute = minute < 10 ? "0"+minute : minute;

    second = fullsecond - second;
    second = second < 10 ? "0"+second : second;

    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

    document.getElementById("second-bar").style.width = second_bar+"%";
    document.getElementById("minute-bar").style.width = minute_bar+"%";
    document.getElementById("hour-bar").style.width = hour_bar+"%";
    document.getElementById("day-bar").style.width = day_bar+"%";
    document.getElementById("img").style.transform = `rotate(${rotate}deg)`;
    
    let reload = setInterval(Countdown,1000);
    
    if(day==00 && hour==00 && minute==00 && second==00 ) {
        clearInterval(reload); 
    } else {
        reload;
    }
}
