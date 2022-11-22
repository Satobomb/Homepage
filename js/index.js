
let pics_src = new Array("./picture/1.jpg","./picture/2.png","./picture/3.jpg","./picture/4.jpg","./picture/5.jpg","./picture/6.jpg","./picture/7.jpg","./picture/8.jpg","./picture/9.jpg");
let num = 0;
setInterval(slideshow_timer,3000); 

function slideshow_timer(){
    if (num == 8)    num = 0;
    else             num ++;
    document.getElementById("mypic").src=pics_src[num];
}