let container=document.querySelector('.container')
let dots=document.querySelector('.dots')
let dot=document.querySelectorAll('.dot')

for(let i=0;i<dot.length;i++){
	dot[i].addEventListener('click', ()=>{
		// if(dot[0].classList.contains('active')){
		// 	dot[0].classList.remove('active');
		// 	dot[1].classList.add('active')
		// }else{
		// 	dot[0].classList.add('active')
		// 	dot[1].classList.remove('active')
		// }
		dot[0].classList.toggle('active')
		dot[1].classList.toggle('active')
	})
}

container.addEventListener('wheel',(e)=>{
	e.preventDefault();
	container.scrollLeft += (e.deltaY)*15;
	for(let i=0;i<dot.length;i++){
		e.preventDefault();
		dot[i].classList.toggle('active')	
	}
})

