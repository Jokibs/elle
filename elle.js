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
var images=[];
var time=2000;

//images list
images[0]='pic4.jpg';
images[1]='pic3.jpg';
images[2]='pic2.jpg';
images[3]='pic1.jpg';

//change image
function changeimg2(){
    document.two.src=images[i];
    if(i< images.length-1){
    i++;
        
    }else{i=0;}
    
    setTimeout("changeimg2()",time);
}
window.onload = function() {
  changeimg1();
  changeimg2();
};
