<script>
	import { slide } from 'svelte/transition';

	const MAX_CHARACTER_LIMIT = 5000;
	const LIMIT_REACHED_COLOR = '#FF1E00';
	const LIMIT_NOT_REACHED_COLOR = '#59CE8F';

	// state variables
	let message = '';
	let messageIsEmpty = false;
	let characterLimitReached = false;

	async function sendMessage() {
		if (!message.length) {
			messageIsEmpty = true;
			return;
		}

		const body = {
			message
		};

		const response = await fetch('/api/message', {
			method: 'POST',
			body: JSON.stringify(body)
		});
	}

	const checkCharacterLimit = () =>
		(characterLimitReached = message.length >= MAX_CHARACTER_LIMIT ? true : false);
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>


<div data-aos="fade-up">
	<h1>Contact us now!</h1>
	<div class="contacts">
		<h2>
			<i class="fa-solid fa-address-book"></i> 1234 Nobody Street AAA 123, ON, Canada
		</h2>
		<h2><i class="fa-solid fa-phone"></i> 999-999-9999</h2>
		<h2><i class="fa-solid fa-envelope"></i>  <a style="color : gold" href="mailto:someemail@gmail.com">someemail@gmail.com</a></h2>
		
	</div>
	<div>
		<h1 class="send-msg-txt">Send us a message</h1>
		<textarea
			bind:value={message}
			on:input={checkCharacterLimit}
			class="textarea"
			placeholder="Leave us a message!"
			rows="10"
			maxlength={MAX_CHARACTER_LIMIT}
		/>
		<h2 style="color : {characterLimitReached ? LIMIT_REACHED_COLOR : LIMIT_NOT_REACHED_COLOR}">
			{message.length} / {MAX_CHARACTER_LIMIT}
		</h2>

		{#if messageIsEmpty}
			<div in:slide out:slide class="notification is-danger">
				<button on:click={() => (messageIsEmpty = false)} class="delete" />
				<p>Cannot send an empty message!!</p>
			</div>
		{/if}

		<button on:click={sendMessage} type="submit" class="button is-success">
			Send message
			<i class="fa-solid fa-paper-plane" />
		</button>
	</div>
</div>

<style>
	

	.notification {
		margin-bottom: 15px;
	}

	p {
		text-align : center;
		margin-left: auto;
		margin-right : auto;
	}

	.send-msg-txt {
		text-align: left;
		font-size: 22px;
	}

	i {
		margin-left: 4.5px;
	}

	h2 i {
		margin-right : 5px;
	}

	h1 {
		text-align: center;
		margin-top: 65px;
		margin-bottom: 0px;
		font-size: 45px;
	}

	div {
		margin-left: auto;
		margin-right: auto;
		margin-top: 0px;
		margin-bottom: 20px;
		width: 75%;
		color : white;
	}

	.button {
		display: block;
		margin-left: auto;
		margin-right : auto;
		margin-bottom : 65px;
	}

	h2 {
		text-align: right;
		margin-top: 2.5px;
		margin-right: 8.5px;
		transition: color 500ms ease-in-out;
	}

	textarea {
		width: 60%;
	}


	.contacts h2 {
		margin-top:15px;
		text-align: center;
	}

	
</style>
