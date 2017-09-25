/*
* @Author: lenovo
* @Date:   2017-09-25 19:09:51
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-25 22:31:49
*/
window.addEventListener('load', function(){
	let textarea=document.querySelector('textarea');
	let submit=document.querySelector('.anniu>.submit');
	let cancle=document.querySelector('.anniu>.cancle');
    let kong=document.querySelector('.kong');
     
	
	submit.addEventListener('click',fn);
    cancle.addEventListener('click',fn1);

	function fn(){
		let div=document.createElement('div');
	    div.className='liuyan';
		let neirong=textarea.value;
        div.innerHTML=neirong;
        kong.prependChild(div);
		textarea.value='';
	}
	function fn1(){
		textarea.value='';
	}
	HTMLElement.prototype.prependChild=function(element){
		let first=this.firstElementChild;
		if(first){
			this.insertBefore(element,first);
		}else{
			this.appendChild(element);
		}
	}
})