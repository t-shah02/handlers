<script>
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	const MAX_CHARACTER_LIMIT = 5000;
	const LIMIT_REACHED_COLOR = '#FF1E00';
	const LIMIT_NOT_REACHED_COLOR = 'black;';
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

	let loading = false;

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
		loading = true;
		const response = await fetch('/api/message', {
			method: 'POST',
			body: JSON.stringify(body)
		});
		sendingMessage = false;
		loading = false;
		messageSent = response.ok ? true : false;

		if (messageSent) {
			message = '';
			characterLimitReached = false;
			messageIsEmpty = false;
		
		}
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
	</div>
	<div>
		{#if !loading}:
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

			<h2
				class="character-count"
				style="color : {characterLimitReached ? LIMIT_REACHED_COLOR : LIMIT_NOT_REACHED_COLOR}"
			>
				{message.length} / {MAX_CHARACTER_LIMIT}
			</h2>

			{#if messageIsEmpty}
				<div in:slide out:slide class="notification is-danger">
					<button on:click={() => (messageIsEmpty = false)} class="delete" />
					<p>Cannot send an empty message!!</p>
				</div>
			{/if}

			{#if messageSent}
				<div in:slide out:slide class="notification is-primary" style="background-color:rgba(246, 246, 6, 0.65);">
					<button on:click={() => (messageSent = false)} class="delete" />
					We have received the message successfully! Cheers to your next event. 
				</div>
			{/if}

			<button on:click={sendMessage} type="submit" class="button is-success">
				Send message
				<i class="fa-solid fa-paper-plane" />
			</button>
		{:else}
			<progress class="progress is-small" max="100">15%</progress>
		{/if}

		<div class="contact-info">
			<h2>
				<a style="color:black;" href="mailto:handlers.ca@gmail.com">handlers.ca@gmail.com</a>
			</h2>
			<h2 style="color : black;">999-999-9999</h2>
		</div>
	</div>
</div>

<style>
	.contact-info {
		margin-left: auto;
		margin-right: auto;
	}

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
		color: black;
	}

	i {
		margin-left: 4.5px;
	}

	.character-count {
		text-align: right;
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
		margin-bottom: 15px;
	}

	h2 {
		text-align: center;
		margin-top: 2.5px;
		margin-right: 8.5px;
		transition: color 500ms ease-in-out;
		font-size: clamp(18px, 2vw, 22px);
	}

	.textarea {
		width: 60%;
	}

	.contacts {
		margin-top: 65px;
		padding-top: 45px;
		position: relative;
	}

	.contacts h1 {
		text-align: center;
		margin-bottom: 0px;
		font-size: clamp(31px, 4vw, 45px);
		color: black;
	}

	.fade-ctn {
		background-image: url('https://res.cloudinary.com/yuliu/image/upload/c_crop,h_1900,x_530,y_1000/a_-2/v1662921534/unknown_gbhlbm.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top center;
		width: 100%;
		z-index: 1000;
		padding-bottom: 50px;
	}

	.button {
		background-color: rgba(246, 246, 6, 0.65);
		color: black;
	}

	.notification {
		color:black;
		display : flex;
		justify-content: center;
		align-items: center;
	}
</style>
