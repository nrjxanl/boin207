// 화면 width 변경 시 새로고침
before = $(this).width();

$(window).resize(function () {
    after = $(this).width();
    if (after != before) {
        location.reload();
    };
});

// 이번 달 table 제외 display: none 설정
newDate = new Date();
month = newDate.getMonth();

$("table").css("display", "none");
$("table").eq(month - 2).css("display", "table");

if (month < 3) {
    $("table").eq(month + 10).css("display", "table");
};

// json data array로 가져오기
timetableList = Object.keys(timetable);
scheduleList = Object.values(schedule.date);

// 일별 dateClass 선언
$("table").each(function () {

    month = $(this).attr("class");

    $(this).find("tr:nth-of-type(n+2) > td").each(function () {
        date = $(this).text().replace(/[^0-9]/g, "");
        if (date.length == 1) {
            date = "0" + date;
        };

        dateClass = month + date;

        $(this).attr("class", "d" + dateClass).append("<p></p>");

        // 전월일 경우
        if ($(this).text().match("p")) {
            $(this).removeAttr("class");

            color = ($(this).css("color")).replace(")", "").split(", ");
            color = color[0] + " " + color[1] + " " + color[2] + " / 50%)"

            $(this).text($(this).text().replace(/[^0-9]/g, ""));
            $(this).css("color", color);

            dateClass = ((Number(month + date)) - 100).toString();

            if (dateClass.length < 4) {
                dateClass = "0" + dateClass;
            };

            $(this).attr("class", "d" + dateClass).append("<p></p>");
        };

        // 익월일 경우
        if ($(this).text().match("n")) {
            $(this).removeAttr("class");

            color = ($(this).css("color")).replace(")", "").split(", ");
            color = color[0] + " " + color[1] + " " + color[2] + " / 50%)"

            $(this).text($(this).text().replace(/[^0-9]/g, ""));
            $(this).css("color", color);

            dateClass = ((Number(month + date)) + 100).toString();

            if (dateClass.length < 4) {
                dateClass = "0" + dateClass;
            };

            $(this).attr("class", "d" + dateClass).append("<p></p>");
        };

        // 요일 등 class 지정 제외
        if (dateClass.length < 4) {
            $(this).removeAttr("dateClass");
        };

        // 달력 클릭 시 일정, 시간표 표시
        $(this).click(function () {

            $("#bg").css("display", "block");
            $("#sched").css("display", "block");

            schedDate = $(this).attr("class");
            scheduleList = Object.values(schedule.date);
            n = scheduleList.indexOf(schedDate);

            week = ["일", "월", "화", "수", "목", "금", "토"];
            if (schedDate.substr(1, 2) == "01" || schedDate.substr(1, 2) == "02") {
                date = "2024-" + schedDate.substr(1, 2) + "-" + $(this).attr("class").substr(3, 2);
            } else {
                date = "2023-" + schedDate.substr(1, 2) + "-" + $(this).attr("class").substr(3, 2);
            };

            week = week[new Date(date).getDay()];

            $("#date").text(Number(schedDate.substr(1, 2)) + "월 " + Number(schedDate.substr(3, 2)) + "일 " + week + "요일");
            $("#event").html(schedule.schedule[n]);
            $("#event:empty").text("일정이 없습니다.").css("opacity", ".5");

            week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
            week = week[new Date(date).getDay()];

            if($(this).css("color") == "rgb(255, 0, 0)" || $(this).css("color") == "rgb(0, 0, 255)") {
                index = 0;
            } else {
                index = timetableList.indexOf(week, 0);
            };

            timetable1 = "<span>1교시</span>" + timetable[Object.keys(timetable)[index]][0];
            timetable2 = "<span>2교시</span>" + timetable[Object.keys(timetable)[index]][1];
            timetable3 = "<span>3교시</span>" + timetable[Object.keys(timetable)[index]][2];
            timetable4 = "<span>4교시</span>" + timetable[Object.keys(timetable)[index]][3];
            timetable5 = "<span>5교시</span>" + timetable[Object.keys(timetable)[index]][4];
            timetable6 = "<span>6교시</span>" + timetable[Object.keys(timetable)[index]][5];
            timetable7 = "<span>7교시</span>" + timetable[Object.keys(timetable)[index]][6];

            $("#timetable > p").html(timetable1 + "<br>" + timetable2 + "<br>" + timetable3 + "<br>" + timetable4 + "<br>" + timetable5 + "<br>" + timetable6 + "<br>" + timetable7);
        
            height = ($("#sched").innerHeight());
            screenHeight = $(window).height();

            $("#sched").css("top", (screenHeight - height) / 2);

        });

    });

});

// 빈 공간 클릭 시 팝업 없애기
$("#bg").click(function () {
    $("#bg").css("display", "none");
    $("#sched").css({"display": "none", "top": "0"});

    $("#date").empty();
    $("#event").empty().css("opacity", "1");
    $("#timetable > p").empty();
});

