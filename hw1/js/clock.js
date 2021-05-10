let person = prompt("Please enter your name",);
if (person != null) {
    document.getElementById("myName").innerHTML = person;
}

function showtime() {
    let now = new Date();
    let currentHour = now.getHours();
    if (currentHour<10) {
        currentHour = "0" + currentHour;
    }
    let currentMinute = now.getMinutes();
    if (currentMinute<10) {
        currentMinute = "0" + currentMinute;
    }
    let currentSecond = now.getSeconds();
    if (currentSecond<10) {
        currentSecond = "0" + currentSecond;
    }
    let day;

    switch (now.getDay()) {
        case 0:
          day = "Pazar";
          break;
        case 1:
          day = "Pazartesi";
          break;
        case 2:
           day = "Salo";
          break;
        case 3:
          day = "Çarşamba";
          break;
        case 4:
          day = "Perşembe";
          break;
        case 5:
          day = "Cuma";
          break;
        case 6:
          day = "Cumartesi";
      }

    let time = currentHour + ":" + currentMinute + ":" + currentSecond + day;
    document.getElementById("myClock").innerHTML = time;
}

setInterval(showtime, 1000);




