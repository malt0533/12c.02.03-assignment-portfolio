"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
	//* MENU
	const workLink = document.querySelector(".work");
	const aboutLink = document.querySelector(".about");
	const contactLink = document.querySelector(".contact");
	const section_one = document.querySelector("#about");
	const section_two = document.querySelector("#project_one");
	const section_three = document.querySelector("#contact");
	const scrollContainer = document.querySelector("main");

	if (window.clientWidth > 600) {
		workLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_two.offsetTop, behavior: "smooth" });
		});
		aboutLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_one.offsetTop, behavior: "smooth" });
		});
		contactLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_three.offsetTop, behavior: "smooth" });
		});
	} else {
		workLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_two.offsetTop - 100, behavior: "smooth" });
		});
		aboutLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_one.offsetTop - 100, behavior: "smooth" });
		});
		contactLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_three.offsetTop - 100, behavior: "smooth" });
		});
	}

	//* ANIMATIONS
	startAnimations();

	//* Button
	const viewBtns = document.querySelectorAll(".project_btn");
	viewBtns.forEach((btn) => {
		btn.addEventListener("click", viewBtnHandler);
	});
}

function viewBtnHandler(e) {
	console.log(e.target.parentNode.parentNode.parentNode.childNodes[1].textContent);
	document.querySelector(".page-trans-start-container h2").textContent = `${e.target.parentNode.parentNode.parentNode.childNodes[1].textContent}`;

	const pageTransTl = gsap.timeline();

	gsap.set(".page-trans-start", { transformOrigin: "bottom" });
	gsap.set(".page-trans-start-container h2", {
		display: "inline",
	});

	pageTransTl
		.to(".page-trans-start", {
			scaleY: 1,
			ease: Power4.easeOut,
			duration: 1.3,
		})

		.to(
			".page-trans-start-container h2",
			{
				opacity: 1,
				duration: 1,
				onComplete: setPageDetails,
			},
			"-=1"
		);
	const projectNr = e.target.dataset.project;
	function setPageDetails() {
		window.location.href = `./html/project_${projectNr}.html?id=${projectNr % 2}`;
	}
}

//**************************************** ANIMATIONS ****************************************
function startAnimations() {
	gsap.registerPlugin(ScrollTrigger);

	// NAME
	const name = document.querySelector(".h1_wrapper h1");
	name.innerHTML = spanLetter(name.textContent);

	// TITLE
	const title = document.querySelector(".title_wrapper h5");
	title.innerHTML = spanLetter(title.textContent);

	// ABOUT
	const aboutTitle = document.querySelector("#about h2");
	aboutTitle.innerHTML = spanLetter(aboutTitle.textContent);
	const aboutText = document.querySelectorAll("#about p");

	// MASTER TIMELINE
	const animMaster = gsap.timeline({ paused: true });

	// LOAD ANIMATION
	const staggerTime = 0.3;
	gsap.set(".page-trans-start", { transformOrigin: "bottom", scaleY: 100 });
	gsap.set(".page-trans-start-container h2", {
		display: "inline",
		opacity: 1,
	});
	const startTL = gsap.timeline();
	startTL

		.to(".page-trans-start", {
			transformOrigin: "top",
			scaleY: 0,
			duration: 1.3,
			delay: 0.5,
			ease: Power4.easeOut,
		})
		.to(
			".page-trans-start-container h2",
			{
				opacity: 0,
				duration: 0.5,
			},
			"-=1"
		);

	animMaster.add(startTL);

	// HEADER TIMELINE
	const headerTL = gsap.timeline();
	headerTL
		.from(".hero_container h1 span", {
			y: 70,
			opacity: 0,
			stagger: {
				amount: staggerTime,
			},
		})
		.from(
			".title_wrapper span",
			{
				y: 50,
				stagger: {
					amount: staggerTime,
				},
			},
			"-=0.4"
		);
	headerTL.delay(-0.7);
	animMaster.add(headerTL);
	// MAIN TIMELINE

	const mainTL = gsap.timeline();
	mainTL
		.from("#about h2 span", {
			y: 70,
			stagger: {
				amount: staggerTime,
			},
			delay: 0.5,
		})
		.from(
			"#about p",
			{
				opacity: 0,
				y: 100,
				stagger: {
					amount: staggerTime,
				},
			},
			"-=0.4"
		);
	mainTL.delay(-1.5);
	animMaster.add(mainTL);

	animMaster.play();

	// MAIN SCROLL
	const parameters = {
		y: 100,
		opacity: 0,
		duration: staggerTime,
		duration: 0.4,
	};

	const projectOneTL = gsap.timeline({
		defaults: parameters,
		scrollTrigger: {
			trigger: "#project_one",
			scroller: "main",
			start: "10% center",
		},
	});
	projectOneTL.from("#project_one h2", {}).from("#project_one .img_container", {}, "-=0.2").from("#project_one .details h5", {}, "-=0.2").from("#project_one .details button", {}, "-=0.2");

	const projectTwoTL = gsap.timeline({
		defaults: parameters,
		scrollTrigger: {
			trigger: "#project_two",
			scroller: "main",
			start: "10% center",
		},
	});
	projectTwoTL.from("#project_two h2", {}).from("#project_two .img_container", {}, "-=0.2").from("#project_two .details h5", {}, "-=0.2").from("#project_two .details button", {}, "-=0.2");

	const projectThreeTL = gsap.timeline({
		defaults: parameters,
		scrollTrigger: {
			trigger: "#project_three",
			scroller: "main",
			start: "10% center",
		},
	});
	projectThreeTL.from("#project_three h2", {}).from("#project_three .img_container", {}, "-=0.2").from("#project_three .details h5", {}, "-=0.2").from("#project_three .details button", {}, "-=0.2");

	const projectFourTL = gsap.timeline({
		defaults: parameters,
		scrollTrigger: {
			trigger: "#project_four",
			scroller: "main",
			start: "10% center",
		},
	});
	projectFourTL.from("#project_four h2", {}).from("#project_four .img_container", {}, "-=0.2").from("#project_four .details h5", {}, "-=0.2").from("#project_four .details button", {}, "-=0.2");
}

function spanLetter(word) {
	let wordArr = word
		.trim()
		.split("")
		.map((word) => {
			return `<span>${word}</span>`;
		});
	return wordArr.join("");
}