// esc 누를 시 팝업 없애기
$(document).keydown(function (event) {
    if (event.keyCode == 27 || event.which == 27) {
        $("#bg").css("display", "none");
        $("#sched").css({"display": "none", "top": "0"});

        $("#date").empty();
        $("#event").empty().css("opacity", "1");
        $("#timetable > p").empty();
    };
});

// 오늘 날짜 구하기
month = $("table").eq(newDate.getMonth() - 2).attr("class");

date = newDate.getDate().toString();

if (date.length == 1) {
    date = "0" + date;
};

today = "d" + month + date;

$("." + today).css("box-shadow", "0 0 0 2px #c8c8c8 inset");

// 오늘의 일정 불러오기
n = scheduleList.indexOf(today);

week = ["일", "월", "화", "수", "목", "금", "토"];
if (month == "01" || month == "02") {
    todayDate = "2024-" + month + "-" + date;
} else {
    todayDate = "2023-" + month + "-" + date;
};

week = week[new Date(todayDate).getDay()];

$("#todaySchedule").append("<p>" + schedule.schedule[n] + "</p>");
$("#todaySchedule > p:nth-of-type(1)").append("<span>" + Number(today.substr(1, 2)) + "월 " + Number(today.substr(3, 2)) + "일 " + week + "요일</span>");

if($("#todaySchedule > p:nth-of-type(2)").text() == "undefined") {
    $("#todaySchedule > p:nth-of-type(2)").empty().text("오늘 일정이 없습니다.").css("opacity", ".5");
};

week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
week = week[new Date(todayDate).getDay()];

if($(".d" + month + date).css("color") == "rgb(255, 0, 0)" || $(".d" + month + date).css("color") == "rgb(0, 0, 255)") {
    index = 0;
} else if($(".d" + month + date).css("color") == "rgb(0, 0, 0)") {
    index = timetableList.indexOf(week, 0);
};

timetable1 = "<span>1교시</span>" + timetable[Object.keys(timetable)[index]][0];
timetable2 = "<span>2교시</span>" + timetable[Object.keys(timetable)[index]][1];
timetable3 = "<span>3교시</span>" + timetable[Object.keys(timetable)[index]][2];
timetable4 = "<span>4교시</span>" + timetable[Object.keys(timetable)[index]][3];
timetable5 = "<span>5교시</span>" + timetable[Object.keys(timetable)[index]][4];
timetable6 = "<span>6교시</span>" + timetable[Object.keys(timetable)[index]][5];
timetable7 = "<span>7교시</span>" + timetable[Object.keys(timetable)[index]][6];

$("#todaySchedule").append("<div><p>" + timetable1 + "<br>" + timetable2 + "<br>" + timetable3 + "<br>" + timetable4 + "</p><p>" + timetable5 + "<br>" + timetable6 + "<br>" + timetable7 + "</p></div>");

if($("#todaySchedule > div").text().replace(/[0-9|교시|-]/g, "").length == 0) {
    $("#todaySchedule > div > p > span:nth-of-type(2n-1)").css("display", "inline-block")
}

// toToday 누르면 오늘 날짜로 이동
$("#toToday > div").text(Number(today.substr(3, 2)));

$("#toToday > div").click(function () {
    $("table").css("display", "none");
    $("table[class=" + today.substr(1, 2) + "]").css("display", "table");
});

// 전월 달력 불러오기
$(".prevMonth").click(function () {
    prevMonth = (Number($(this).parents("table").attr("class")) + 1).toString();

    if (prevMonth.length < 2) {
        prevMonth = "0" + prevMonth;
    };

    $("table").css("display", "none");
    $(this).parents("table").prev().css("display", "table");

});

// 익월 달력 불러오기
$(".nextMonth").click(function () {
    nextMonth = (Number($(this).parents("table").attr("class")) + 1).toString();

    if (nextMonth.length < 2) {
        nextMonth = "0" + nextMonth;
    };

    $("table").css("display", "none");
    $(this).parents("table").next().css("display", "table");

});

// 일별 일정 개수 표시
$("td").each(function () {

    date = $(this).attr("class");
    scheduleList = Object.values(schedule.date);
    n = scheduleList.indexOf(date);

    if(n !== -1) {
        count = schedule.schedule[n].replace(/[^<br>]/g, "").length / 4 + 1;
        $(this).find("p").text(count);
    };

    if($(this).find("p").text().length !== 0) {
        $(this).find("p").css("background", "#00f")
    };

});

