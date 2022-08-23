<script>
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	const MAX_CHARACTER_LIMIT = 5000;
	const LIMIT_REACHED_COLOR = '#FF1E00';
	const LIMIT_NOT_REACHED_COLOR = '#59CE8F';
	const WORD_BLACKLIST = [
		'fuck',
		'bitch',
		'nigga',
		'nigger',
		'slut',
		'shit',
		'shitty',
		'penis',
		'genitals',
		'vagina',
		'pussy',
		'操你妈',
		'操'
	];

	const SHAKE_ANIMATION = [
		{
			transform: 'translate(1px, 1px) rotate(0deg)'
		},
		{
			transform: 'translate(-1px, -2px) rotate(-1deg)'
		},
		{
			transform: 'translate(-3px, 0px) rotate(1deg)'
		},
		{
			transform: 'translate(3px, 2px) rotate(0deg)'
		},
		{
			transform: 'translate(1px, -1px) rotate(1deg)'
		},
		{
			transform: 'translate(-1px, 2px) rotate(-1deg)'
		},
		{
			transform: 'translate(-3px, 1px) rotate(0deg)'
		},
		{
			transform: 'translate(3px, 1px) rotate(-1deg)'
		},
		{
			transform: ' translate(-1px, -1px) rotate(1deg)'
		},
		{
			transform: 'translate(1px, 2px) rotate(0deg)'
		},
		{
			transform: 'translate(1px, -2px) rotate(-1deg)'
		}
	];

	// state variables
	let message = '';
	let messageIsEmpty = false;
	let characterLimitReached = false;
	let sendingMessage = false;
	let messageSent;
	let textbox;

	onMount(() => {
		textbox = document.querySelector('#textbox');
	});

	async function sendMessage() {
		if (!message.length) {
			messageIsEmpty = true;
			return;
		}

		if (sendingMessage) {
			return;
		}

		const body = {
			message
		};

		sendingMessage = true;
		const response = await fetch('/api/message', {
			method: 'POST',
			body: JSON.stringify(body)
		});
		sendingMessage = false;
		

		messageSent = response.ok ? true : false;
	}

	const filterAndLimitCheck = () => {
		characterLimitReached = message.length >= MAX_CHARACTER_LIMIT ? true : false;

		const filteredWords = [];
		let filteredMessage = message;

		for (const SWEAR of WORD_BLACKLIST) {
			filteredMessage = filteredMessage.replaceAll(SWEAR, '');
		}


		if (message.length !== filteredMessage.length) {
			const animation = textbox.animate(SHAKE_ANIMATION, {
				easing: 'ease',
				duration: 950
			});
			animation.play();
		}

		
		message = filteredMessage;

		textbox.value = message;
	};
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="fade-ctn" data-aos="fade-up">
	<div class="contacts">
		<h1>Contact us now!</h1>
		<h2>
			<i class="fa-solid fa-address-book" /> 
			<a style="color : gold" target="_blank" href="https://google.ca">1234 Nobody Street AAA 123, ON, Canada</a>
		</h2>
		<h2>
			<i class="fa-solid fa-envelope" />
			<a style="color : gold" href="mailto:someemail@gmail.com">someemail@gmail.com</a>
		</h2>
		<h2><i class="fa-solid fa-phone" /> 999-999-9999</h2>
		
	</div>
	<div>
		<h1 class="send-msg-txt">Send us a message</h1>
		<textarea
			bind:value={message}
			bind:this={textbox}
			on:input={filterAndLimitCheck}
			id="textbox"
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
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}

	.send-msg-txt {
		text-align: left;
		font-size: 22px;
	}

	i {
		margin-left: 4.5px;
	}

	h2 i {
		margin-right: 5px;
	}

	

	div {
		margin-left: auto;
		margin-right: auto;
		margin-top: 0px;
		margin-bottom: 50px;
		width: 75%;
		color: white;
	}

	.button {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	h2 {
		text-align: right;
		margin-top: 2.5px;
		margin-right: 8.5px;
		transition: color 500ms ease-in-out;
	}

	textarea {
		width: 60%;
		resize : none;
	}

	.contacts {
		margin-top : 65px;
	}

	.contacts h1 {
		text-align: center;
		margin-bottom: 0px;
		font-size: 45px;
	}

	.contacts h2 {
		margin-top: 15px;
		text-align: center;
	}
</style>
