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

if (dotw === 1) {
    document.getElementById('table1').style.display = 'block';
}
if (dotw === 2) {
    document.getElementById('table2').style.display = 'block';
}
if (dotw === 3) {
    document.getElementById('table3').style.display = 'block';
}
if (dotw === 4) {
    document.getElementById('table4').style.display = 'block';
}
if (dotw === 5) {
    document.getElementById('table5').style.display = 'block';
}

window.onload = function() {
    document.getElementById('today').innerHTML = month + '월 ' + day + '일 ' + dotwKR + '요일';
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
function apr12() {
    document.getElementById('apr12').scrollIntoView({behavior: 'smooth'});
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