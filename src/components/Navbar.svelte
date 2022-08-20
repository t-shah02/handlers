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
				menu.style.backgroundColor =  "#282b30";
			}

			burgerToggled = !burgerToggled;
		});
	});
</script>

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item company-name" href="/"> HANDLERS </a>

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
			<a class="navbar-item" href="/">
				<i class="fa-solid fa-house" />
				Home
			</a>

			<a class="navbar-item" href="/pricing">
				<i class="fa-solid fa-coins" />
				Pricing
			</a>

			<a class="navbar-item" href="/contact">
				<i class="fa-solid fa-comment" />
				Contact
			</a>

			<a class="navbar-item" href="/privacy">
				<i class="fa-solid fa-shield" />
				Privacy Policy
			</a>
		</div>
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
		background-color:#282b30;
	}

	.navbar {
		background-color: #282b30;
		z-index: 1000;
	}

	.navbar-item {
		color: white;
		transition: background-color 200ms ease-in-out;
	}

	.navbar-item:hover {
		background-color: #2f71e8;
		color: gold;
	}

	

</style>