// 방학 표시
$("td").each(function () {
    date = Number($(this).attr("class")?.substr(1, 4));

    if(window.innerWidth < 840) {
        if((726 <= date && date <= 820) || (1230 <= date || date <= 204) || (209 <= date && date <= 301)) {
            $(this).find("p").css({"width": "calc(80vw / 7)", "height": "2.5vh", "margin": "calc(5vw - 2.5vh) 0 0.5vh 0", "background": "#f0f0f0", "border-radius": 0});
        };    
        $(".d0302").eq(1).find("p").css({"width": "calc(80vw / 7)", "height": "2.5vh", "margin": "calc(5vw - 2.5vh) 0 0.5vh 0", "background": "#f0f0f0", "border-radius": 0});
    
        $(".d0726 > p, .d0820 > p").text("여름방학").css({"color": "#00000080", "background": "#f0f0f0", "font-size": "calc((80vw / 7 / 4) - .2vw)"});
        $(".d1230 > p, .d0204 > p").text("겨울방학").css({"color": "#00000080", "background": "#f0f0f0", "font-size": "calc((80vw / 7 / 4) - .2vw)"});
        $(".d0301").eq(0).find("p").text("봄방학").css({"color": "#00000080", "background": "#f0f0f0", "font-size": "calc((80vw / 7 / 4) - .2vw)"});
        $(".d0209 > p").text("봄방학").css({"color": "#00000080", "background": "#f0f0f0", "font-size": "calc((80vw / 7 / 4) - .2vw)"});
    } else if(840 <= window.innerWidth || window.innerWidth < 1440) {
        if((726 <= date && date <= 820) || (1230 <= date || date <= 204) || (209 <= date && date <= 301)) {
            $(this).find("p").css({"width": "calc(40vw / 7)", "height": "2.5vh", "margin": "calc(2vw - 2.5vh) 0 0.5vh 0", "background": "#f0f0f0", "border-radius": 0});
        };    
        $(".d0302").eq(1).find("p").css({"width": "calc(40vw / 7)", "height": "2.5vh", "margin": "calc(2vw - 2.5vh) 0 0.5vh 0", "background": "#f0f0f0", "border-radius": 0});
    
        $(".d0726 > p, .d0820 > p").text("여름방학").css({"color": "#00000080", "background": "#f0f0f0", "font-size": "calc((40vw / 7 / 4) - .2vw)"});
        $(".d1230 > p, .d0204 > p").text("겨울방학").css({"color": "#00000080", "background": "#f0f0f0", "font-size": "calc((40vw / 7 / 4) - .2vw)"});
        $(".d0301").eq(0).find("p").text("봄방학").css({"color": "#00000080", "background": "#f0f0f0", "font-size": "calc((40vw / 7 / 4) - .2vw)"});
        $(".d0209 > p").text("봄방학").css({"color": "#00000080", "background": "#f0f0f0", "font-size": "calc((40vw / 7 / 4) - .2vw)"});
    };

});

// 시험 표시
$("td").each(function () {
    date = Number($(this).attr("class")?.substr(1, 4));

    if(window.innerWidth < 840) {
        if(date == 323 || date == 428 || (501 <= date && date <= 503) || (703 <= date && date <=707) || date == 906 || (1010 <= date && date <= 1013) || date == 1121 || (1207 <= date && date <= 1208) || (1211 <= date && date <= 1213)) {
            $(this).find("p").css({"width": "calc(80vw / 7)", "height": "2.5vh", "margin": "calc(5vw - 2.5vh) 0 0.5vh 0", "background": "#ff8080", "border-radius": 0});
        };    
    
        $(".d0428 > p, .d1010 > p").text("중간고사").css({"color": "#fff", "background": "#ff8080", "font-size": "calc((80vw / 7 / 4) - .2vw)"});
        $(".d0703 > p, .d1207 > p").text("기말고사").css({"color": "#fff", "background": "#ff8080", "font-size": "calc((80vw / 7 / 4) - .2vw)"});
        $(".d0323 > p, .d0906 > p, .d1121 > p").text("모의고사").css({"color": "#fff", "background": "#ff8080", "font-size": "calc((80vw / 7 / 4) - .2vw)"});
    } else if(840 <= window.innerWidth || window.innerWidth < 1440) {
        if(date == 323 || date == 428 || (501 <= date && date <= 503) || (703 <= date && date <=707) || date == 906 || (1010 <= date && date <= 1013) || date == 1121 || (1207 <= date && date <= 1208) || (1211 <= date && date <= 1213)) {
            $(this).find("p").css({"width": "calc(40vw / 7)", "height": "2.5vh", "margin": "calc(2vw - 2.5vh) 0 0.5vh 0", "background": "#ff8080", "border-radius": 0});
        };    
    
        $(".d0428 > p, .d1010 > p").text("중간고사").css({"color": "#fff", "background": "#ff8080", "font-size": "calc((40vw / 7 / 4) - .2vw)"});
        $(".d0703 > p, .d1207 > p").text("기말고사").css({"color": "#fff", "background": "#ff8080", "font-size": "calc((40vw / 7 / 4) - .2vw)"});
        $(".d0323 > p, .d0906 > p, .d1121 > p").text("모의고사").css({"color": "#fff", "background": "#ff8080", "font-size": "calc((40vw / 7 / 4) - .2vw)"});
    };
});