console.log("main js is doing js");

let body = document.querySelector('body');
body.addEventListener('click', (e) => {
	if(e.target.matches('.accordian-show-content')){
		e.target.parentNode.querySelector('.accordian-content').style.display = 'block';
		e.target.parentNode.querySelector('.accordian-hide-content').style.display = 'block';
		e.target.parentNode.querySelector('.accordian-show-content').style.display = 'none'
	} 
	if(e.target.matches('.accordian-hide-content')){
		e.target.parentNode.querySelector('.accordian-content').style.display = 'none';
		e.target.parentNode.querySelector('.accordian-hide-content').style.display = 'none';
		e.target.parentNode.querySelector('.accordian-show-content').style.display = 'block'
	} 
})