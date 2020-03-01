CountDownTimer('3/2/2020 9:45 AM', 'count_아에르');
CountDownTimer('3/2/2020 7:00 AM', 'count_상공양행');
CountDownTimer('3/2/2020 11:00 AM', 'count_국대마스크');
CountDownTimer('3/2/2020 09:00 AM', 'count_금아스토어');
CountDownTimer('3/2/2020 10:00 AM', 'count_welkeeps1');
CountDownTimer('3/2/2020 10:00 AM', 'count_welkeeps2');
CountDownTimer('3/2/2020 10:00 AM', 'count_welkeeps3');
CountDownTimer('3/2/2020 10:00 AM', 'count_welkeeps4');

function CountDownTimer(dt, id) {
    var end = new Date(dt);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;

        // 시간 종료 시 뜨는 문구
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById(id).innerHTML = '카운트다운이 끝났습니다. 곧 오픈합니다!';
            return;
        }

        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + '일 ';
        document.getElementById(id).innerHTML += hours + '시간 ';
        document.getElementById(id).innerHTML += minutes + '분 ';
        document.getElementById(id).innerHTML += seconds + '초';
    }

    timer = setInterval(showRemaining, 1000);
}