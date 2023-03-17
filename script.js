window.onload = function() {
    setTimeout (function () {
    scrollTo(0,0);
    }, 100);
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

date = new Date();
month = date.getMonth() + 1;
day = date.getDate();
dotw = date.getDay();

tomorrow = 1;
date.setDate(date.getDate() + tomorrow );

monthTomorrow = ((date.getMonth() + 1 ));
dayTomorrow = (date.getDate());

window.onload = function() {
    document.getElementById("today").innerHTML = month + "월 " + day + "일";
    document.getElementById("tomorrow").innerHTML = monthTomorrow + "월 " + dayTomorrow + "일";
}


function march() {
    document.getElementById("mar").scrollIntoView();
}
function april() {
    document.getElementById("apr").scrollIntoView();
}
function may() {
    document.getElementById("may").scrollIntoView();
}
function june() {
    document.getElementById("jun").scrollIntoView();
}
function july() {
    document.getElementById("jul").scrollIntoView();
}
function august() {
    document.getElementById("aug").scrollIntoView();
}
function september() {
    document.getElementById("sep").scrollIntoView();
}
function october() {
    document.getElementById("oct").scrollIntoView();
}
function november() {
    document.getElementById("nov").scrollIntoView();
}
function december() {
    document.getElementById("dec").scrollIntoView();
}
function january() {
    document.getElementById("jan").scrollIntoView();
}
function february() {
    document.getElementById("feb").scrollIntoView();
}


function mar3() {
    document.getElementById("mar3").scrollIntoView({behavior: "smooth"});
}
function mar6() {
    document.getElementById("mar6").scrollIntoView({behavior: "smooth"});
}
function mar10() {
    document.getElementById("mar10").scrollIntoView({behavior: "smooth"});
}
function mar13() {
    document.getElementById("mar13").scrollIntoView({behavior: "smooth"});
}
function mar14() {
    document.getElementById("mar14").scrollIntoView({behavior: "smooth"});
}
function mar16() {
    document.getElementById("mar16").scrollIntoView({behavior: "smooth"});
}
function mar23() {
    document.getElementById("mar23").scrollIntoView({behavior: "smooth"});
}
function apr28() {
    document.getElementById("apr28").scrollIntoView({behavior: "smooth"});
}
function may1() {
    document.getElementById("may1").scrollIntoView({behavior: "smooth"});
}
function may2() {
    document.getElementById("may2").scrollIntoView({behavior: "smooth"});
}
function may3() {
    document.getElementById("may3").scrollIntoView({behavior: "smooth"});
}
function jul3() {
    document.getElementById("jul3").scrollIntoView({behavior: "smooth"});
}
function jul4() {
    document.getElementById("jul4").scrollIntoView({behavior: "smooth"});
}
function jul5() {
    document.getElementById("jul5").scrollIntoView({behavior: "smooth"});
}
function jul6() {
    document.getElementById("jul6").scrollIntoView({behavior: "smooth"});
}
function jul7() {
    document.getElementById("jul7").scrollIntoView({behavior: "smooth"});
}
function sep6() {
    document.getElementById("sep6").scrollIntoView({behavior: "smooth"});
}
function oct10() {
    document.getElementById("oct10").scrollIntoView({behavior: "smooth"});
}
function oct11() {
    document.getElementById("oct11").scrollIntoView({behavior: "smooth"});
}
function oct12() {
    document.getElementById("oct12").scrollIntoView({behavior: "smooth"});
}
function oct13() {
    document.getElementById("oct13").scrollIntoView({behavior: "smooth"});
}
function nov21() {
    document.getElementById("nov21").scrollIntoView({behavior: "smooth"});
}
function dec7() {
    document.getElementById("dec7").scrollIntoView({behavior: "smooth"});
}
function dec8() {
    document.getElementById("dec8").scrollIntoView({behavior: "smooth"});
}
function dec11() {
    document.getElementById("dec11").scrollIntoView({behavior: "smooth"});
}
function dec12() {
    document.getElementById("dec12").scrollIntoView({behavior: "smooth"});
}
function dec13() {
    document.getElementById("dec13").scrollIntoView({behavior: "smooth"});
}