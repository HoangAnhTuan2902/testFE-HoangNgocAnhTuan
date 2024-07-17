const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bars = $('.header .top-nav #bars');
const nav = $('.header .top-nav .nav-bar #nav');

bars.addEventListener('click', () => {
	nav.classList.toggle('active');
});

const input = $('.nav-bar .input-form input');
const searchBtn = $('.nav-bar .input-form i');

searchBtn.addEventListener('click', () => {
	input.classList.toggle('active');
});

// slide show

const nextBtn = $('.header .slider .nav-btn .next');
const prevBtn = $('.header .slider .nav-btn .prev');
const slides = $$('.header .slider .slide-show');
const dots = $$('.header .slider .order .dot');

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}

nextBtn.addEventListener('click', () => {
	plusSlides(1);
});
prevBtn.addEventListener('click', () => {
	plusSlides(-1);
});
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlide(index + 1);
	});
});
