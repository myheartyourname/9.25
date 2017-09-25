/*
* @Author: lenovo
* @Date:   2017-09-25 14:57:11
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-25 15:13:56
*/
class drag{
	constructor(obj){   //constructor是用来添加属性的
		this.obj=obj;
	}
	move(){     //move用来添加方法
		let that=this;
		this.obj.addEventListener('mousedown', function(e){
				let oX=e.offsetX, oY=e.offsetY;
				document.addEventListener('mousemove', fn);
			    
				function fn(e){
					let cX=e.clientX-oX, cY=e.clientY-oY;
					that.obj.style.left=`${cX}px`;
					that.obj.style.top=`${cY}px`;
				}
				that.obj.addEventListener('mouseup',function(){
					document.removeEventListener('mousemove',fn);
				})
			}) 
	}
}