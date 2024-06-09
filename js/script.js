const img = document.querySelector('.salad2');
new simpleParallax(img, {
	orientation: 'up'
});
console.log(img)

const popup = document.querySelector('.popup');
const button = document.querySelector('.popup-button');
const popupClose = document.querySelector('.popup-close');


window.addEventListener('click', (event)=>{
	if(event.target===popup || event.target === popupClose){
		popup.classList.remove('popup-opened');
		popup.querySelector('iframe').remove();
	}
	if(event.target.matches('.watch')){
		popup.classList.add('popup-opened');
	}
})

const burger = document.querySelector('.button');
const close = document.querySelector('.close');
const sidebar = document.querySelector('aside');
const mainNav = document.querySelector('.mainNav');

burger.addEventListener('click', ()=>{
	sidebar.style.width = '300px';
	main.style.marginLeft = '300px';
	burger.style.display = 'none';
	mainNav.style.display = 'none';
})
close.addEventListener('click', () => {
    sidebar.style.width = '0px';
    main.style.marginLeft = '0';
    burger.style.display = 'block';
	mainNav.style.display = 'flex';
});
