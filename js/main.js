const navBurgerButton = document.querySelector(".nav__burger-btn");
const navList = document.querySelector(".nav__list");
const navListItem = document.querySelectorAll(".nav__list-item");

const galleryGroup = document.querySelectorAll(".gallery__carousel-group");
const galleryDots = document.querySelectorAll(".gallery__slider-dots-dot");

const headerDots = document.querySelectorAll(".header__slider-dots-dot");
const headerHeading = document.querySelector(".header__heading");
const header = document.querySelector("header");
const headerHeadingList = [
	"Oferta wigilijna",
	"Oferta sylwestrowa",
	"Poznaj niepowtarzalny klimat i smak miejsca z duszą!",
];
const headerBackground = document.querySelectorAll(".header__background");

const offerButtonList = document.querySelectorAll(".offer__list-button");
const offerContent = document.querySelector(".offer__content");
const offerImage = document.querySelector(".offer__image");

const offerInformation = [
	{
		image: "offer-1",
		alt: "Sala bankietowa dworku pod lipami wraz z czerwoną sofą i różnymi tematycznymi dekoracjami które nadają całości uroku i charakteru",
		content:
			'<p class="offer__text">\
		<strong\
			>Jeżeli planują Państwo organizację małego przyjęcia\
			okolicznościowego czy większej imprezy firmowej zapraszamy do\
			współpracy.</strong\
		>\
		<span class="text-newline"\
			>W naszej restauracji istnieje wiele możliwości aranżacji\
			pomieszczeń oraz ustawienia stołów.\
		</span>\
		Wydzielone przestrzenie pozwalają na zapewnienie prywatności\
		podczas trwania przyjęcia.\
	</p>',
	},
	{
		image: "offer-2",
		alt: "Srebrny talerz wraz z sztućcami oraz kremową serwetką z logiem dworku pod lipami położoną na talerzu",
		content:
			'<p class="offer__text">\
			<strong>Zapraszamy również do korzystania z naszych usług cateringowych.</strong> \
			<span class="text-newline">Także w tej formie działalności oferujemy pełen profesjonalizm.</span>\
			</p> \
			<span class="text-space">Zapewniamy kompleksową obsługę:</span> \
			<ul class="offer__text-list">\
			<li class="offer__text-list-item">kongresów</li>\
			<li class="offer__text-list-item">zjazdów</li>\
			<li class="offer__text-list-item">sympozjów</li>\
			<li class="offer__text-list-item">szkoleń</li>\
			<li class="offer__text-list-item">bankietów</li>\
			<li class="offer__text-list-item">pikników</li>\
		</ul>\
		<p class="offer__text"><span class="text-space">i wiele innych...</span></p>\
		',
	},
	{
		image: "offer-3",
		alt: "Różowy voucher w kształcie kwadratu do restauracji dworku pod lipami",
		content:
			'<p class="offer__text"><strong>Voucher do restauracji Dworek „ Pod Lipami” to pomysł na prezent dla każdego.</strong> Niezależnie od wieku, płci, zainteresowań i sposobów na spędzanie wolnego czasu, wszystkich nas łączy pewna tajemnica - kochamy najadać się do syta!</p> <p class="offer__text text-space"><strong>Dla dwojga? Dla rodziców? Dla przyjaciela? Dla pracowników?</strong> <span class="text-newline">Każdy ucieszy się z pysznych doznań podanych na talerzu!</span></p>',
	},
	{
		image: "offer-4",
		alt: "Sala bankietowa dworku pod lipami z drewnianą podłogą oraz białymi okrągłymi stolikami dla gości, całość otaczają tematyczne elementy dekoracji",
		content:
			'<p class="offer__text">Jeśli szukają Państwo miejsca, w którym może odbyć się wspaniała kolacja biznesowa to trafiliście pod dobry adres. Sprzyjające położenie zabytkowego Giszowca w sercu Śląska, wyjątkowe wnętrza i tradycyjne polskie potrawy gwarantują sukces każdego spotkania.</p>',
	},
	{
		image: "offer-5",
		content:
			'<p class="offer__text">Nasz ogródek letni zaprasza zarówno na obiad z bliskimi jak i na zorganizowanie w nim przyjęcia.</p>',
	},
	{
		image: "none",
		alt: "Prostokątne drewniane stoliki razem z krzesłami położone w ogrodzie dworku pod lipami, na stolikach znajdują się przyprawy oraz serwetki",
		content:
			'<p class="offer__text"><strong>Oferta świąteczna dla 2 osób</strong></p>\
			<p class="offer__text text-space">\
			<ul class="offer__text-list offer__text-list--nomarker">\
				<li class="offer__text-list-item">Krem z borowików z groszkiem ptysiowym 0,6 l</li>\
				<li class="offer__text-list-item">Rolada śląska wołowa 2 sztuki</li>\
				<li class="offer__text-list-item">Pierś z kaczki 2 sztuki </li>\
				<li class="offer__text-list-item">Kluski śląskie białe 16 sztuk</li>\
				<li class="offer__text-list-item">Kapusta czerwona 0,5 l </li>\
				<li class="offer__text-list-item">Kapusta zasmażana 0,5 l</li>\
				<li class="offer__text-list-item">Sos mięsny 0,3 l </li>\
				<li class="offer__text-list-item">Sos żurawinowo – jabłkowy 0,3 l</li>\
				<li class="offer__text-list-item">Śledź w sosie słodko-kwaśnym 100 g</li>\
				<li class="offer__text-list-item">Pasztet borowikowy 200 g</li>\
				<li class="offer__text-list-item">Pieczeń ze schabu ze śliwką 200 g</li>\
				<li class="offer__text-list-item">Kiełbasa podsuszana 150</li>\
				<li class="offer__text-list-item">Pierniczki 4 szt</li>\
				<li class="offer__text-list-item">KWino czerwone 0,75 l</li>\
			</ul>\
		</p>\
		<p class="offer__text text-space"><strong> Po odbiór koszy Świątecznych zapraszamy Państwa 23.12 w godzinach 10.00 – 18.00 lub 24.12.2020 w godzinach 8.00 a 13.00</strong></p>\
		<p class="offer__text text-space">Koszt : 445,00 złotych</p>\
			',
	},
];

