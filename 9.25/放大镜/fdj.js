/*
* @Author: lenovo
* @Date:   2017-09-25 15:49:14
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-25 19:15:39
*/

window.onload=function(){
	let big=document.querySelector('.big');
	let Img=document.querySelector('.big>img');
	let small=document.querySelector('.small');
	let img=document.querySelector('.small>img');
    let bili=Img.offsetWidth/parseInt(getComputedStyle(img,null).width);
    let item=document.querySelector('.small>.item');
    let opacity=document.querySelector('.small>.opacity');
    let iw=parseInt(getComputedStyle(item,null).width),
        ih=parseInt(getComputedStyle(item,null).height),
        it=item.offsetTop;
        il=item.offsetLeft,
        sw=parseInt(getComputedStyle(small,null).width),
        sh=parseInt(getComputedStyle(small,null).height);

    
    opacity.addEventListener('mousemove',function(e){
    	let oX=e.offsetX-iw/2,oY=e.offsetY-ih/2;
    	if (oX>=sw-iw){
           oX=sw-iw;
    	}
    	if (oX<=0){
           oX=0;
    	}
    	if (oY>=sh-ih){
           oY=sh-ih;
    	}
    	if (oY<=0){
           oY=0;
    	}

    	item.style.left=`${oX}px`;
    	item.style.top=`${oY}px`;
        
        Img.style.width=`${sw*sw/iw}px`;
        Img.style.height=`${sh*sh/ih}px`;

    	Img.style.left=`${-sw*oX/iw}px`;
    	Img.style.top=`${-sh*oY/ih}px`;	

    });
    
}