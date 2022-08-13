<script>
  let darkModeOn = false;
  
  const toggleDarkMode = () => {
    darkModeOn = !darkModeOn;
    //localStorage.setItem("darkmode",JSON.stringify(darkModeOn));
    console.log(darkModeOn);
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

		<div class="navbar-end">
			<a class="navbar-item dark-mode-toggler">
				<label class="switch">
					<input on:change={toggleDarkMode} type="checkbox" />
					<span class="slider round" />
				</label>
        {#if !darkModeOn}
          <i class="fa-solid fa-moon toggle-icon"></i>
        {:else}
          <i class="fa-solid fa-sun toggle-icon"></i>
        {/if}
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

    /* https://www.w3schools.com/css/css_list.asp */  
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
    transform : scale(0.90);
   
	}
  
  .toggle-icon {
    transform : scale(1.5);
    margin-left : 20px;
    color : black;
  }

  .dark-mode-toggler {
    background-color : inherit;
  }
  
 

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}


	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: gold;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px gold;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
