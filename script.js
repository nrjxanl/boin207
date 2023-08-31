// 이번 달 table 제외 display: none 설정
newDate = new Date();
month = newDate.getMonth();

$("table").css("display", "none");
$("table").eq(month - 2).css("display", "table");

if (month < 3) {
    $("table").eq(month + 10).css("display", "table");
};

// timetable array로 가져오기
timetableList = Object.keys(timetable);

// 일별 dateClass 선언
$("table").each(function () {

    month = $(this).attr("class");

    $(this).find("tr:nth-of-type(n+2) > td").each(function () {
        date = $(this).text().replace(/[^0-9]/g, "");
        if (date.length == 1) {
            date = "0" + date;
        };

        dateClass = month + date;

        $(this).attr("class", "d" + dateClass);

        // 전월일 경우
        if ($(this).text().match("p")) {
            $(this).removeAttr("class");

            $(this).text($(this).text().replace(/[^0-9]/g, ""));
            $(this).css("opacity", ".5");

            dateClass = ((Number(month + date)) - 100).toString();

            if (dateClass.length < 4) {
                dateClass = "0" + dateClass;
            };

            $(this).attr("class", "d" + dateClass);
        };

        // 익월일 경우
        if ($(this).text().match("n")) {
            $(this).removeAttr("class");

            $(this).text($(this).text().replace(/[^0-9]/g, ""));
            $(this).css("opacity", ".5");

            dateClass = ((Number(month + date)) + 100).toString();

            if (dateClass.length < 4) {
                dateClass = "0" + dateClass;
            };

            $(this).attr("class", "d" + dateClass);
        };

        // 요일 등 class 지정 제외
        if (dateClass.length < 4) {
            $(this).removeAttr("dateClass");
        };

        // 달력 클릭 시 일정, 시간표 표시
        $(this).click(function () {
            $("#bg").css("display", "block");
            $("#sched").css("display", "block");

            schedDate = $(this).attr("class").replace(/[^0-9]/g, "");
            scheduleList = Object.values(schedule.date);
            n = scheduleList.indexOf(schedDate);

            week = ["일", "월", "화", "수", "목", "금", "토"];
            if (schedDate.substr(0, 2) == "01" || schedDate.substr(0, 2) == "02") {
                date = "2024-" + schedDate.substr(0, 2) + "-" + $(this).attr("class").substr(3, 2);
            } else {
                date = "2023-" + schedDate.substr(0, 2) + "-" + $(this).attr("class").substr(3, 2);
            };

            week = week[new Date(date).getDay()];

            $("#date").text(schedDate.substr(0, 2) + "." + schedDate.substr(2, 2) + ".(" + week + ")");
            $("#event").html(schedule.schedule[n]);
            $("#event:empty").text("일정이 없습니다.").css("opacity", ".5");

            week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
            week = week[new Date(date).getDay()];

            index = timetableList.indexOf(week, 0);

            timetable1 = "<span>1교시</span>" + timetable[Object.keys(timetable)[index]][0];
            timetable2 = "<span>2교시</span>" + timetable[Object.keys(timetable)[index]][1];
            timetable3 = "<span>3교시</span>" + timetable[Object.keys(timetable)[index]][2];
            timetable4 = "<span>4교시</span>" + timetable[Object.keys(timetable)[index]][3];
            timetable5 = "<span>5교시</span>" + timetable[Object.keys(timetable)[index]][4];
            timetable6 = "<span>6교시</span>" + timetable[Object.keys(timetable)[index]][5];
            timetable7 = "<span>7교시</span>" + timetable[Object.keys(timetable)[index]][6];

            $("#timetable > p").html(timetable1 + "<br>" + timetable2 + "<br>" + timetable3 + "<br>" + timetable4 + "<br>" + timetable5 + "<br>" + timetable6 + "<br>" + timetable7);
        
        });

    });

});

// 빈 공간 클릭 시 팝업 없애기
$("#bg").click(function () {
    $("#bg").css("display", "none");
    $("#sched").css("display", "none");

    $("#date").empty();
    $("#event").empty();
    $("#timetable > p").empty();
});

// esc 누를 시 팝업 없애기
$(document).keydown(function (event) {
    if (event.keyCode == 27 || event.which == 27) {
        $("#bg").css("display", "none");
        $("#sched").css("display", "none");

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

today = ".d" + month + date;

$(today).css("border", "2px solid #c8c8c8");

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