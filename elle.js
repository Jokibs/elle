var i1 = 0;
var images1 = ['pic15.webp', 'pic17.webp', 'pic14.webp', 'pic9.jpg','pic10.jpg','pic16.webp','pic3.jpg','new2.jpg'];
var time1 = 2000;

function changeimg1() {
    document.slide.src = images1[i1];
    if (i1 < images1.length - 1) {
        i1++;
    } else {
        i1 = 0;
    }
    setTimeout(changeimg1, time1);
}

var i2 = 0;
var images2 = ['pic1.jpg', 'pic11.jpg', 'pic14.jpg'];
var time2 = 4000;

function changeimg2() {
    document.two.src = images2[i2];
    if (i2 < images2.length - 1) {
        i2++;
    } else {
        i2 = 0;
    }
    setTimeout(changeimg2, time2);
}

window.onload = function() {
    changeimg1();
    changeimg2();
};



