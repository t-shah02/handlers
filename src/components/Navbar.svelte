<script>
	import { fade } from 'svelte/transition/';
	import { onMount } from 'svelte';

	let darkModeOn = false;
	let burgerToggled = false;

	onMount(() => {
		let hamburger = document.querySelector('.navbar-burger');
		let menu = document.querySelector('.navbar-menu');

		hamburger.addEventListener('click', () => {
			if (burgerToggled) {
				hamburger.classList.remove('is-active');
				menu.classList.remove('is-active');
			} else {
				hamburger.classList.toggle('is-active');
				menu.classList.toggle('is-active');
				menu.style.backgroundColor =  "black";
			}

			burgerToggled = !burgerToggled;
		});
	});

	$: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;

</script>
<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item company-name hover-item" href="/"> HANDLERS </a>

		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item hover-item" href="/">
				<i class="fa-solid fa-house" />
				Home
			</a>

			<a class="navbar-item hover-item" href="/pricing">
				<i class="fa-solid fa-coins" />
				Pricing
			</a>

			<a class="navbar-item hover-item" href="/contact">
				<i class="fa-solid fa-comment" />
				Contact
			</a>

			<a class="navbar-item hover-item" href="/privacy">
				<i class="fa-solid fa-shield" />
				Privacy Policy
			</a>
		</div>
		{#if innerWidth >= 1205}
		<div class="navbar-end">
			<div class="navbar-item event-heading">
				EXPERT PLANNING | BETTER STAFF | SEAMLESS MANAGEMENT
			</div>
		</div>
		{/if}
	</div>
</nav>

<style>
	i {
		margin-right: 5px;
	}

	.company-name {
		font-size: 28px;
	}

	.navbar-burger {
		color: white;
		background-color: black;
	}

	.navbar {
		background-color: black;
		z-index: 1000;
		border-bottom: 3px solid #FFBF00;
	}

	.navbar-item {
		color: white;
		transition: color 200ms ease-in-out;
	}

	.hover-item:hover {
		color: #FFBF00;
		background-color : inherit;
	}

	.event-heading {
		font-size : 20px;
	}

	

</style>
