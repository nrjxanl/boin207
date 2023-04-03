



// vh값 정의
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})


// 시간표 불러오기
date = new Date();
month = date.getMonth() + 1;
day = date.getDate();
dotw = date.getDay();

week = ['일', '월', '화', '수', '목', '금', '토'];
dotwKR = week[date.getDay()];

tomorrow = 1;
date.setDate(date.getDate() + tomorrow);
monthTomorrow = ((date.getMonth() + 1));
dayTomorrow = (date.getDate());
dotwKRTomorrow = (week[date.getDay()]);

if (dotw = 0) {
    s1 = '-';
    t1 = '';
    s2 = '-';
    t2 = '';
    s3 = '-';
    t3 = '';
    s4 = '-';
    t4 = '';
    s5 = '-';
    t5 = '';
    s6 = '-';
    t6 = '';
    s7 = '-';
    t7 = '';
    s1t = '기하';
    t1t = '김보성';
    s2t = '미술';
    t2t = '권아인';
    s3t = '물리학 I';
    t3t = '장종목';
    s4t = '진로';
    t4t = '백기곤';
    s5t = '사회문제탐구';
    t5t = '양승범';
    s6t = '문학';
    t6t = '류신형';
    s7t = '수학 I';
    t7t = '조재희';
} else if (dotw = 1) {
    s1 = '기하';
    t1 = '김보성';
    s2 = '미술';
    t2 = '권아인';
    s3 = '물리학 I';
    t3 = '장종목';
    s4 = '진로';
    t4 = '백기곤';
    s5 = '사회문제탐구';
    t5 = '양승범';
    s6 = '문학';
    t6 = '류신형';
    s7 = '수학 I';
    t7 = '조재희';
    s1t = '문학';
    t1t = '이하은';
    s2t = '화학 I';
    t2t = '이은주';
    s3t = '수학 I';
    t3t = '조재희';
    s4t = '영어 I';
    t4t = '백기곤';
    s5t = '언어와 매체';
    t5t = '강이욱';
    s6t = '사회문제탐구';
    t6t = '서정민';
    s7t = '지구과학 I';
    t7t = '전아림';
} else if (dotw = 2) {
    s1 = '문학';
    t1 = '이하은';
    s2 = '화학 I';
    t2 = '이은주';
    s3 = '수학 I';
    t3 = '조재희';
    s4 = '영어 I';
    t4 = '백기곤';
    s5 = '언어와 매체';
    t5 = '강이욱';
    s6 = '사회문제탐구';
    t6 = '서정민';
    s7 = '지구과학 I';
    t7 = '전아림';
    s1t = '물리학 I';
    t1t = '장종목';
    s2t = '화학 I';
    t2t = '김현화';
    s3t = '사회문제탐구';
    t3t = '서정민';
    s4t = '수학 I';
    t4t = '조재희';
    s5t = '스포츠';
    t5t = '이다영';
    s6t = '기하';
    t6t = '김보성';
    s7t = '일본어 I';
    t7t = '양혜리';
} else if (dotw = 3) {
    s1 = '물리학 I';
    t1 = '장종목';
    s2 = '화학 I';
    t2 = '김현화';
    s3 = '사회문제탐구';
    t3 = '서정민';
    s4 = '수학 I';
    t4 = '조재희';
    s5 = '스포츠';
    t5 = '이다영';
    s6 = '기하';
    t6 = '김보성';
    s7 = '일본어 I';
    t7 = '양혜리';
    s1t = '일본어 I';
    t1t = '양혜리';
    s2t = '물리학 I';
    t2t = '장종목';
    s3t = '지구과학 I';
    t3t = '전아림';
    s4t = '영어 I';
    t4t = '백기곤';
    s5t = '화학 I';
    t5t = '이은주';
    s6t = '언어와 매체';
    t6t = '강이욱';
    s7t = '문학';
    t7t = '이하은';
} else if (dotw = 4) {
    s1 = '일본어 I';
    t1 = '양혜리';
    s2 = '물리학 I';
    t2 = '장종목';
    s3 = '지구과학 I';
    t3 = '전아림';
    s4 = '영어 I';
    t4 = '백기곤';
    s5 = '화학 I';
    t5 = '이은주';
    s6 = '언어와 매체';
    t6 = '강이욱';
    s7 = '문학';
    t7 = '이하은';
    s1t = '지구과학 I';
    t1t = '김태식';
    s2t = '영어 I';
    t2t = '백기곤';
    s3t = '스포츠';
    t3t = '이다영';
    s4t = '수학 I';
    t4t = '조재희';
    s5t = '창체';
    t5t = '';
    s6t = '창체';
    t6t = '';
    s7t = '';
    t7t = '-';
} else if (dotw = 5) {
    s1 = '지구과학 I';
    t1 = '김태식';
    s2 = '영어 I';
    t2 = '백기곤';
    s3 = '스포츠';
    t3 = '이다영';
    s4 = '수학 I';
    t4 = '조재희';
    s5 = '창체';
    t5 = '';
    s6 = '창체';
    t6 = '';
    s7 = '';
    t7 = '-';
    s1t = '-';
    t1t = '';
    s2t = '-';
    t2t = '';
    s3t = '-';
    t3t = '';
    s4t = '-';
    t4t = '';
    s5t = '-';
    t5t = '';
    s6t = '-';
    t6t = '';
    s7t = '-';
    t7t = '';
} else {
    s1 = '-';
    t1 = '';
    s2 = '-';
    t2 = '';
    s3 = '-';
    t3 = '';
    s4 = '-';
    t4 = '';
    s5 = '-';
    t5 = '';
    s6 = '-';
    t6 = '';
    s7 = '-';
    t7 = '';
    s1t = '-';
    t1t = '';
    s2t = '-';
    t2t = '';
    s3t = '-';
    t3t = '';
    s4t = '-';
    t4t = '';
    s5t = '-';
    t5t = '';
    s6t = '-';
    t6t = '';
    s7t = '-';
    t7t = '';
}

