<script>
	import Card from '../components/Card.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const options = {
			strings: ['Planning', 'Staffing', 'Management'],
			typeSpeed: 50,
			backSpeed: 50,
			smartBackSpace: true,
			loop: true
		};

		const typed = new Typed('#event-text', options);

		const image = document.querySelector('#parallax-one');
		new simpleParallax(image, {
			delay: 0.45,
			transition: 'cubic-bezier(0,0,0,1)'
		});

		particlesJS('particles-js', {
			particles: {
				number: { value: 48, density: { enable: true, value_area: 800 } },
				color: { value: '#2f71e8' },
				shape: {
					type: 'circle',
					stroke: { width: 0, color: '#000' },
					polygon: { nb_sides: 6 },
					image: { src: 'img/github.svg', width: 100, height: 100 }
				},
				opacity: {
					value: 0.3,
					random: true,
					anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
				},
				size: {
					value: 36.076771369474265,
					random: false,
					anim: { enable: true, speed: 10, size_min: 40, sync: false }
				},
				line_linked: { enable: false, distance: 200, color: '#ffffff', opacity: 1, width: 2 },
				move: {
					enable: true,
					speed: 8,
					direction: 'none',
					random: false,
					straight: false,
					out_mode: 'out',
					bounce: false,
					attract: { enable: false, rotateX: 600, rotateY: 1200 }
				}
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: { enable: false, mode: 'grab' },
					onclick: { enable: false, mode: 'push' },
					resize: true
				},
				modes: {
					grab: { distance: 400, line_linked: { opacity: 1 } },
					bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
					repulse: { distance: 200, duration: 0.4 },
					push: { particles_nb: 4 },
					remove: { particles_nb: 2 }
				}
			},
			retina_detect: true
		});
	});

	$: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="cover">
	<div data-aos="fade-right" class="text-box cover-item">
		<h1 class="cover-text">AN UNFORGETTABLE NIGHT, AN EXCLUSIVE AFFAIR, AN EVENT TO REMEMBER</h1>
		<div class="logo-img cover-item" />
		<h1 class="cover-text">We'll Handle It</h1>
		<h2>Event <span id="event-text" /></h2>
	</div>
</div>

<div class="info-ctns">
</div>
<div class="gay">
	<div class="info-ctn">
		<h1>WHY HANDLERS?</h1>
		<p>Everyone wants to attend an event that is memorable and unique.</p>
		<p>
			Hosting events can be a challenge, and finding the right staff can be costly and time
			consuming.
		</p>
		<p>
			Planning events can be daunting, and most events do not meet attendee’s expectations of
			quality.
		</p>
		<p>We simplify the planning, staffing, and management of your event.</p>
		<p>We create an unforgettable experience for you and your guests</p>
		<p>
			We give you peace of mind, so you can focus on enjoying your event with your loved ones.
		</p>
	</div>

	<div class="info-ctn">
		<h1>THE HANDLERS DIFFERENCE</h1>
		<p>We marry Event Planning, Staffing, & Management into one holistic service.</p>
		<p>We simplify the entire process to give you more time to focus on what matters.</p>
		<p>We work with the best staff to make your event memorable & engaging.</p>
		<p>We focus on Quality: Quality People, Quality Venues, & Quality Experiences.</p>
	</div>
</div>

<div class="outer-ctn">
	<div id="particles-js" />
	<div class="text-box">
		<h1 class="heading">EXPERT PLANNING | BETTER STAFF | SEAMLESS MANAGEMENT</h1>
		<h1 class="heading">
			Experts in Exciting Experiences
			<br />
			<a class="contact" href="/contact">Contact us to start planning your next event</a>
			<br />
			<a class="contact" href="/pricing">Need event staffing? Check out our pricing here!</a>
		</h1>
	</div>
</div>

