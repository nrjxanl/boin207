function MarToApr() {
    document.getElementById("mar").style.opacity = "0";
    document.getElementById("apr").style.opacity = "1";
}
function AprToMar() {
    document.getElementById("mar").style.opacity = "1";
    document.getElementById("apr").style.opacity = "0";
}
function AprToMay() {
    document.getElementById("apr").style.opacity = "0";
    document.getElementById("may").style.opacity = "1";
}
function MayToApr() {
    document.getElementById("apr").style.opacity = "1";
    document.getElementById("may").style.opacity = "0";
}
function MayToJun() {
    document.getElementById("may").style.opacity = "0";
    document.getElementById("jun").style.opacity = "1";
}
function JunToMay() {
    document.getElementById("may").style.opacity = "1";
    document.getElementById("jun").style.opacity = "0";
}
function JunToJul() {
    document.getElementById("jun").style.opacity = "0";
    document.getElementById("jul").style.opacity = "1";
}
function JulToJun() {
    document.getElementById("jun").style.opacity = "1";
    document.getElementById("jul").style.opacity = "0";
}
function JulToAug() {
    document.getElementById("jul").style.opacity = "0";
    document.getElementById("aug").style.opacity = "1";
}
function AugToJul() {
    document.getElementById("jul").style.opacity = "1";
    document.getElementById("aug").style.opacity = "0";
}
function AugToSep() {
    document.getElementById("aug").style.opacity = "0";
    document.getElementById("sep").style.opacity = "1";
}
function SepToAug() {
    document.getElementById("aug").style.opacity = "1";
    document.getElementById("sep").style.opacity = "0";
}
function SepToOct() {
    document.getElementById("sep").style.opacity = "0";
    document.getElementById("oct").style.opacity = "1";
}
function OctToSep() {
    document.getElementById("sep").style.opacity = "1";
    document.getElementById("oct").style.opacity = "0";
}
function OctToNov() {
    document.getElementById("oct").style.opacity = "0";
    document.getElementById("nov").style.opacity = "1";
}
function NovToOct() {
    document.getElementById("oct").style.opacity = "1";
    document.getElementById("nov").style.opacity = "0";
}
function NovToDec() {
    document.getElementById("nov").style.opacity = "0";
    document.getElementById("dec").style.opacity = "1";
}
function DecToNov() {
    document.getElementById("nov").style.opacity = "1";
    document.getElementById("dec").style.opacity = "0";
}
function DecToJan() {
    document.getElementById("dec").style.opacity = "0";
    document.getElementById("jan").style.opacity = "1";
}
function JanToDec() {
    document.getElementById("dec").style.opacity = "1";
    document.getElementById("jan").style.opacity = "0";
}
function JanToFeb() {
    document.getElementById("jan").style.opacity = "0";
    document.getElementById("feb").style.opacity = "1";
}
function FebToJan() {
    document.getElementById("jan").style.opacity = "1";
    document.getElementById("feb").style.opacity = "0";
}

function prev() {
    window.scrollTo({ left: ((console.log(scrollX)) - screen.width) });
}

function next() {
    window.scrollTo({ left: ((console.log(scrollX)) + screen.width) });
}