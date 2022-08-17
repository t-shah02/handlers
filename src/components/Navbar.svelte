<script>

	import { fade } from "svelte/transition/";


	let darkModeOn = false;
	


	const toggleDarkMode = () => {
		darkModeOn = !darkModeOn;
		//localStorage.setItem("darkmode",JSON.stringify(darkModeOn));
		console.log(darkModeOn);
	};

	function handleCursorOnDarkModeToggle(event) {
		const target = event.target;
		if (target.nodeName !== "I") {
			target.style.cursor = "pointer"; 
		}
		else {
			console.log("hovered on non I element!");
			target.style.cursor = "auto";
		}
	}
	
</script>

<nav class="navbar has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
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
		color : white;
	}

	.navbar {
		background-color : 	#1e2124;
	}

	.navbar-item {
		color : white;
		transition : background-color 200ms ease-in-out;
	}	

</style>
