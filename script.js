let deg = 6; 
let hr = document.querySelector('.hr');
let mn = document.querySelector('.mn');
let sc = document.querySelector('.sc');

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hr.style.transform = `rotate(${hh+(mm/12)}deg)`;
	mn.style.transform = `rotate(${mm}deg)`;
	sc.style.transform = `rotate(${ss}deg)`;
});