window.onload = function() {
    document.getElementById('today').innerHTML = month + '월 ' + day + '일 ' + dotwKR + '요일',
    document.getElementById('tomorrow').innerHTML = monthTomorrow + '월 ' + dayTomorrow + '일 ' + dotwKRTomorrow + '요일',
    document.getElementById('s1').innerHTML = s1,
    document.getElementById('t1').innerHTML = t1,
    document.getElementById('s2').innerHTML = s2,
    document.getElementById('t2').innerHTML = t2,
    document.getElementById('s3').innerHTML = s3,
    document.getElementById('t3').innerHTML = t3,
    document.getElementById('s4').innerHTML = s4,
    document.getElementById('t4').innerHTML = t4,
    document.getElementById('s5').innerHTML = s5,
    document.getElementById('t5').innerHTML = t5,
    document.getElementById('s6').innerHTML = s6,
    document.getElementById('t6').innerHTML = t6,
    document.getElementById('s7').innerHTML = s7,
    document.getElementById('t7').innerHTML = t7,
    document.getElementById('s1t').innerHTML = s1t,
    document.getElementById('t1t').innerHTML = t1t,
    document.getElementById('s2t').innerHTML = s2t,
    document.getElementById('t2t').innerHTML = t2t,
    document.getElementById('s3t').innerHTML = s3t,
    document.getElementById('t3t').innerHTML = t3t,
    document.getElementById('s4t').innerHTML = s4t,
    document.getElementById('t4t').innerHTML = t4t,
    document.getElementById('s5t').innerHTML = s5t,
    document.getElementById('t5t').innerHTML = t5t,
    document.getElementById('s6t').innerHTML = s6t,
    document.getElementById('t6t').innerHTML = t6t,
    document.getElementById('s7t').innerHTML = s7t,
    document.getElementById('t7t').innerHTML = t7t;
}

window.addEventListener('load', function() {
    document.getElementById('apr5').scrollIntoView({behavior: "smooth"});
});


