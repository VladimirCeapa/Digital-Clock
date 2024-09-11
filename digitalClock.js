var day = document.querySelector('#day');
var hourDom = document.getElementById('hour');
var minuteDom = document.querySelector('#minute');
var ampmDom = document.getElementById('ampm');
var numberOfDay = document.getElementById('numberOfDay');
var monthDom = document.getElementById('month');
var yearDom = document.getElementById('year');


function calculateTime() {
    //console.log('The page has loaded');
    var monthName = ['January','February','March',
                      'April ',' May', 'June',
                      'July', 'August','September',
                      'October','November','December',
                    ]
    var DayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    var date = new Date(); //get Date
    var dayNumber = date.getDay(); //  Day of week

    day.textContent = DayNames[dayNumber];

    var hour = date.getHours(); //  hours
    var ampm = hour >= 12 ? 'PM' : 'AM';
    ampmDom.textContent = ampm;
    hour = hour % 12;
    hour = hour ? hour : 12;
    hour = hour < 10 ? 0`${hour} ` : hour;
    hourDom.textContent = hour;

    var minute = date.getMinutes();//Minutes
    minute = minute < 10 ? "0" + minute : minute;
    minuteDom.textContent = minute;
    var month = date.getMonth(); //Month
    var dayNum = date.getDate();  //Number of date
    if (dayNum < 10) {
        numberOfDay.textContent = '0' + dayNum;
    } else {
        numberOfDay.textContent = dayNum;
    }
    monthDom.textContent = monthName[month];
    yearDom.textContent=date.getFullYear(); ///Full Year
    setTimeout(calculateTime, 200);  //timer 200 nano-sec update

}

window.addEventListener('load', calculateTime);