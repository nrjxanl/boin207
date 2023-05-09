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