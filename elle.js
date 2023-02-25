var i=0;
var images=[];
var time=1000;
//images list
images[0]='pic15.webp';
images[1]='pic17.webp';
images[2]='pic14.webp';
images[3]='pic9.jpg';
images[4]='pic10.jpg';
images[5]='pic16.webp';
images[6]='pic3.jpg';
images[7]='new2.jpg';


//change image
function changeimg(){
    document.slide.src=images[i];
    if(i< images.length-1){
    i++;
        
    }else{i=0;}
    
    setTimeout("changeimg()",time);
}
window.onload=changeimg;
var i=0;
var var i1 = 0;
var images1 = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg'];
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

