var i=0;
var images=[];
var time=1000;
//images list
images[0]='pic6.jpg';
images[1]='pic7.jpg';
images[2]='pic8.jpg';
images[3]='pic9.jpg';
images[4]='pic10.jpg';
images[5]='pic5.jpg';
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