// sabet mondan .logo-menu !
let getElement = document.querySelector('.logo-menu');
let getElementGap = getElement.offsetTop;
function staticMenu(){
	if(window.pageYOffset >= getElementGap){
		getElement.classList.add("getElementGap")
	}
	else{
		getElement.classList.remove("getElementGap")
	}
}
// click icon /show menu for phone
document.getElementById('header-phone-menu-bars').onclick=function(){
	let getShowMenuForPhoneId=document.getElementById('showmenuforphone');
	if (getShowMenuForPhoneId.style.display === 'block') {
		document.getElementById('showmenuforphone').style.display='none';
		 let getBarsIconforPhone= document.getElementById('header-phone-menu-bars');
		 getBarsIconforPhone.classList.remove('fas','fa-times');
		 getBarsIconforPhone.classList.add('fas','fa-bars');
		}
	else{
		document.getElementById('showmenuforphone').style.display='block';
		let getBarsIconforHideMenu= document.getElementById('header-phone-menu-bars');
		getBarsIconforHideMenu.classList.remove('fas','fa-bars');
		getBarsIconforHideMenu.classList.add('fas','fa-times');
	}
};
//hide menu bad taqir size!
function mysize(){
	if(innerWidth > 991){
	 	let k =	document.getElementById('showmenuforphone');
	 	if(k.style.display=='block'){
	 		k.style.display='none';
			let getBarsIconforPhone= document.getElementById('header-phone-menu-bars');
	 		getBarsIconforPhone.classList.remove('fas','fa-times');
		    getBarsIconforPhone.classList.add('fas','fa-bars');
		}
	}
}
//START SEC10
intval()
let slideIndex=1;
function setslide(input,index,action){
	// console.log(input)
	// console.log(index)
	slideIndex=index;
	let item=document.getElementById(`${input}`)
	let slides=[...document.querySelector('.sec10-Feedback-clients').children];
	slides.forEach((element)=>{
	element.classList.remove('sec10-active')
	})
	item.classList.add('sec10-active')

	if(action === 'click'){
	    clearInterval(interval);  
	    intval();
	}
	let geticollection=document.querySelector('.sec10-Feedback-bottom').children;
	 // console.log(geticollection)
	 for(let i=0;i<geticollection.length;i++){
	 	geticollection[i].classList.remove('newstylei');
	 }
	let getsec10i=document.getElementsByClassName(`sec10I${index}`)[0];
	getsec10i.classList.add('newstylei')
}
function intval(){
	interval=setInterval(()=>{
		slideIndex +=1;
		if(slideIndex==4){
			slideIndex=1;
		}
		setslide(`sec10box${slideIndex}` , slideIndex)
	},2000)  
}
// finish sec10
//start section 13
let getsec13i=document.getElementsByClassName('sec13-i');
for (let i= 0; i < getsec13i.length; i++) {
   		getsec13i[i].onclick = function(getpointerEventsec13i){
   			let getdataAtrsec13i = getpointerEventsec13i.target.getAttribute('data-collaps');
   			console.log(getdataAtrsec13i)
   			let getParentdataAttvalue=document.getElementById(getdataAtrsec13i);
   			if(getParentdataAttvalue.childNodes[3].style.display==='block'){
   			   getParentdataAttvalue.childNodes[3].style.display='none';
   			   getpointerEventsec13i.target.classList.remove('fas','fa-minus');
 			   getpointerEventsec13i.target.classList.add('fas','fa-plus');
   			   getpointerEventsec13i.target.classList.remove('sec13-hover-i');
   			}else{
   			    getParentdataAttvalue.childNodes[3].style.display='block';
   			    getpointerEventsec13i.target.classList.remove('fas','fa-plus');
			    getpointerEventsec13i.target.classList.add('fas','fa-minus');
			    getpointerEventsec13i.target.classList.add('sec13-hover-i');
   			}
       }
}
//finish section 13
//start section 14
let u=document.getElementsByClassName('sec14-category-option');
for(let m = 0 ; m < u.length ; m++){
	u[m].onclick=function(e){
		let getdataat =e.target.getAttribute('data-test');
		let getowner=document.getElementById(getdataat);
		let u2 = document.getElementsByClassName("sec14-img");
		for(let i =0; i< u2.length ; i++ ){
			u2[i].style.display='none';
		}
		getowner.childNodes[1].style.display='block';
	}
}

//finish section 14
// start secion 15
const $slider = document.querySelectorAll(".chid1-sec15");
const slider = {
  speed: 10, 
  isOnMouseDown:false,
  onMouseMove: function(e) {
    e.preventDefault();
    if(!slider.isOnMouseDown) { return };
    const target = e.currentTarget;
    target.scrollLeft -= e.movementX * slider.speed;
    // target.scrollLeft = target.scrollLeft - e.movementX * slider.speed
  },
  cancelMouseMove: function() { 
    slider.isOnMouseDown = false;
  },
  onMouseDown: function(e) {  
    slider.isOnMouseDown = true;
    const target = e.currentTarget;
    slider.scrollLeft = target.scrollLeft;
    slider.initial_x = e.pageX - slider.scrollLeft;
    console.log(e.pageX,slider.scrollLeft)
  },
}
$slider.forEach(e =>{
  e.addEventListener("mousedown", slider.onMouseDown);
  e.addEventListener("mousemove", slider.onMouseMove);
  e.addEventListener("mouseup", slider.cancelMouseMove);
  e.addEventListener("mouseleave", slider.cancelMouseMove);
});





























// finish secion 15

