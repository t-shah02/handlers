<script>
	import Card from '../components/Card.svelte';

	$: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;
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
		<h2>Event Planning | Event Management | Event Staffing</h2>
	</div>
</div>

<div class="info-ctns" />
<div class="gay">
	<div class="info-ctn">
		<div class="info-text">
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
		<div
			style="background-image : url('https://media.discordapp.net/attachments/1018012896162218014/1018013283783016588/pexels-rene-asmussen-2504913.jpg?width=1007&height=670')"
			class="info-img img-one"
		/>
	</div>

	<div class="info-ctn">
		<div class="info-text">
			<h1>THE HANDLERS DIFFERENCE</h1>
			<p>We marry Event Planning, Staffing, & Management into one holistic service.</p>
			<p>We simplify the entire process to give you more time to focus on what matters.</p>
			<p>We work with the best staff to make your event memorable & engaging.</p>
			<p>We focus on Quality: Quality People, Quality Venues, & Quality Experiences.</p>
		</div>
		<div
			style="background-image : url('https://media.discordapp.net/attachments/1018012896162218014/1018013157513510972/pexels-maria-orlova-4947565.jpg?width=446&height=669')"
			class="info-img img-two"
		/>
	</div>
</div>

<div class="outer-ctn">
	<div class="text-box">
		<h1 class="heading">
			Experts in Exciting Experiences
			<br />
			<a class="contact" href="/contact">Contact us to start planning your next event</a>
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
		{#if innerWidth <= 1024}
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
		{:else}
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
	.info-ctns {
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.contact {
		display: inline-block;
		background-color: rgba(246, 246, 6, 0.65);
		color: white;
		padding: 10px 7px 10px 7px;
		margin-top: 10px;
		transition: background-color 200ms ease-in-out;
		max-width: 90%;
	}

	.contact:hover {
		color: black;
	}

	.info-ctn {
		display: flex;
		color: white;
		flex-direction: column;
		background-color: black;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 70px;
		width: 75%;
		border-radius: 0px;
		box-shadow: 2px 2px 4px 8px hsla(60, 95%, 49%, 0.65);
		word-wrap: break-word;
	}

	@media only screen and (min-width: 1024px) {
		.info-ctn {
			display: flex;
			color: white;
			flex-direction: row;
			background-color: black;
			left: 0;
			right: 0;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 70px;
			width: 75%;
			border-radius: 0px;
			box-shadow: 2px 2px 4px 8px hsla(60, 95%, 49%, 0.65);
			word-wrap: break-word;
		}
	}

	.info-img {
		background-repeat: no-repeat;
		background-size: cover;
		margin: 20px;
		width: 50%;
	}

	.img-two {
		background-position: center;
	}

	.gay {
		width: 100%;
		z-index: 100;
		background-color: transparent;
	}

	.event-ctns {
		background-image: url('https://res.cloudinary.com/yuliu/image/upload/e_brightness:-80/v1660932208/pexels-cottonbro-4667039-scaled_hoeyot.jpg');
		background-repeat: no-repeat;
		background-position: top center;
		background-attachment: fixed;
		display: flex;
		flex-direction: column;
		color: white;
		margin-top: 0;
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
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		img {
			left: 0;
			right: 0;
			margin-left: auto;
			margin-right: auto;
			align-self: center;
			width: 50%;
			height: 100%;
			margin: 20px;
		}
	}

	.event-text {
		word-wrap: break-word;
		padding-right: 15px;
		font-size: clamp(17px, 2vw, 22px);
		padding: 20px;
	}

	.event-ctn h1 {
		font-size: clamp(24px, 3.5vw, 36px);
		margin: 20px 0px 20px 0;
	}

	img {
		width: 50%;
		height: 100%;
		margin: 20px;
	}

	.info-ctn h1 {
		margin: 10px;
		font-size: clamp(28px, 4vw, 40px);
		padding: 7px;
		text-align: center;
	}

	.info-ctn p {
		text-align: center;
		margin: 2px;
		padding: 8px;
		font-size: clamp(17px, 2vw, 22px);
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
		width: 100%;
		padding-top: 50px;
		padding-bottom: 50px;
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
	}

	.logo-img {
		background-image: url('https://handlers.ca/wp-content/uploads/2022/06/Black-Logo.png');
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		width: 130px;
		height: 130px;
		-webkit-animation: swing-in-top-fwd 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
		animation: swing-in-top-fwd 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
		animation-delay: 500ms;
		margin-bottom: 0px;
		margin-top: 0px;
	}
</style>
