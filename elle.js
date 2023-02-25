
var var i1 = 0;
var images1 = [];
var time1 = 2000;
//images 
images1[0]='pic15.webp';
images1[1]='pic17.webp';
images1[2]='pic14.webp';
images1[3]='pic9.jpg';
images1[4]='pic10.jpg';
images1[5]='pic16.webp';
images1[6]='pic3.jpg';
images1[7]='new2.jpg';


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
var time2 = 2000;

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

