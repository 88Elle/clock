let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minuteNumber = document.querySelector('.minutes'),
    hourNumber = document.querySelector('.hours');

function clock() {
    let time = new Date();
    let minutes = time.getMinutes() * 6;
    let seconds = time.getSeconds() * 6; 
    let hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

    setTimeout(() => clock(), 1000);

}
clock();


// Рекурсия - это когда функция вызывает саму себя

// let i = 0;

// function rek() {
//    console.log(i)
//    if(i < 100) {
//        i++
//        setTimeout(() => rek(), 1000);
//    }
// }
// rek()



let link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');


for(let i = 0; i < link.length;i++) {
    link[i].addEventListener('click', function(event){
        event.preventDefault();
        for(let x = 0; x < link.length;x++){
            link[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        link[i].classList.add('active');
        tabs[i].classList.add('active');
    })
}

// Домашнее задание ' Секундомер ' 

let secondsTimer = document.querySelector('.stopwatch__seconds'),
    minutesTimer = document.querySelector('.stopwatch__minutes'),
    hoursTimer = document.querySelector('.stopwatch__hours'),
    buttonTimer = document.querySelector('.stopwatch__btn'),
    spanTimer = document.querySelector('.tabsLink__span');
let timer;
    

buttonTimer.addEventListener('click', function(){
    if( buttonTimer.innerHTML == 'start'){
        buttonTimer.innerHTML = 'stop';
        spanTimer.classList.add('active');
        setTimeout(() => startTimer(), 1000);
    }else if (buttonTimer.innerHTML == 'stop'){
             buttonTimer.innerHTML = 'clear';  
             spanTimer.classList.remove('active');
             spanTimer.classList.add('active_clear');
             clearTimeout(timer);
    }else if(buttonTimer.innerHTML == 'clear'){
             buttonTimer.innerHTML = 'start'
             spanTimer.classList.remove('active_clear');
        secondsTimer.innerHTML = 0;
        minutesTimer.innerHTML = 0;
        hoursTimer.innerHTML = 0;
    }else if (buttonTimer.innerHTML == 'start'){
              spanTimer.classList.add('active')
    }

})

function startTimer(){
        secondsTimer.innerHTML++
    if ( secondsTimer.innerHTML > 59){
        secondsTimer.innerHTML = 0;
        minutesTimer.innerHTML ++;
    }else if(minutesTimer.innerHTML > 59){
        minutesTimer.innerHTML = 0;
        hoursTimer.innerHTML++;
    }else if(hoursTimer.innerHTML == 24){
        hoursTimer.innerHTML = 0;
        startTimer()
    }
    timer = setTimeout(() => startTimer(), 1000);
}
  










