const closebtn= document.querySelector('.nav-close');
const closebtnin= document.querySelector('.nav-close-in');
const nav_menu= document.querySelector('.nav-container');
const nav_links= document.querySelector('.nav-links');
const nav_links_li= document.querySelectorAll('.nav-links li');
const featuepadding = document.querySelectorAll('.paddingright');
//Nav menu open
closebtn.addEventListener('click',function(){
	nav_menu.style.transform="scale(1)";
	nav_links_li.forEach((link, index) => {
			link.style.animation = `animateli 0.5s ease forwards ${index/6+1}s`;

	});
});
//Nav menu close
closebtnin.addEventListener('click',function(){
	nav_menu.style.transform="scale(0)";
		nav_links_li.forEach((link, index) => {
			link.style.animation = '';
			link.style.transform='';
		
	});
});

featuepadding.forEach((link,index) => {
	for(i=0; i<featuepadding.length; i++){
		link.style.paddingRight= i*index + 2 + '0px';
	}
	
});

//nav items animation appear
nav_menu.addEventListener('transitionend', function(){
	
});

$('.carousel').carousel({
	interval: 10000,
	pause:"hover",
  })