<div class="event-ctns">
	<div data-aos="fade-left" class="event-ctn">
		<div class="event-text">
			<h1>Event Planning</h1>
			<p>
				We have a diverse team lead by experienced event planners . We have decades of combined
				experience that will help take the pressure off of you. We work with you to bring your
				vision to fruition. Venue selection and preparation, sourcing caterers and alcohol, dry
				runs, promotions, staffing, and more. We’ll Handle It so you don’t have to!
			</p>
		</div>
		<img
			src="https://handlers.ca/wp-content/uploads/2022/06/cropped-pexels-cottonbro-3171837-scaled-1.jpg"
			alt="drinks"
		/>
	</div>
	<div data-aos="fade-right" class="event-ctn">
		{#if outerWidth > 1024}
		<img
			src="https://handlers.ca/wp-content/uploads/2022/06/pexels-rene-asmussen-3217157-scaled.jpg"
			alt="bartender"
		/>
		<div class="event-text">
			<h1>Event Staffing</h1>
			<p>
				Event Managers, Bartenders, Servers & Wait Staff, DJ / Entertainers, Security Staff,
				Photographers, Videographers, Event Fillers, Bar Back, Hosts & Hostesses, Models, Dancers,
				and Influencers. If your event needs people, we have the professionals to make it
				unforgettable.
			</p>
		</div>
		{:else}
		<div class="event-text">
			<h1>Event Staffing</h1>
			<p>
				Event Managers, Bartenders, Servers & Wait Staff, DJ / Entertainers, Security Staff,
				Photographers, Videographers, Event Fillers, Bar Back, Hosts & Hostesses, Models, Dancers,
				and Influencers. If your event needs people, we have the professionals to make it
				unforgettable.
			</p>
		</div>
		<img
			src="https://handlers.ca/wp-content/uploads/2022/06/pexels-rene-asmussen-3217157-scaled.jpg"
			alt="bartender"
		/>
		{/if}
	</div>
	<div data-aos="fade-left" class="event-ctn">
		<div class="event-text">
			<h1>Event Management</h1>
			<p>
				Your event is important to you and your guests, and we make it our job to do whatever we can
				to make it a success. Let our team of experienced experts handle the event’s staff,
				catering, and entertainment, while you spend the night enjoying the experience and your
				guests!
			</p>
		</div>
		<img src="https://handlers.ca/wp-content/uploads/2022/06/pexels-pixabay-260922.jpg" alt="bar" />
	</div>
</div>

<style>
	#particles-js {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #141414ff;
		background-image: url('');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 50%;
	}

	.info-ctns {
		background-image : url("https://handlers.ca/wp-content/uploads/2022/05/pexels-joonas-kaariainen-239466-scaled.jpg");
		background-repeat: no-repeat;
		background-position-x: center;
		background-attachment: fixed;
		background-size: cover;
		min-height: 500px;
		position: relative;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	
	.contact {
		display: inline-block;
		color: rgb(255, 144, 0);
		padding: 10px 7px 10px 7px;
		margin-top: 10px;
		border-radius: 10px;
		transition: all 200ms ease-in-out;
	}

	.contact:hover {
		background-color: rgba(255, 144, 0, 255);
		color: black;
	}

	.info-ctn {
		color: black;
		background-color: white;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 70px;
		width: 75%;
		border-radius: 10px;
		box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.65);
	}

	.gay {
		width: 100%;
		z-index: 100;
		background-color:transparent;
	}

	.event-ctns {
		background-image : url("https://res.cloudinary.com/yuliu/image/upload/e_brightness:-80/v1660932208/pexels-cottonbro-4667039-scaled_hoeyot.jpg");
		background-repeat: no-repeat;
		background-position: top center;
		background-attachment: fixed;
		display: flex;
		flex-direction: column;
		color: white;
		margin-top : 0;
		padding-top: 10px;
		padding-bottom: 50px;
		padding-left: 20px;
		padding-right: 20px;
	}

	.event-ctn {
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 25px;
		padding-left: 10px;
		padding-right: 10px;
	}

	@media only screen and (max-width: 1024px) {

		.event-ctn {
			display:flex;
			flex-direction: column;
			justify-content:center;
		}

		img {
		left:0;
		right:0;
		margin-left:auto;
		margin-right:auto;
		align-self:center;
		width: 50%;
		height: 100%;
		margin: 20px;
	}
	}

	.event-text {
		word-wrap: break-word;
		padding-right: 15px;
	}

	.event-ctn h1 {
		font-size: 25px;
		margin: 20px 0px 20px 0;
	}

	img {
		width: 50%;
		height: 100%;
		margin: 20px;
	}

	.info-ctn h1 {
		margin: 10px;
		font-size: 2.8em;
		padding: 7px;
		text-align: center;
	}

	.info-ctn p {
		text-align: center;
		margin: 2px;
		padding: 8px;
		font-size: 22px;
	}

	.cover-text {
		color: white;
		text-align: center;
		font-size: 35px;
		margin-right: 7.5px;
	}

	.text-box {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: transparent;
	}

	.outer-ctn {
		position: relative;
		width : 100%;
	}

	.cover-item {
		margin: 40px 40px 0 40px;
	}

	.heading {
		font-size: 22px;
		font-weight: 400;
		text-transform: uppercase;
		color: white;
		margin-bottom: 50px;
		text-align: center;
		margin-top: 20px;
	}

	/* ----------------------------------------------
 * Generated by Animista on 2022-8-13 18:39:8
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

	/**
 * ----------------------------------------
 * animation swing-in-top-fwd
 * ----------------------------------------
 */
	@-webkit-keyframes swing-in-top-fwd {
		0% {
			-webkit-transform: rotateX(-100deg);
			transform: rotateX(-100deg);
			-webkit-transform-origin: top;
			transform-origin: top;
			opacity: 0;
		}
		100% {
			-webkit-transform: rotateX(0deg);
			transform: rotateX(0deg);
			-webkit-transform-origin: top;
			transform-origin: top;
			opacity: 1;
		}
	}
	@keyframes swing-in-top-fwd {
		0% {
			-webkit-transform: rotateX(-100deg);
			transform: rotateX(-100deg);
			-webkit-transform-origin: top;
			transform-origin: top;
			opacity: 0;
		}
		100% {
			-webkit-transform: rotateX(0deg);
			transform: rotateX(0deg);
			-webkit-transform-origin: top;
			transform-origin: top;
			opacity: 1;
		}
	}

	h2 {
		text-align: center;
		color: white;
		font-weight: 100;
		font-size: 17px;
		margin-bottom: 15px;
	}

	.cover-text {
		padding-top: 20px;
	}

	.cover {
		margin-top: 0px;
		background-image: url('https://handlers.ca/wp-content/uploads/2022/06/Rose-Backg3.png');
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.logo-img {
		background-image: url('https://handlers.ca/wp-content/uploads/2022/06/Black-Logo.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		width: 200px;
		height: 200px;
		-webkit-animation: swing-in-top-fwd 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
		animation: swing-in-top-fwd 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
		animation-delay: 500ms;
		margin-bottom: 0px;
		margin-top: 0px;
	}
</style>