// 달력
function march() {
    document.getElementById('mar').scrollIntoView();
}
function april() {
    document.getElementById('apr').scrollIntoView();
}
function may() {
    document.getElementById('may').scrollIntoView();
}
function june() {
    document.getElementById('jun').scrollIntoView();
}
function july() {
    document.getElementById('jul').scrollIntoView();
}
function august() {
    document.getElementById('aug').scrollIntoView();
}
function september() {
    document.getElementById('sep').scrollIntoView();
}
function october() {
    document.getElementById('oct').scrollIntoView();
}
function november() {
    document.getElementById('nov').scrollIntoView();
}
function december() {
    document.getElementById('dec').scrollIntoView();
}
function january() {
    document.getElementById('jan').scrollIntoView();
}
function february() {
    document.getElementById('feb').scrollIntoView();
}



// 일정으로 이동
function mar3() {
    document.getElementById('mar3').scrollIntoView({behavior: 'smooth'});
}
function mar6() {
    document.getElementById('mar6').scrollIntoView({behavior: 'smooth'});
}
function mar10() {
    document.getElementById('mar10').scrollIntoView({behavior: 'smooth'});
}
function mar13() {
    document.getElementById('mar13').scrollIntoView({behavior: 'smooth'});
}
function mar14() {
    document.getElementById('mar14').scrollIntoView({behavior: 'smooth'});
}
function mar16() {
    document.getElementById('mar16').scrollIntoView({behavior: 'smooth'});
}
function mar20() {
    document.getElementById('mar20').scrollIntoView({behavior: 'smooth'});
}
function mar23() {
    document.getElementById('mar23').scrollIntoView({behavior: 'smooth'});
}
function mar27() {
    document.getElementById('mar27').scrollIntoView({behavior: 'smooth'});
}
function mar31() {
    document.getElementById('mar31').scrollIntoView({behavior: 'smooth'});
}
function apr3() {
    document.getElementById('apr3').scrollIntoView({behavior: 'smooth'});
}
function apr5() {
    document.getElementById('apr5').scrollIntoView({behavior: 'smooth'});
}
function apr7() {
    document.getElementById('apr7').scrollIntoView({behavior: 'smooth'});
}
function apr10() {
    document.getElementById('apr10').scrollIntoView({behavior: 'smooth'});
}
function apr13() {
    document.getElementById('apr13').scrollIntoView({behavior: 'smooth'});
}
function apr17() {
    document.getElementById('apr17').scrollIntoView({behavior: 'smooth'});
}
function apr28() {
    document.getElementById('apr28').scrollIntoView({behavior: 'smooth'});
}
function may1() {
    document.getElementById('may1').scrollIntoView({behavior: 'smooth'});
}
function may2() {
    document.getElementById('may2').scrollIntoView({behavior: 'smooth'});
}
function may3() {
    document.getElementById('may3').scrollIntoView({behavior: 'smooth'});
}
function jul3() {
    document.getElementById('jul3').scrollIntoView({behavior: 'smooth'});
}
function jul4() {
    document.getElementById('jul4').scrollIntoView({behavior: 'smooth'});
}
function jul5() {
    document.getElementById('jul5').scrollIntoView({behavior: 'smooth'});
}
function jul6() {
    document.getElementById('jul6').scrollIntoView({behavior: 'smooth'});
}
function jul7() {
    document.getElementById('jul7').scrollIntoView({behavior: 'smooth'});
}
function sep6() {
    document.getElementById('sep6').scrollIntoView({behavior: 'smooth'});
}
function oct10() {
    document.getElementById('oct10').scrollIntoView({behavior: 'smooth'});
}
function oct11() {
    document.getElementById('oct11').scrollIntoView({behavior: 'smooth'});
}
function oct12() {
    document.getElementById('oct12').scrollIntoView({behavior: 'smooth'});
}
function oct13() {
    document.getElementById('oct13').scrollIntoView({behavior: 'smooth'});
}
function nov21() {
    document.getElementById('nov21').scrollIntoView({behavior: 'smooth'});
}
function dec7() {
    document.getElementById('dec7').scrollIntoView({behavior: 'smooth'});
}
function dec8() {
    document.getElementById('dec8').scrollIntoView({behavior: 'smooth'});
}
function dec11() {
    document.getElementById('dec11').scrollIntoView({behavior: 'smooth'});
}
function dec12() {
    document.getElementById('dec12').scrollIntoView({behavior: 'smooth'});
}
function dec13() {
    document.getElementById('dec13').scrollIntoView({behavior: 'smooth'});
}