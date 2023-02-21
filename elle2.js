var i=0;
var images=[];
var time=1000;
//images list
images[0]='pic1.jpg';
images[1]='pic11.jpg';
images[2]='pic14.jpg';
images[3]='new.jpg';


//change image
function changeimg(){
    document.revenant.src=images[i];
    if(i< images.length-1){
    i++;
        
    }else{i=0;}
    
    setTimeout("changeimg()",time);
}
window.onload=changeimg;