const toggleMobileNavigation = () => {
	if (window.innerWidth < 1200) {
		navBurgerButton.classList.toggle("nav__burger-btn--active");
		navList.classList.toggle("nav__list--active");
		document.body.classList.toggle("fixed-body");
	}
};

const resetGalleryCarousel = () => {
	galleryGroup.forEach(slide => {
		slide.style.transition = "none";
		slide.style.transform = "translateX(0)";
	});
	handleGalleryCarousel(1);
};

const toggleDotIndicator = (dots, position, activeClassName) => {
	if (dots[position] == null) {
		position = 0;
	}
	const activeDot = document.querySelector(`.${activeClassName}`);
	activeDot.classList.toggle(activeClassName);
	dots[position].classList.toggle(activeClassName);
};

const handleGalleryCarousel = startPosition => {
	let currSlide = startPosition;

	if (startPosition != 0) {
		galleryGroup.forEach(slide => {
			slide.style.transform = `translateX(-${100 * (startPosition - 1)}%)`;
		});
	}

	const timer = setInterval(() => {
		if (currSlide == galleryGroup.length) {
			clearInterval(timer);
			resetGalleryCarousel();
		} else {
			galleryGroup.forEach(slide => {
				slide.style.transition = "transform .5s";
				slide.style.transform = `translateX(-${100 * currSlide}%)`;
			});
			toggleDotIndicator(
				galleryDots,
				currSlide,
				"gallery__slider-dots-dot--active"
			);
			currSlide++;
		}
	}, 2000);
};

const setHeader = id => {
	if (typeof id == "object") {
		id = id.target.dataset.slide - 1;
	}
	document
		.querySelector(".header__background--active")
		.classList.remove("header__background--active");

	headerHeading.textContent = headerHeadingList[id];
	headerBackground[id].classList.toggle("header__background--active");

	toggleDotIndicator(headerDots, id, "header__slider-dots-dot--active");
};

const handleHeaderCarousel = () => {
	const timer = setInterval(() => {
		const activeSlide =
			document.querySelector(".header__slider-dots-dot--active button").dataset
				.slide - 1;
		if (activeSlide != headerHeadingList.length - 1) {
			setHeader(activeSlide + 1);
		} else {
			setHeader(0);
		}
	}, 3000);
};

const toggleOfferOption = e => {
	if (e.target.dataset.offer) {
		const object = offerInformation[e.target.dataset.offer - 1];
		const currentActiveOptionButton = document.querySelector(
			".offer__list-button--active"
		);

		currentActiveOptionButton.classList.toggle("offer__list-button--active");
		e.target.classList.toggle("offer__list-button--active");

		offerContent.innerHTML = object.content;

		if (object.image != "none") {
			if (offerImage.classList.contains("offer__image--hide")) {
				offerImage.classList.remove("offer__image--hide");
				offerContent.style.marginTop = "65px";
			}
			offerImage.src = `./assets/images/offer/${object.image}.png`;
			offerImage.alt = object.alt;
		} else {
			offerImage.classList.add("offer__image--hide");
			if (window.innerWidth >= 768) {
				offerContent.style.marginTop = "0";
			}
		}
	}
};

const loadOfferImage = () => {
	for (let i = 0; i < offerInformation.length; i++) {
		if (offerInformation[i].image != "none") {
			let image = new Image();
			image.src = `./assets/images/offer/${offerInformation[i].image}.png`;
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	navBurgerButton.addEventListener("click", toggleMobileNavigation);
	navListItem.forEach(item => {
		item.addEventListener("click", toggleMobileNavigation);
	});
	handleGalleryCarousel(2);
	handleHeaderCarousel();

	offerButtonList.forEach(button => {
		button.addEventListener("click", toggleOfferOption);
	});
	headerDots.forEach(dot => {
		dot.addEventListener("click", setHeader);
	});
	loadOfferImage();
});
